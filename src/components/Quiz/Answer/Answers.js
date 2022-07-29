import React from 'react';
import Answer from './Answer';

function Questions({question, onAnswer}) {
    const answersArray = ['a', 'b', 'c', 'd'];

    return (
        <div className='row m-0'>
            {answersArray.map((option, idx) =>
                <Answer answer={question[`answer_${option}`]}
                        key={idx}
                        answerNo={idx}
                        onAnswer={(userAnswer) => onAnswer(userAnswer)}
                />
            )}
        </div>
    )
}

export default Questions;