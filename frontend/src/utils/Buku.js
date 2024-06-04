import axios from "axios";
import { config, baseURL } from "../Config";
import { handleApiError } from "./helpers/Response";

export const getallbook = async () => {
  try {
    const response = await axios.get(baseURL + "/book/getAllBook");
    console.log(response.data.data)
    return response.data.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const findbook = async (keyword) => {
  try {
    const response = await axios.get(
      baseURL + `/book/findBookCustom/${keyword}` ,
    );
    return response.data.data;
  } catch (error) {
    return handleApiError(error);
  } 
};

export const byKategori = async (kategori) => {
  try {
    const response = await axios.get(
      baseURL + `/book/findByKategori/${kategori}` ,
    );
    return response.data.data;
  } catch (error) {
    return handleApiError(error);
  } 
};

export const findbyID = async (id) => {
  try {
    const response = await axios.get(
      baseURL + `/book/findByID/${id}`,
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

export const updateBook = async (BookID, data) => {
  try {
    const response = await axios.put(baseURL + `/book/update/${BookID}` ,data, config());
    console.log(response)
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const deleteBook = async (id) => {
  try {
    const response = await axios.delete(baseURL + `/book/delete/${id}` , config());
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};
