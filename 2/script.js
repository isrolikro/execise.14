
const fetchData = async () => {
    const url = 'https://humor-jokes-and-memes.p.rapidapi.com/jokes/random?max-length=200&include-tags=one_liner&min-rating=7&exclude-tags=nsfw&keywords=rocket';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '55839b3a05msh8645ba76fa9f2dcp135a7ajsn9c97b7c865b0',
            'X-RapidAPI-Host': 'humor-jokes-and-memes.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        alert(result.joke);
    } catch (error) {
        console.error(error);
    }
};

fetchData();
