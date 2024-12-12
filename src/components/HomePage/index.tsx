/* eslint-disable no-irregular-whitespace */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import mainImage from '../../assets/images/main_image.png';
import imagePage from '../../assets/images/page.png';
import dashboard from '../../assets/images/dashboard.png';
import city from '../../assets/images/city.png';
import tree from '../../assets/images/tree.png';

import CO2 from '../../assets/elements/co2.png';
import NH3 from '../../assets/elements/nh3.png';
import NO2 from '../../assets/elements/no2.png';
import O3 from '../../assets/elements/o3.png';
import PM25 from '../../assets/elements/pm25.png';
import SO2 from '../../assets/elements/so2.png';


const elementIcons = {
  co: CO2,
  nh3: NH3,
  no2: NO2,
  o3: O3,
  pm25: PM25,
  so2: SO2,
};

const elementsToBeDisplayed = [{name:'nh3', percentage: '0,13'}, {name:'no2', percentage: '0,92'}, {name:'o3', percentage: '8,24'}, {name:'co', percentage: '90,71'}]

export const HomePage: React.FC = () => {
  
  return (
    <div
      style={{
        backgroundColor: '#FFFCEE',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 140,
      }}>
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
      <div
        style={{
          backgroundColor: '#386050',
          paddingTop: 35,
          marginTop: 140,
          paddingBottom: 30,
          borderRadius: 35,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <h2 style={{ color: '#D9EFDE', fontSize: 28, textAlign: 'center' }}>
          “Juntos, podemos reduzir a poluição do ar e manter as pessoas e o
          planeta saudáveis ​​e seguros.” - ONU
        </h2>
        <img className="imageMainPage" alt="Image Page" src={imagePage} />
      </div>

      <div
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          paddingTop: 150,
          backgroundColor: '#FFFCEE',
        }}>
        <img className="dashboard" alt="dashboard" src={dashboard} />
      </div>

      <div
        style={{
          backgroundColor: '#fffcee',
          paddingTop: 120,
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
            alignItems: 'center',
            justifyContent: 'space-evenly',
            paddingTop: 55,
          }}>
          {elementsToBeDisplayed?.length
            ? elementsToBeDisplayed?.map((component: any) => (
                <div key={component.name}>
                  <img
                    //@ts-ignore
                    src={elementIcons[component.name]}
                    alt={component.name}
                    style={{ height: 100, width: 100 }}
                  />
                  <p
                    style={{
                      color: 'black',
                      fontWeight: 'bold',
                      fontSize: 18,
                      textAlign: 'center',
                    }}>
                    {component.percentage}%
                  </p>
                </div>
              ))
            : null}
        </div>
      </div>

      <div
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          paddingTop: 130,
          backgroundColor: '#FFFCEE',
        }}>
        <img className="city" alt="city" src={city} />
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'center',
          color: '#FFFCEE',
          position: 'relative',
        }}>
        <img className="tree" alt="tree" src={tree} />
        <p className="treeText">
          "A natureza saudável é um direito
          <br />
          humano. Hoje, a poluição do ar
          <br />
          nega a milhares de milhões de
          <br />
          pessoas os seus direitos.
          <br />O ar poluído afeta 99% das
          <br /> pessoas no planeta"
          <br />- Organização das Nações Unidas (ONU)
        </p>
      </div>
    </div>
  );
};
