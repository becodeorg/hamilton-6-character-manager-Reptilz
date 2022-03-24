import '../style.scss';


//Fonction qui charge la liste des characters
 async function getCharacter(){
    const api_url = 'https://character-database.becode.xyz/characters';

    //get des datas dans l'API
    const response = await axios.get(api_url);
    const datas = response.data;
    //console.log(datas);

    //fragment
    const characterCardTemplate = document.querySelector("[data-card-template]");
    const characterCardContainer = document.querySelector("[data-character-cards-container]");



    //variables pour la fonction search
    const searchInput = document.querySelector("[data-search]");
    let characters = [];

    //Fonction qui permet de rechercher un character
    async function searchCharacter(){
        try {
            searchInput.addEventListener("input", e => {
                const value = e.target.value.toLowerCase(); 
                characters.forEach(char => {
                    const isVisible = char.name.toLowerCase().includes(value);
                    char.element.classList.toggle("hide", !isVisible);
                })
            })
        }
        catch(err) {
            console.log(err);
        }
    }
    searchCharacter();



//Ajout du template dans le HTML avec les données de l'API
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



            //Show character when click...
            cardBtn.addEventListener("click",()=>{
                async function showCharacter(){
                    const response = await axios.get(api_url + "/" + data.id);
                    const datas = response.data;
                    console.log(datas);
                    
                }
                showCharacter();



            })
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


}

getCharacter();