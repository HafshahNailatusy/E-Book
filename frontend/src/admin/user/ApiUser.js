import axios from 'axios';
import { BASE_API} from '../../Pages/Etc/Http';
import { getTokenCookie } from '../../Pages/Etc/Cookie';

const getFoto = (foto) => {
    return `${BASE_API}/image/${foto}`
}

const getAllUser = async () => {
    const URL = `${BASE_API}/user/getAll`;
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

const getAllAdmin = async () => {
    const URL = `${BASE_API}/user/findAllAdmin`;
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
        return Promise.resolve({
            status: "error",
            data: error.response.data.message
        })
    }
}

const getAllCustomer = async () => {
    const URL = `${BASE_API}/user/findAllCustomer`;
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
        return Promise.resolve({
            status: "error",
            data: error.response.data.message
        })
    }
}

const getByID = async (id) => {
    const URL = `${BASE_API}/user/findOne/${id}`
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

const search = async (nama) => {
    const URL = `${BASE_API}/user/search/${nama}`
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

const addByAdmin = async (values) => {
    const URL = `${BASE_API}/user/addByAdmin`
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

const updateUser = async (values, id) => {
    const URL = `${BASE_API}/user/updateuserAdmin/${id}`
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

const deleteUser = async (id) => {
    const URL = `${BASE_API}/user/delete/${id}`
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

export { getFoto , getAllUser, getAllAdmin, getAllCustomer, getByID, search, addByAdmin, deleteUser, updateUser }