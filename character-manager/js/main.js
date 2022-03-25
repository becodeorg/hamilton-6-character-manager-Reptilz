import '../style.scss';


//Fonction globale qui va contenir toutes les autres fonctions (list, show, delete, update, post)
 async function managerCharacter(){
    const api_url = 'https://character-database.becode.xyz/characters';

    //get des datas dans l'API
    const response = await axios.get(api_url);
    const datas = response.data;
    

    //list des characters
    const characterCardTemplate = document.querySelector("[data-card-template]");
    const characterCardContainer = document.querySelector("[data-character-cards-container]");


    //Variable qui transforme les datas en Objects
    
    let characters = [];

    //Fonction qui permet de rechercher un character
    async function searchCharacter(){
        const searchInput = document.querySelector("[data-search]");

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

                    const characterModal = document.querySelector("[data-modal-template]");
                    const characterCardContainer = document.querySelector("[data-character-modal-container]");

                    //Sélection du DOM à l'intérieur de l'article
                    const modal = characterModal.content.cloneNode(true);
                    const cardImg = modal.querySelector(["[data-img-modal]"]);
                    const cardName = modal.querySelector("[data-name-modal]");
                    const cardShortDescription = modal.querySelector("[data-short-description-modal");
                    const cardDescription = modal.querySelector("[data-description-modal");

                    //On donne les valeurs de l'API(datas) dans l'article
                    cardName.textContent = data.name;
                    cardImg.src = "data:image/gif;base64," + data.image;
                    cardShortDescription.textContent = data.shortDescription;
                    cardDescription.textContent = data.description;
                    characterCardContainer.append(modal);
                    console.log(modal);

                    //change la css quand on clique pour afficher le modal par dessus...
                    characterCardContainer.style = "visibility: visible";

                    //overlay quand on clique...
                    const overlay = document.getElementById('overlay');
                    overlay.style = "opacity: 1";

                    //ferme le modal en appuyant sur la croix
                    const close = document.querySelector("[data-close-btn]");
                    close.addEventListener("click", () =>{
                        characterCardContainer.style = "display: none";
                        overlay.style = "opacity: 0";

                        //supprime le modal pour pas en avoir plusieurs...
                        const removeModal = document.getElementById('modal');
                        removeModal.remove();
                    })
                    
                }
                showCharacter();


                //return les valeurs dans l'object characters[]
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

//call de la fonction managerCharacter()
managerCharacter();