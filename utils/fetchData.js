import axios from 'axios'
const baseUrl = process.env.BASE_URL

export const getData = async (url, token = null) => {
    const res = await axios.get(`${baseUrl}/api/${url}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    })

    console.log(res.data)

    return res.data
}

export const postData = async (url, post, token = null) => {
    const res = await axios({
        method: 'post',
        url: `${baseUrl}/api/${url}`,
        data: JSON.stringify(post),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
      });

    return res.data
}


export const putData = async (url, post, token = null) => {
    const res = await fetch(`${baseUrl}/api/${url}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify(post)
    })

    const data = await res.json()
    return data
}

export const patchData = async (url, post, token = null) => {
    const res = await fetch(`${baseUrl}/api/${url}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify(post)
    })

    const data = await res.json()
    return data
}


export const deleteData = async (url, token = null) => {
    const res = await fetch(`${baseUrl}/api/${url}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    })

    const data = await res.json()
    return data
}