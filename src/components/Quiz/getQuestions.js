import {logDOM} from "@testing-library/react";

function getQuestions() {
    const url = 'https://jaroslawwabich.eu/api/question';

    const load = async () => {
        try {
            let data = await fetch(url, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                }
            });
            if (!data.ok) {
                throw Error('Brak pytań');
            }
            return await data.json();

        } catch (err) {
            console.error(err.message)
        }
    }
    return load();
}

export default getQuestions