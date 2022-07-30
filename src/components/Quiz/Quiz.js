import React, {useEffect, useState} from 'react';
import Question from './Question/Question';
import Answers from './Answers/Answers';
import getQuestions from './getQuestions';
import getCorrectAnswer from "./Question/getCorrectAnswer";
import Score from "./Score/Score";

function Quiz() {
    const [questions, setQuestions] = useState(null);
    const [questionNo, setQuestionNo] = useState(0);
    const [answered, setAnswered] = useState(null);
    const [userAnswers, setUserAnswers] = useState([]);
    const [score, setScore] = useState(0);
    const [finish, setFinish] = useState(false);

    useEffect(() => {
        getQuestions()
            .then(data => setQuestions(data));
    }, []);

    function increaseQuestionNo() {
        setAnswered(null);
        if (questionNo <= questions.length - 1) {
            if (questionNo < questions.length - 1) {
                setQuestionNo(questionNo + 1);
            } else if (questionNo >= questions.length - 1) {
                setFinish(true);
            }
        }
    }

    function handleSubmit() {
        increaseQuestionNo();
        setUserAnswers([...userAnswers, answered]);

        getCorrectAnswer(questionNo)
            .then(correctAnswer => {
                if (answered === correctAnswer) setScore(score + 1);
            });
    }

    const userAnswerHandler = (userAnswer = null) => {
        setAnswered(userAnswer);
    }

    return (<div
            className='quiz-container container mt-3 mt-md-0 mb-md-5 justify-content-md-center'>
            {finish ? <Score score={score}/>
                    : (questions ? <>
                    <Question question={questions[questionNo]['question']}
                              questionNo={questionNo + 1}
                              questionsCount={questions.length}/>
                    <Answers question={questions[questionNo]}
                             onAnswer={(userAnswer) => userAnswerHandler(userAnswer)}/>

                    <div onClick={handleSubmit}
                         className={`btn btn-outline-secondary px-5 my-4 ${answered === null ? 'disabled' : ''}`}
                    >
                        Dalej
                    </div>

                </> : <p>Pobieranie pytań</p>)}
        </div>);
}

export default Quiz;