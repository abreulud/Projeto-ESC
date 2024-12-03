import React from "react";
import mainImage from "../../assets/images/main_image.png";
import imagePage from "../../assets/images/page.png";

export const HomePage: React.FC = () => {
  return (
    <>
      <div className="container">
        <section className="mainContent">
          <div>
            <h1>
              <span style={{ color: "#457461" }}>E</span>
              <span style={{ color: "black" }}>
                ducação,
                <br />
              </span>
              <span style={{ color: "#43AD7C" }}>S</span>
              <span style={{ color: "black" }}>
                ustentabilidade e<br />
              </span>
              <span style={{ color: "#457461" }}>C</span>
              <span style={{ color: "black" }}>onexão</span>
            </h1>

            <h2>
            Os impactos do descarte incorreto de resíduos no meio ambiente são alarmantes, afetando solos, rios, oceanos e agravando a crise climática. 
             
            </h2>
            <p className="homePageSubtitle">
            A Plataforma ESC busca conscientizar sobre esses problemas, oferecendo informações e ferramentas para práticas sustentáveis de forma interativa. Alinhada ao ODS 12, nossa missão é contribuir para o consumo e produção responsáveis, promovendo um futuro mais sustentável. 
            Aprenda e transforme conosco!
            </p>
          </div>
          <img alt="Main Image" src={mainImage} />
        </section>
      </div>
      <img className="imageMainPage" alt="Image Page" src={imagePage} />
    </>
  );
};
