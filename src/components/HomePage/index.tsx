/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react';
import mainImage from '../../assets/images/main_image.png';
import imagePage from '../../assets/images/page.png';
import { api } from '../../services/api';
import CO2 from '../../assets/elements/co2.png';
import NH3 from '../../assets/elements/nh3.png';
import NO2 from '../../assets/elements/no2.png';
import O3 from '../../assets/elements/o3.png';
import PM25 from '../../assets/elements/pm25.png';
import SO2 from '../../assets/elements/so2.png';

const API_KEY = '032a8fa50ef0f9979a5439c779976b7d';

const elementIcons = {
  co: CO2,
  nh3: NH3,
  no2: NO2,
  o3: O3,
  pm25: PM25,
  so2: SO2,
};

export const HomePage: React.FC = () => {
  const [apiData, setApiData] = React.useState<any>(null);

  const getApiData = async ({ lat, lon }: { lat: string; lon: string }) => {
    await api
      .get('/air_pollution', {
        params: {
          lat,
          lon,
          appid: API_KEY,
        },
      })
      .then(response => {
        const components = response.data.list[0].components;

        const filteredComponents = ['nh3', 'no2', 'o3', 'co'].reduce(
          (acc, key) => {
            if (components[key] !== undefined) {
              acc[key] = components[key];
            }
            return acc;
          },
          {},
        );

        const total = Object.values(filteredComponents).reduce(
          (sum, value) => sum + value,
          0,
        );

        const componentArray = Object.entries(filteredComponents).map(
          ([key, value]) => ({
            name: key,
            percentage: ((value / total) * 100).toFixed(2),
            icon: elementIcons[key],
          }),
        );

        setApiData(componentArray);
      });
  };

  useEffect(() => {
    getApiData({ lat: '-12.908859', lon: '-38.455125' });
  }, []);

  return (
    <>
      <div className="container">
        <section className="mainContent">
          <div>
            <h1>
              <span style={{ color: '#457461' }}>E</span>
              <span style={{ color: 'black' }}>
                ducação,
                <br />
              </span>
              <span style={{ color: '#43AD7C' }}>S</span>
              <span style={{ color: 'black' }}>
                ustentabilidade e<br />
              </span>
              <span style={{ color: '#457461' }}>C</span>
              <span style={{ color: 'black' }}>onexão</span>
            </h1>

            <h2>
              Os impactos do descarte incorreto de resíduos no meio ambiente são
              alarmantes, afetando solos, rios, oceanos e agravando a crise
              climática.
            </h2>
            <p className="homePageSubtitle">
              A Plataforma ESC busca conscientizar sobre esses problemas,
              oferecendo informações e ferramentas para práticas sustentáveis de
              forma interativa. Alinhada ao ODS 12, nossa missão é contribuir
              para o consumo e produção responsáveis, promovendo um futuro mais
              sustentável. Aprenda e transforme conosco!
            </p>
          </div>
          <img alt="Main Image" src={mainImage} />
        </section>
      </div>
      <img className="imageMainPage" alt="Image Page" src={imagePage} />
      <div
        style={{
          backgroundColor: '#fffcee',
        }}>
        <h1 style={{ textAlign: 'center' }}>
          Impacto dos{' '}
          <span style={{ color: '#457461' }}>
            gases poluentes
            <br />
          </span>
        </h1>
        <div
          style={{
            flexDirection: 'row',
            display: 'flex',
            gap: 50,
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          {apiData?.length
            ? apiData?.map((component: any) => (
                <div key={component.name}>
                  <img
                    src={elementIcons[component.name]}
                    alt={component.name}
                    style={{ height: 50, width: 50 }}
                  />
                  <p style={{color: 'black', fontWeight: 'bold', fontSize: 18}}>{component.percentage}%</p>
                </div>
              ))
            : null}
        </div>
      </div>
    </>
  );
};
