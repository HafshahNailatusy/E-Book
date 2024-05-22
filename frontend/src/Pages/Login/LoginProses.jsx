import axios from "axios";
import { BASE_API, LOCAL_STORAGE_USER } from "../../Etc/Http";
import { setTokenCookie, removeTokenCookie } from "../../Etc/Cookie";
import { setLocalStorage, removeLocalStorage } from "../../Etc/LocalStorage";

const LOGIN_URL = BASE_API + "/user/login";
const REGISTER_URL = BASE_API + "/user/RegisterCustomer";

export const LoginHandler = async (userData) => {
	try {
		const res = await axios.post(LOGIN_URL, userData);
		if (res.data.status === true && res.data.data.role === "user") {
			const userData = {
				email: res.data.data.email,
				nama: res.data.data.nama,
				role: res.data.data.role,
			};
			const token = res.data.data.token;
			setTokenCookie(token);
			setLocalStorage(LOCAL_STORAGE_USER, userData);
			return { res: res.data.data, success: true };
		} else {
			return { res: res, success: false };  
		}
	} catch (error) {
		console.error(error);
		return { error: "Failed to fetch data" };
	}
};

export const AdminHandler = async (userData) => {
	try {
		const res = await axios.post(LOGIN_URL, userData);
		if (res.data.status === true && res.data.data.role === "admin") {
			const userData = {
				email: res.data.data.email,
				nama: res.data.data.nama,
				role: res.data.data.role,
			};
			const token = res.data.data.token;
			setTokenCookie(token);
			setLocalStorage(LOCAL_STORAGE_USER, userData);
			return { res: res.data.data, success: true };
		} else {
			return { res: res, success: false };  
		}
	} catch (error) {
		console.error(error);
		return { error: "Failed to fetch data" };
	}
};

export const RegisterHandler = async (userData) => {
	try {
		const res = await axios.post(REGISTER_URL, userData);
		if (res.data.success === true) {
			return { res: res.data.data, success: true };
		} else {
			return { res: res, success: false };
		}
	} catch (error) {
		console.error(error);
		return { error: "Failed to fetch data" };
	}
};

export const Logout = async () => {
	try {
		const res = await axios.post(REGISTER_URL);
		removeLocalStorage(LOCAL_STORAGE_USER);
		removeTokenCookie();
	} catch (error) {
		console.error(error);
	}
};