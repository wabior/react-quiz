import React from 'react';

const Score = ({score, questionsCount}) => {
    return (
        <>
            <p className='h5 mt-0 mb-5'>KONIEC</p>
            <p className='h2'>Twój wynik to {score} na {questionsCount} poprawnych odpowiedzi.</p>
        </>
    );
};

export default Score;
