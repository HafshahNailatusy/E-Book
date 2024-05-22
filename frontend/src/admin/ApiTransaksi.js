import axios from 'axios';
import { BASE_API } from '../../Pages/Etc/Http';
import { getTokenCookie } from '../../Pages/Etc/Cookie';

const getAllTransaksi = async () => {
    const URL = `${BASE_API}/transaksi/getAllTran`;
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

const search = async (keyword) => {
    const URL = `${BASE_API}/transaksi/findTransaksi/${keyword}`
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

const addTransaksi = async (values) => {
    const URL = `${BASE_API}/transaksi/add`
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

const addDetailTransaksi = async (values) => {
    const URL = `${BASE_API}/transaksi/addDetailTransaksi`
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

const updateTransaksi = async ({ values, id }) => {
    const URL = `${BASE_API}/transaksi/update/${id}`
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

const deleteUser = async (id) => {
    const URL = `${BASE_API}/transaksi/delete/${id}`
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
        return ({
            status: true,
        })
    }
}

export { getAllTransaksi, search, addTransaksi, updateTransaksi, deleteUser, addDetailTransaksi }