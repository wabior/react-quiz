import React, {useEffect, useState} from "react";
import Question from "./Question/Question";
import getQuestions from "./getQuestions";
import Answers from "./Answer/Answers";

function Quiz() {

    const [questions, setQuestions] = useState(null);

    useEffect(() => {
        getQuestions()
            .then(data => setQuestions(data));
    }, []);

    return (
        <div className='container border p-0 pb-md-5 mb-md-5 d-flex flex-column align-items-center h-75 justify-content-center'>
            {questions
                ? <>
                    <Question question={questions[0]['question']}/>
                    <Answers question={questions[0]}/>
                    <button type={'submit'} className={'btn btn-outline-secondary px-5 my-4'}>Dalej</button>
                </>
                : <p>Pobieranie pytań</p>
            }
        </div>
    );
}

export default Quiz;