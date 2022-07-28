function getQuestions() {
    const url = 'https://jaroslawwabich.eu/api/question';

    const load = async () => {
        try {
            let response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                }
            });
            if (!response.ok) {
                throw Error('Brak pytań');
            }
            return await response.json();

        } catch (err) {
            console.error(err.message)
        }
    }

    return load();
}

export default getQuestions