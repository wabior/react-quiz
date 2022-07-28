import React, {useEffect, useState} from "react";
import Question from "./Question/Question";
import Answer from "./Answer/Answer";
import getQuestions from "./getQuestions";

function Quiz() {

    const [questions, setQuestions] = useState(null);

    useEffect(() => {
        getQuestions()
            .then(data => setQuestions(data));
    }, []);

    return (
        <div className='container border p-0'>
            {questions && <Question question={questions[0]['question']} />}
            <div className="row m-0">
                <Answer/><Answer/>
                <Answer/><Answer/>
            </div>
            <button type={'submit'} className={'btn btn-outline-secondary px-5 my-4'}>Dalej</button>
        </div>
    );
}

export default Quiz;