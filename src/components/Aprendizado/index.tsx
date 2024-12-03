import LightBulb from '../../assets/images/light_bulb.png';

export const Aprendizado = () => {
  return (
    <div
      style={{
        backgroundColor: '#D9EFDE',
        display: 'flex',
        flexDirection: 'column',
      }}>
      <section className="mainContent">
        <div>
          <h1>
            <span style={{ color: '#457461' }}>A</span>
            <span style={{ color: 'black' }}>
              prendizado
              <br />
            </span>
          </h1>

          <h2>
            Em nossa página de aprendizado você encontrará
            <br />
            informações valiosas sobre as práticas sustentáveis,
            <br />
            gestão responsável de resíduos e como pequenas ações
            <br />
            podem causar um grande impacto no meio ambiente.
          </h2>
          <p className="homePageSubtitle">
            Nosso objetivo é capacitar você a adotar hábitos mais conscientes e
            <br />
            contribuir para a preservação do nosso planeta. Ao final, teste seus
            <br />
            conhecimentos com um quiz educativo e veja se está preparado para
            <br />
            fazer a diferença!
          </p>
        </div>
        <img
          style={{
            height: 380,
            width: 300,
          }}
          alt="Main Image"
          src={LightBulb}
        />
        
      </section>
      <button style={{
        width: 170,
        borderRadius: 32,
        backgroundColor: '#457461',
        color: 'white',
        padding: 12,
        marginLeft: 280,
        marginTop: 20,
      }}>Acessar Quiz</button>
      <p
        style={{
          color: '#223C32',
          textAlign: 'center',
          paddingTop: 300,
          paddingBottom: 205,
          paddingLeft: 100,
          paddingRight: 100,
        }}>
        A conscientização é essencial para incentivar a separação correta e a
        reciclagem dos resíduos.
        <br />
        <br />
        Muitas vezes, as pessoas não têm conhecimento sobre os diferentes tipos
        de resíduos e como podem ser reciclados ou reutilizados.
        <br />
        <br />
        Ao educar a população sobre a importância da segregação e os benefícios
        ambientais da reciclagem, é possível aumentar significativamente as
        taxas de reciclagem e reduzir a quantidade de resíduos enviados para
        aterros sanitários.
        <br />
        <br />
        Outro aspecto relevante da conscientização na gestão de resíduos é o
        combate ao desperdício. Ao promover uma cultura de consumo consciente e
        redução do desperdício, é possível minimizar a quantidade de resíduos
        produzidos e maximizar o uso eficiente dos recursos naturais.
      </p>
    </div>
  );
};
