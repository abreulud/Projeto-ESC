import { useState } from "react";
import escLogo from "./assets/images/esc_logo.png";
import mainImage from "./assets/images/main_image.png"
import imagePage from "./assets/images/img_page.png"

import "./App.css";
const headerButtons = ["Página Inicial", "Aprendizado", "ONGs"];
function App() {
  const [selectedHeaderOption, setSelectedHeaderOption] = useState(
    headerButtons[0]
  );

  return (
    <div className="mainContainer">
        <header className="header">
          <img alt="headerLogo" src={escLogo} />

          {/* Função para mudança de cor ao selecionar a aba. */}
          <div className="headerButtonContainer"> 
            {headerButtons.map((button) => (
              <button
                onClick={() => {
                  setSelectedHeaderOption(button);
                }}
                key={button}
                style={{
                  height: 36,
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  backgroundColor:
                    selectedHeaderOption === button ? "#457461" : "transparent",
                  color: selectedHeaderOption === button ? "white" : "black",
                  borderWidth: 0,
                  outline: "none",
                }}
              >
                {button}
              </button>
            ))}
          </div>

        </header>
        {/* Apenas a página inicial está funcional por enquanto */}
      {selectedHeaderOption==="Página Inicial"?<div className="container">
        <section className="mainContent">
          <div>
            <h1>
              Educação,
              <br /> Sustentabilidade e<br />
              Conexão
            </h1>
            <h2>
            Body text for your whole article or post. We’ll put in some<br/>lorem ipsum to show how a filled<br/>-out page might look:
            </h2>
            <p>
              Excepteur efficient emerging, minim veniam anim aute carefully
              curate<br/>Ginza conversationexquisite perfect nostrud nisi intricate
              Content. Qui<br/>international first-class nulla ut. adipisicing,
              essential lovely queen<br/>tempor eiusmod irure. Exclusive izakaya
              charming<br/>Scandinavian impeccable aute quality of life soft power
              pariatur<br/>Melbourne occaecat
            </p>
          </div>
          <img alt="Main Image" src={mainImage} />
        </section>
      </div>:null}
        <img className="imagePage" alt="Image Page"src={imagePage}/>
    </div>
  );
}

export default App;
