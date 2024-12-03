import './App.css';
import { useState } from 'react';
import escLogo from './assets/images/esc_logo.png';
import { HomePage } from './components/HomePage';
import { Ongs } from './components/Ongs';
import { Aprendizado } from './components/Aprendizado';

const headerButtons = ['Página Inicial', 'Aprendizado', 'ONGs'];
function App() {
  const [selectedHeaderOption, setSelectedHeaderOption] = useState(
    headerButtons[0],
  );

  const handlePageToBeDisplayed = () => {
    switch (selectedHeaderOption) {
      case 'Página Inicial':
        return <HomePage />;
      case 'ONGs':
        return <Ongs />;
      case 'Aprendizado':
        return <Aprendizado />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="mainContainer">
      <header className="header">
        <img alt="headerLogo" src={escLogo} />

        {/* Função para mudança de cor ao selecionar a aba. */}
        <div className="headerButtonContainer">
          {headerButtons.map(button => (
            <button
              onClick={() => {
                setSelectedHeaderOption(button);
              }}
              key={button}
              style={{
                height: 36,
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
                backgroundColor:
                  selectedHeaderOption === button ? '#457461' : 'transparent',
                color: selectedHeaderOption === button ? 'white' : 'black',
                borderWidth: 0,
                outline: 'none',
              }}>
              {button}
            </button>
          ))}
        </div>
      </header>

      {handlePageToBeDisplayed()}
    </div>
  );
}

export default App;
