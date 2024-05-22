import AuthHelpers from "./utils/helpers/AuthHelpers";

export const config = () => {
  const myToken = AuthHelpers.GetAuth("tokenUser");
  return {
    headers: { Authorization: `Bearer ${myToken}` },
  };
};

export const baseURL = "http://localhost:8000";
export const imageURL = baseURL + "/images/";
export const initialRegisterState = {
  nama: "",
  email: "",
  password: "",
  showPassword: false,
  showConfirmPassword: false,
};
export const initialLoginState = {
  email: "",
  password: "",
  showPassword: false,
};
export const initialNewbookState = {
  judul: "",
  penulis:"",
  sinopsis: "",
  foto: null,
  harga: 0,
};
export const initialNewUserState = {
  nama: "",
  email: "",
  password: "",
  role: "",
};
