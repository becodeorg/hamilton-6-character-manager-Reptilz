import './style.scss'

//list of characters
async function getCharacter(){
    const api_url = 'https://character-database.becode.xyz/characters';
    try {
        const response = await axios.get(api_url);
        console.log(response);
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