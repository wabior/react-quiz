import React from 'react';

const Score = ({score}) => {
    return (
        <>
            <p className='h1 mt-0 mb-3'>KONIEC</p>
            <p className='h2'>Twój wynik to {score}</p>
        </>
    );
};

export default Score;
