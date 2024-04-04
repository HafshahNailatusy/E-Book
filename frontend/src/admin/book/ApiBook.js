import axios from 'axios';
import { BASE_API } from '../../Pages/Etc/Http';
import { getTokenCookie } from '../../Pages/Etc/Cookie';

// app.get("/findBookAdmin", auth.authVerify, checkRole(["admin"]), bookController.findBook)

const getFoto = (foto) => {
    return `${BASE_API}/image/${foto}`
}

const getAllBook = async () => {
    const URL = `${BASE_API}/book/getBookAdmin`;
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

const getByID = async (id) => {
    const URL = `${BASE_API}/book/findByID/${id}`
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

const getbyKategori = async (id) => {
    const URL = `${BASE_API}/book/findByKategoriAdmin/${id}`
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
        return ({
            status: "error",
            data: error.response.data.message
        })
    }
}

const getBook = async (keyword) => {
    const URL = `${BASE_API}/book/findBookAdmin`
    const token = getTokenCookie()
    try {
        const data = await axios.get(URL, keyword, {
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

const addBook = async (values) => {
    const URL = `${BASE_API}/book/add`
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

const updateBook = async ({ values, id }) => {
    const URL = `${BASE_API}/book/${id}`
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

const deleteBook = async (id) => {
    const URL = `${BASE_API}/book/delete/${id}`
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

export { getFoto, getAllBook, getbyKategori, getBook, getByID, addBook, updateBook, deleteBook }