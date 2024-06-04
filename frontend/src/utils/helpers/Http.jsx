import { getLocalStorage } from "./Localstorage";

const BASE_API = "http://localhost:8000";
const LOCAL_STORAGE_TOKEN = "ebook/token";
const LOCAL_STORAGE_USER = "ebook/user";
const TOKEN = {
    headers: {
      Authorization: `Bearer ${getLocalStorage(LOCAL_STORAGE_TOKEN)}`,
    },
  };

export { BASE_API, LOCAL_STORAGE_USER, LOCAL_STORAGE_TOKEN, TOKEN };