import axios from "axios";
import { config, baseURL } from "../Config";
import { handleApiError } from "./helpers/Response";

export const getallbook = async () => {
  try {
    const response = await axios.get(baseURL + "/book/getAllBook");
    return response.data.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const findbook = async (keyword) => {
  try {
    const response = await axios.post(
      baseURL + `/book/findBookCustom/` + keyword,
    );
    return response.data.data;
  } catch (error) {
    return handleApiError(error);
  } 
};

export const findbyID = async (id) => {
  try {
    const response = await axios.post(
      baseURL + `/book/findByID`+ id,
      config(),
    );
    return response.data.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const addBook = async (data) => {
  try {
    const response = await axios.post(baseURL + "/book/add", data, config());
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const updateBook = async (id, data) => {
  try {
    const response = await axios.put(baseURL + "/book/update" + id, data, config());
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const deleteBook = async (id) => {
  try {
    const response = await axios.delete(baseURL + "/book/delete" + id, config());
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};
