import axios from "axios";
import { config, baseURL } from "../Config";
import { handleApiError } from "./helpers/Response";

export const getAllTransaksi = async () => {
  try {
    const response = await axios.get(baseURL + "/transaksi/getAllTran");
    return response.data.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const findtransaksi = async (id) => {
  try {
    const response = await axios.get(
      baseURL + "/transaksi/findTransaksi/" + id,
      config(),
    );
    return response.data.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const searchTrans = async (keyword) => {
  try {
    const response = await axios.get(
      baseURL + "/transaksi/findTransaksi/" + keyword,
      config(),
    );
    return response.data.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const addTransaksi = async (data) => {
  try {
    const response = await axios.post(baseURL + "/transaksi/add", data, config());
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const deleteTransaksi = async (id) => {
  try {
    const response = await axios.delete(baseURL + "/transaksi/delete" + id, config());
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};
