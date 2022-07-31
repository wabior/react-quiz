import React, {useEffect, useState} from "react";

function Answer({answer, answerNo, onAnswer, userAnswered}) {
    const handleAnswerClick = (userAnswer) => {
                onAnswer(userAnswer);
    }

    return (
        <div className={'b col-12 col-md-6 p-3'}>
            <button type={'button'}
                    onClick={() => handleAnswerClick(Number(answerNo))}
                    className={`btn fs-5 w-100 h-100 py-3 ${(userAnswered == answerNo) ? 'btn-secondary' : 'btn-outline-secondary'}`}
            >
                {answer}
            </button>
        </div>
    );
}

export default Answer;