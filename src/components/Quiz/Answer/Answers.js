import React from "react";
import Answer from "./Answer";

function Questions({ question }) {
    return (
        <div className="row m-0">
            <Answer answer={question.answer_a} />
            <Answer answer={question.answer_b}/>
            <Answer answer={question.answer_c}/>
            <Answer answer={question.answer_d}/>
        </div>
    )
}

export default Questions;