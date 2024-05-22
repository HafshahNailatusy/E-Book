import axios from 'axios';
import { BASE_API } from '../../Etc/Http';
import { getTokenCookie } from '../../Etc/Cookie';

const getAllKategori = async () => {
    const URL = `${BASE_API}/kategori/getAllKategori`;
    const token = getTokenCookie()
    try {
        const data = await axios.get(URL, {
            headers: {
                Authorization: `Bearer ${token}`, // mengambil token dari local storage
            }
        })
        const res = data.data
        if (res.status === true) {
            return ({
                status: true,
            })
        }
    } catch (error) {
        return ({
            status: "error",
            data: error.response.data.message
        })
    }
}

const search = async () => {
    const URL = `${BASE_API}/kategori/find`
    const token = getTokenCookie()
    try {
        const data = await axios.get(URL, {
            headers: {
                Authorization: `Bearer ${token}`, // mengambil token dari local storage
            }
        })
        const res = data.data
        if (res.status === true) {
            return Promise.resolve({
                status: true,
            })
        }
    } catch (error) {
        return Promise.resolve({
            status: "error",
            data: error.response.data.message
        })
    }
}

const addKategori = async (values) => {
    const URL = `${BASE_API}/kategori/add`
    const token = getTokenCookie()
    try {
        const data = await axios.post(URL, values, {
            headers: {
                Authorization: `Bearer ${token}`, // mengambil token dari local storage
            }
        })
        const res = data.data;
        console.log(res);

        if (res.status === true) {
            return ({
                status: true,
            })
        }
    } catch (error) {
        return ({
            status: "error",
            data: error.response.data.message
        })
    }
}

const updateKategori = async ({ values, id }) => {
    const URL = `${BASE_API}/kategori/${id}`
    const token = getTokenCookie()
    try {
        const data = await axios.put(URL, values, {
            headers: {
                Authorization: `Bearer ${token}`, // mengambil token dari local storage
            }
        })
        const res = data.data;
        console.log(res);

        if (res.status === true) {
            return ({
                status: true,
            })
        }
    } catch (error) {
        return ({
            status: "error",
            error: error.response.data.message
        })
    }
}

const getByID = async (id) => {
    const URL = `${BASE_API}/kategori/findbyID/${id}`
    const token = getTokenCookie()
    try {
        const data = await axios.get(URL, {
            headers: {
                Authorization: `Bearer ${token}`, // mengambil token dari local storage
            }
        })
        const res = data.data;
		console.log(res);

        if (res.status === true) {
            return ({
                status: true,
                data: res.data
            })
        }
    } catch (error) {
        return ({
            status: "error",
            data: error.response.data.message
        })
    }
}

const deletekategori = async (id) => {
    const URL = `${BASE_API}/kategori/${id}`
    const token = getTokenCookie()
    try {
        const data = await axios.delete(URL, {
            headers: {
                Authorization: `Bearer ${token}`, // mengambil token dari local storage
            }
        })
        const res = data.data
        if (res.status === true) {
            return ({
                status: true,
            })
        }
    } catch (error) {
        return Promise.resolve({
            status: "error",
            data: error.response.data.message
        })
    }
}

export { getAllKategori, search, addKategori, updateKategori, deletekategori, getByID }