import React from 'react';

function Question({ question, questionNo, questionsCount }) {
    return (
        <div className={'container'}>
            <div>Pytanie { questionNo } / { questionsCount }</div>
            <div className={'h2 p-3 m-0'}>{ question }</div>
        </div>
    );
}

export default Question;