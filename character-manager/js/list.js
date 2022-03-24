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
    const searchInput = document.querySelector("[data-search]");

    let characters = [];

    try {
        characters = datas.map(data => {
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
            return {
                name: data.name,
                image: data.image,
                cardDescription: data.shortDescription,
                element: card
            };
        })
    }
    catch(err) {
        console.log(err);
    }


    //search character
    searchInput.addEventListener("input", e => {
        const value = e.target.value.toLowerCase(); 
        characters.forEach(char => {
            const isVisible = char.name.toLowerCase().includes(value);
            char.element.classList.toggle("hide", !isVisible);
        })
    })
}
getCharacter();