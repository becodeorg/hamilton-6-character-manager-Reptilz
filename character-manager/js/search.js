import '../style.scss';
import './list';

async function search(){
    const api_url = 'https://character-database.becode.xyz/characters';
    //get des datas dans l'API
    const resp = await axios.get(api_url);
    const characters = resp.data;

}

search();
