import '../style.scss';

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
//addCharacter();