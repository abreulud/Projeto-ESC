/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react';
import mainImage from '../../assets/images/main_image.png';
import imagePage from '../../assets/images/page.png';
import { api } from '../../services/api';

const API_KEY = '032a8fa50ef0f9979a5439c779976b7d';

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

        const total = Object.values(components).reduce(
          (sum, value) => sum + value,
          0,
        );

        const componentArray = Object.entries(components).map(
          ([key, value]) => ({
            name: key,
            percentage: ((value / total) * 100).toFixed(2),
          }),
        );
        setApiData(componentArray);
      });
  };

  useEffect(() => {
    getApiData({ lat: '35', lon: '139' });
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
      <div>
      {apiData?.length
          ? apiData?.map((component: any) => (
              <div key={component.name}>
                <p>{component.name}</p>
                <p>{component.percentage}</p>
              </div>
            ))
          : null}
      </div>
    </>
  );
};
