import React from "react";

function Question({ question }) {
    return (
        <div className={'bg-light p-3 border m-0'}>{ question }</div>
    );
}

export default Question;