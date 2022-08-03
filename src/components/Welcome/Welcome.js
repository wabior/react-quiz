import React from 'react';

function Welcome({handleQuizStatus}) {
    return (
        <div className='mt-3 fs-5 container d-flex flex-column align-items-center justify-content-evenly h-75 pb-5'>
            <main>
                <p>Quiz dotyczy znajomości książki "Siedem nawyków skutecznego działania".</p>
                <p>Sprawdź, czy jesteś gotowy, by zmienić swoje życie!</p>
            </main>
            <button type={"submit"}
                    className={'btn btn-dark px-5 py-4 fs-5 mt-5'}
                    onClick={ () => handleQuizStatus('started') }
            >Rozpocznij Quiz</button>
        </div>
    );
}

export default Welcome;