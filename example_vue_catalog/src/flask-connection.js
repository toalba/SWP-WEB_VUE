import axios from 'axios';
export async function api_search(q)
{
    const response = await axios.get('http://localhost:5000/cat-search/'+q);
    return response.data;
}