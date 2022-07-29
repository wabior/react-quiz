import React from "react";
import Answer from "./Answer";

function Questions({ question }) {
    const answersArray = ['a', 'b', 'c', 'd'];

    return (
        <div className="row m-0">
            { answersArray.map((option, key) =>
                <Answer answer={question[`answer_${option}`]} key={key} idx={key}/>
            )}
        </div>
    )
}

export default Questions;