import React, {useEffect, useState} from 'react';
import Question from './Question/Question';
import getQuestions from './getQuestions';
import Answers from './Answers/Answers';

function Quiz() {
    const [questions, setQuestions] = useState(null);
    const [questionNo, setQuestionNo] = useState(0);
    const [showNextQuestion, setShowNextQuestion] = useState(true);
    const [answered, setAnswered] = useState(null);
    const [userAnswers, setUserAnswers] = useState([]);

    useEffect(() => {
        getQuestions()
            .then(data => setQuestions(data));
    }, []);

    function increaseQuestionNo() {
        setAnswered(null);
        if (questionNo < questions.length - 1) {
            if (questionNo >= questions.length - 1) {
                setShowNextQuestion(false);
            }
            setQuestionNo(questionNo + 1);
        }
    }

    function handleSubmit() {
        increaseQuestionNo();
        setUserAnswers([...userAnswers, answered]);
        console.log(userAnswers);
    }

    const userAnswerHandler = (userAnswer = null) => {
        setAnswered(userAnswer);
    }

    return (
        <div
            className='quiz-container container h-100 h-md-75 mb-md-5'>
            {questions
                ? <>
                    <Question question={questions[questionNo]['question']}
                              questionNo={questionNo + 1}
                              questionsCount={questions.length}/>
                    <Answers question={questions[questionNo]}
                             onAnswer={(userAnswer) => userAnswerHandler(userAnswer)}/>
                    {showNextQuestion &&

                        <div type={'submit'}
                             onClick={handleSubmit}
                             className={`btn btn-outline-secondary px-5 my-4 ${answered === null ? 'disabled' : ''}`}
                        >
                            Dalej
                        </div>
                    }
                </>
                : <p>Pobieranie pytań</p>
            }
        </div>
    );
}

export default Quiz;