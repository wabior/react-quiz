function getCorrectAnswer(id) {
    const url = 'https://jaroslawwabich.eu/api/question';

    const load = async () => {
        try {
            let response = await fetch(`${url}/${id + 1}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                }
            });
            if (!response.ok) {
                throw Error('Błąd pobierania pytania');
            }
            return response.json().then(data => Number(data.answer_correct));

        } catch (err) {
            console.error(err.message)
        }
    }

    return load();
}

export default getCorrectAnswer