import './style.scss'

//list of characters
async function getCharacter(){
    try {
        const response = await axios.get('https://character-database.becode.xyz/characters');
        console.log(response);
    }
    catch (err) {
        console.log(err);
    }
}



//post character
async function addCharacter(){
    try{
        await axios.post('https://character-database.becode.xyz/characters', {
            description: "Itachi Uchiwa était un membre de l'Anbu issu du célèbre clan Uchiwa du village de Konoha. Il tua les membres de son clan dans ce qui sera plus tard connu comme le massacre du clan Uchiwa et déserta son village, devenant un ninja déserteur (Nukenin) de Rang S et un membre de l'Akatsuki qui devint partenaire avec Kisame Hoshigaki.",
            name: "Itachi Uchiwa",
            shortDescription: "You should try an other character",
        });
    }
    catch(err){
        console.log(err);
    }
}


//delete character
async function deleteCharacter(){
    const id = "a4b57db1-a9ce-401b-af36-fcbbf712a86d"

    try{
        await axios.delete('https://character-database.becode.xyz/characters/' + id);
    }
    catch(err){
        console.log(err);
    }
}

//update character
async function updateCharacter(){
    const id = "26c4917e-fba3-47de-85b6-475d4a2cf9b7";

    try{
        await axios.put('https://character-database.becode.xyz/characters/' + id, {
            description: "Itachi Uchiwa était un membre de l'Anbu issu du célèbre clan Uchiwa du village de Konoha. Il tua les membres de son clan dans ce qui sera plus tard connu comme le massacre du clan Uchiwa et déserta son village, devenant un ninja déserteur (Nukenin) de Rang S et un membre de l'Akatsuki qui devint partenaire avec Kisame Hoshigaki.",
            name: "Itachi Uchiwa",
            shortDescription: "You should try an other character",
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