import '../style.scss';


//list of characters
async function getCharacter(){
    const api_url = 'https://character-database.becode.xyz/characters';

    //get des datas dans l'API
    const response = await axios.get(api_url);
    const datas = response.data;
    console.log(datas);

    //fragment
    const characterCardTemplate = document.querySelector("[data-card-template]");
    const characterCardContainer = document.querySelector("[data-character-cards-container]");

    try {
        datas.forEach(data => {
            const card = characterCardTemplate.content.cloneNode(true).children[0];
         
            const cardImg = card.querySelector(["[data-img]"]);
            const cardName = card.querySelector("[data-name]");
            const cardDescription = card.querySelector("[data-description]");
            const cardBtn = card.querySelector("[data-btn]");

            cardName.textContent = data.name;
            cardImg.src = "data:image/gif;base64," + data.image;
            cardDescription.textContent = data.shortDescription;
            cardBtn.setAttribute("id", data.id);
            characterCardContainer.append(card);
        })
    }
    catch(err) {
        console.log(err);
    }
}

getCharacter();