import axios from 'axios';
export async function api_search(q)
{
    const response = await axios.get('http://localhost:5000/cat-search/'+q);
    return response.data;
}

export async function medals(q)
{
    const response = await axios.get('http://localhost:5000/medals/'+q);
    return response.data;
}

export async function medals2(q)
{
    const response = await axios.get('http://localhost:5000/medals2/'+q);
    return response.data;
}

export async function events()
{
    const response = await axios.get('http://localhost:5000/events');
    return response.data;
}

export async function count_by_sex()
{
    const response = await axios.get('http://localhost:5000/count_by_sex');
    return response.data;
}

export async function count_by_sex2()
{
    const response = await axios.get('http://localhost:5000/count_by_sex2');
    return response.data;
}