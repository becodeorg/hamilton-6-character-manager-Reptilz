import './style.scss'

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



//post character
async function addCharacter(){
    const api_url = 'https://character-database.becode.xyz/characters';
    const name = "Itachi Uchiwa"
    const description = "Itachi Uchiwa était un membre de l'Anbu issu du célèbre clan Uchiwa du village de Konoha. Il tua les membres de son clan dans ce qui sera plus tard connu comme le massacre du clan Uchiwa et déserta son village, devenant un ninja déserteur (Nukenin) de Rang S et un membre de l'Akatsuki qui devint partenaire avec Kisame Hoshigaki."
    const shortDescription = "You should try an other character";

    try{
        await axios.post(api_url, {
            description: description,
            name: name,
            shortDescription: shortDescription,
        });
    }
    catch(err){
        console.log(err);
    }
}


//delete character
async function deleteCharacter(){
    const id = "a4b57db1-a9ce-401b-af36-fcbbf712a86d"
    const api_url = 'https://character-database.becode.xyz/characters/';

    try{
        await axios.delete(api_url + id);
    }
    catch(err){
        console.log(err);
    }
}

//update character
async function updateCharacter(){
    const id = "26c4917e-fba3-47de-85b6-475d4a2cf9b7";
    const api_url = 'https://character-database.becode.xyz/characters/';
    const name = "Itachi Uchiwa";
    const description = "Hello update!";
    const shortDescription = "this is a short description";

    try{
        await axios.put(api_url + id, {
            description: description,
            name: name,
            shortDescription: shortDescription,
        });
    }
    catch(err){
        console.log(err);
    }
}


//CALL DES FONCTIONS
getCharacter();
//addCharacter();
//deleteCharacter();
//updateCharacter();