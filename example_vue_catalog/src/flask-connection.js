import axios from 'axios';
export async function api_search(q)
{
    const response = await axios.get('http://localhost:5000/cat-search/'+q);
    return response.data;
}

export async function api_patch(c)
{
    const response = await axios.patch("http://localhost:5000/cat-item/"+c.id,{
        params: {
            description: c.description,
        }
    });
    return response.data;
}