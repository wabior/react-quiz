import React, {Component} from "react";
import Question from "./Question/Question";
import Answer from "./Answer/Answer";
import getQuestions from "./getQuestions";

getQuestions().then(a => console.log(a));

class Quiz extends Component {

    render() {
        return (
            <div className={'container border p-0'}>
                <Question/>
                <div className="row m-0">
                    <Answer/><Answer/>
                    <Answer/><Answer/>
                </div>
                <button type={'submit'} className={'btn btn-outline-secondary px-5 my-4'}>Dalej</button>
            </div>
        );
    }
}

export default Quiz;