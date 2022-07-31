import React, {useState} from 'react';
import Answer from './Answer/Answer';

function Questions({question, onAnswer}) {
    const answersArray = ['a', 'b', 'c', 'd'];

    const [userAnswer, setUserAnswer] = useState(null);

    function handleAnswer(answer){
        setUserAnswer(answer);
        onAnswer(answer);
    }

    return (
        <div className='row m-0'>
            {answersArray.map((option, idx) =>
                <Answer answer={question[`answer_${option}`]}
                        key={idx}
                        answerNo={idx}
                        onAnswer={handleAnswer}
                        userAnswered={userAnswer}
                />
            )}
        </div>
    )
}

export default Questions;