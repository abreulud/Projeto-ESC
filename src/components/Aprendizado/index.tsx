import { useCallback, useEffect, useState } from 'react';
import LightBulb from '../../assets/images/light_bulb.png';
// @ts-ignore
import Modal from 'react-modal';
import axios from 'axios';

export const Aprendizado = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [isAnswered, setIsAnswered] = useState(false);

  // Map letters to indices
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

  const currentQuiz = quizQuestions[currentQuestionIndex];
  const correctAnswerIndex = currentQuiz
    ? answerMapping[currentQuiz.correctAnswer]
    : null;

  const handleAnswerClick = (option) => {
    if (!isAnswered) {
      setSelectedAnswer(option);
      setIsAnswered(true);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setSelectedAnswer('');
      setIsAnswered(false);
    } else {
      setIsOpen(false);
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
      height: 500,
      width: 800,
      display: 'flex',
      flexDirection: 'column',
      borderRadius: 32,
      padding: 32,
      paddingTop: 80,
      paddingBottom: 80,
      backgroundColor: '#fff',
      alignSelf: 'center',
      columnGap: 32,
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
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
      {quizQuestions?.length ? (
        <button
          onClick={() => setIsOpen(true)}
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
        onRequestClose={() => setIsOpen(false)}
        style={{ overlay: styles.modalOverlay, content: styles.modalContent }}>
        {currentQuiz && (
          <div>
            <div style={styles.questionHeader}>
              <h2 style={{ color: 'black' }}>
                Pergunta: {currentQuestionIndex + 1}/{quizQuestions.length}
              </h2>
              <span onClick={() => setIsOpen(false)} style={styles.sairButton}>
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
