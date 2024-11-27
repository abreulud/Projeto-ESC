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
              Body text for your whole article or post. We’ll put in some
              <br />
              lorem ipsum to show how a filled
              <br />
              -out page might look:
            </h2>
            <p className="homePageSubtitle">
              Excepteur efficient emerging, minim veniam anim aute carefully
              curate
              <br />
              Ginza conversationexquisite perfect nostrud nisi intricate
              Content. Qui
              <br />
              international first-class nulla ut. adipisicing, essential lovely
              queen
              <br />
              tempor eiusmod irure. Exclusive izakaya charming
              <br />
              Scandinavian impeccable aute quality of life soft power pariatur
              <br />
              Melbourne occaecat
            </p>
          </div>
          <img alt="Main Image" src={mainImage} />
        </section>
      </div>
      <img className="imageMainPage" alt="Image Page" src={imagePage} />
    </>
  );
};
