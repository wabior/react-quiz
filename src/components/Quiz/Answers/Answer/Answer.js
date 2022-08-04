import React, {useEffect, useRef, useState} from "react";

function Answer({answer, answerNo, onAnswer, userAnswered}) {
    const [newQuestion, setNewQuestion] = useState(true);
    const handleAnswerClick = (userAnswer) => {
        onAnswer(userAnswer);
        setNewQuestion(false);
    }

    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
            setNewQuestion(true)

    }, [answer]);


    return (
        <div className={'b col-12 col-md-6 p-3'}>
            <button type={'button'}
                    onClick={() => handleAnswerClick(Number(answerNo))}
                    className={`btn fs-5 w-100 h-100 py-3 ${(userAnswered === answerNo) && !newQuestion ? 'btn-secondary' : 'btn-outline-secondary'}`}
            >
                {answer}
            </button>
        </div>
    );
}

export default Answer;