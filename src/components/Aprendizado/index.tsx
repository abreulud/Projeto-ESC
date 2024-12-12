/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
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
    ? // @ts-ignore
      answerMapping[currentQuiz.correctAnswer]
    : null;

  const handleAnswerClick = (option: string) => {
    if (!isAnswered) {
      setSelectedAnswer(option);
      setIsAnswered(true);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
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
      textAlign: 'center',
      padding: 100,
      color: '#223C32',
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
    answerButton: (
      isAnswered: boolean,
      isSelected: boolean,
      isCorrect: boolean,
    ) => ({
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
  } as any;

  return (
    <div style={styles.container}>
      <section className="mainContent">
        <div>
          <h1>
            <span style={styles.header}>A</span>
            <span style={{ color: 'black' }}>prendizado</span>
          </h1>
          <h2>
            Em nossa página de aprendizado você encontrará informações valiosas
            sobre práticas sustentáveis.
          </h2>
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
        <button onClick={() => setIsOpen(true)} style={styles.quizButton}>
          Acessar Quiz
        </button>
      ) : null}
      <p style={styles.section}>
        A conscientização é essencial para incentivar a separação correta e a
        reciclagem dos resíduos.
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
              {/* @ts-ignore */}
              {currentQuiz.question}
            </h3>
            <div style={{ marginTop: 20 }}>
              {/* @ts-ignore */}
              {currentQuiz.options.map((option: string, index: number) => (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(option)}
                  style={styles.answerButton(
                    isAnswered,
                    option === selectedAnswer,
                    index === correctAnswerIndex,
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
