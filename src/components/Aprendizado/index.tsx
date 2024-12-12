import { useCallback, useEffect, useState } from 'react';
import LightBulb from '../../assets/images/light_bulb.png';
// @ts-ignore
import Modal from 'react-modal';
import axios from 'axios';

export const Aprendizado = () => {
  //Coordenar a renderização do modal de quiz na tela
  const [modalIsOpen, setModalIsOpen] = useState(false);
  //Armazenar as perguntas do quiz vindas do backend
  const [quizQuestions, setQuizQuestions] = useState([]);
  //Fazer um rastreamento do index da pergunta atual dentro do array de perguntas do quiz
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  //Resposta selecionada do usuário para a pergunta atual
  const [selectedAnswer, setSelectedAnswer] = useState('');
  //Saber se o usuário respondeu a pergunta atual ou não para mudar a cor do botão baseado na resposta
  const [isAnswered, setIsAnswered] = useState(false);

  // Dicionário que co-relaciona as possíveis respostas das perguntas com um index específico. (Porque o bankend retorna como uma letra e não com um index para lidar melhor com lista de perguntas)
  const answerMapping = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
  };

  
  const fetchQuestions = useCallback(async () => {
    const response = await axios.get('http://127.0.0.1:5000/quiz');
    setQuizQuestions(response.data);
  }, []);

  useEffect(() => {
    fetchQuestions();
  }, [fetchQuestions]);

  //É a pergunta atual que o usuário está respondendo
  const currentQuiz = quizQuestions[currentQuestionIndex];
  //É o index da resposta correta para a pergunta atual
  const correctAnswerIndex = currentQuiz
    ? answerMapping[currentQuiz.correctAnswer]
    : null;

  const handleAnswerClick = (option) => {
    if (!isAnswered) {
      setSelectedAnswer(option);
      setIsAnswered(true);
    }
  };

  //Função para mudar a pergunta atual
  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setSelectedAnswer('');
      setIsAnswered(false);
    } else {
      setModalIsOpen(false);
      setCurrentQuestionIndex(0);
      setSelectedAnswer('');
      setIsAnswered(false);
    }
  };

  const styles = {
    container: {
      backgroundColor: '#D9EFDE',
      display: 'flex',
      flexDirection: 'column',
    },
    header: {
      color: '#457461',
    },
    section: {
      color: '#223C32',
      textAlign: 'center',
      paddingTop: 300,
      paddingBottom: 205,
      paddingLeft: 100,
      paddingRight: 100,
    },
    quizButton: {
      width: 170,
      borderRadius: 32,
      backgroundColor: '#457461',
      color: 'white',
      padding: 12,
      marginLeft: 280,
      marginTop: 20,
      cursor: 'pointer',
    },
    modalOverlay: {
      backgroundColor: 'rgba(1, 4, 4, 0.30)',
      backdropFilter: 'blur(5px)',
    },
    modalContent: {
      maxHeight: '90vh',
      width: '90vw',
      display: 'flex',
      flexDirection: 'column',
      borderRadius: 32,
      padding: 32,
      backgroundColor: '#fff',
      alignSelf: 'center',
      columnGap: 32,
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      overflowY: 'auto',
    },
    questionHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
    },
    sairButton: {
      color: 'red',
      fontSize: 16,
      fontWeight: 'bold',
      cursor: 'pointer',
    },
    //Baseado na resposta selecionada, troca as cores do botão e do titulo do botão
    answerButton: (isAnswered, isSelected, isCorrect) => ({
      display: 'block',
      width: '100%',
      padding: 10,
      marginBottom: 10,
      borderRadius: 8,
      backgroundColor: isAnswered
        ? isCorrect
          ? '#457461' // Correct answer green
          : isSelected
          ? '#FF6961' // Incorrect selected red
          : '#f5f5f5' // Default background
        : '#f5f5f5',
      color: isAnswered && (isCorrect || isSelected) ? '#fff' : '#000',
      border: '1px solid #ccc',
      cursor: isAnswered ? 'default' : 'pointer',
    }),
    nextButtonContainer: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 20,
      paddingTop: 50,
    },
    nextButton: {
      padding: 10,
      borderRadius: 8,
      backgroundColor: '#457461',
      color: '#fff',
      border: 'none',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <section className="mainContent">
        <div>
          <h1>
            <span style={styles.header}>A</span>
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
      
      {/* Renderiza o botão de acesso ao quiz caso haja uma resposta do backend com as perguntas */}
      {quizQuestions?.length ? (
        <button
          onClick={() => setModalIsOpen(true)}
          style={styles.quizButton}>
          Acessar Quiz
        </button>
      ) : null}

      <p style={styles.section}>
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
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={() => {}}
        onRequestClose={() => setModalIsOpen(false)}
        style={{ overlay: styles.modalOverlay, content: styles.modalContent }}>
        {currentQuiz && (
          <div>
            <div style={styles.questionHeader}>
              <h2 style={{ color: 'black' }}>
                Pergunta: {currentQuestionIndex + 1}/{quizQuestions.length}
              </h2>
              <span onClick={() => setModalIsOpen(false)} style={styles.sairButton}>
                Sair
              </span>
            </div>
            <h3 style={{ color: 'black', marginBottom: 20 }}>
              {currentQuiz.question}
            </h3>
            <div style={{ marginTop: 20 }}>
              {currentQuiz.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(option)}
                  style={styles.answerButton(
                    isAnswered,
                    option === selectedAnswer,
                    index === correctAnswerIndex
                  )}>
                  {option}
                </button>
              ))}
            </div>
            {isAnswered && (
              <div style={styles.nextButtonContainer}>
                <button onClick={handleNextQuestion} style={styles.nextButton}>
                  {currentQuestionIndex < quizQuestions.length - 1
                    ? 'Próxima Pergunta'
                    : 'Finalizar Quiz'}
                </button>
              </div>
            )}
          </div>
        )}
      </Modal>
    </div>
  );
};
