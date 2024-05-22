import axios from "axios";
import { config, baseURL } from "../Config";
import { handleApiError } from "./helpers/Response";

export const login = async (email, password) => {
  try {
    const response = await axios.post(baseURL + "/user/login", {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const fetchAllUsers = async () => {
  try {
    const response = await axios.get(baseURL + "/user/getAll", config());
    return response.data.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const findUser = async (keyword) => {
  try {
    const response = await axios.post(
      baseURL + "/user/search",
      { keyword },
      config(),
    );
    return response.data.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const addUser = async (data) => {
  try {
    const response = await axios.post(baseURL + "/user/addByAdmin", data, config());
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const updateUser = async (id, data) => {
  try {
    const response = await axios.put(baseURL + `/user/updateuserAdmin/${id}`, data, config());
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const deleteUser = async (userId) => {
  try {
    const response = await axios.delete(baseURL + "/user/delete" + userId, config());
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};
