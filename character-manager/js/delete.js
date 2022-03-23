import '../style.scss';


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

//deleteCharacter();