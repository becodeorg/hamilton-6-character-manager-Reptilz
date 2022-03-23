import '../style.scss';


//list of characters
async function getCharacter(){
    const api_url = 'https://character-database.becode.xyz/characters';

    //get des datas dans l'API
    const response = await axios.get(api_url);
    const datas = response.data;
    console.log(datas);

    const cards = document.getElementById('cards');

    try {
        //afficher les datas dans le HTML
        datas.forEach((data) => {
            cards.innerHTML +=
            `
            <article class="card" id="card">
                <img class="card__img" id="card-img" src="data:image/gif;base64,${data.image}" alt="img">
                <h2 class="card__title" id="card-name">${data.name}</h2>
                <p class="card__description" id="card-short-description">${data.shortDescription}</p>
                <input class="card__btn" id="card-btn" type="button" value="See character">
            </article>
            `
        });
        
    }
    catch (err) {
        console.log(err);
    }
}

getCharacter();