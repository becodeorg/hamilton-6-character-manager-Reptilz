import '../style.scss';

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

//updateCharacter();