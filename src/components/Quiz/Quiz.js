import React, {useEffect, useState} from 'react';
import Question from './Question/Question';
import getQuestions from './getQuestions';
import Answers from './Answer/Answers';

function Quiz() {
    const [questions, setQuestions] = useState(null);
    const [questionNo, setQuestionNo] = useState(0);
    const [showNextQuestion, setShowNextQuestion] = useState(true);
    const [answered, setAnswered] = useState(null);

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

    const userAnswerHandler = (userAnswer = null) => {
        console.log('user answered: ', userAnswer);
        setAnswered(userAnswer);
    }

    return (
        <div
            className='container border p-0 pb-md-5 mb-md-5 d-flex flex-column align-items-center h-75 justify-content-center'>
            {questions
                ? <>
                    <Question question={questions[questionNo]['question']} questionNo={questionNo + 1}
                              questionsCount={questions.length}/>
                    <Answers question={questions[questionNo]} onAnswer={(userAnswer) => userAnswerHandler(userAnswer)}/>
                    {showNextQuestion  && <div
                        type={'submit'} onClick={increaseQuestionNo}
                        className={`btn btn-outline-secondary px-5 my-4 ${answered === null ? 'disabled' : ''}`}
                    >
                        Dalej
                    </div>}
                </>
                : <p>Pobieranie pytań</p>
            }
        </div>
    );
}

export default Quiz;