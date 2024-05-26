const SetAuth = (data) => {
  const idString = JSON.stringify(data.UserID);
  const roleString = JSON.stringify(data.role);
  const namaString = JSON.stringify(data.nama);
  const tokenString = JSON.stringify(data.token);

  localStorage.setItem("logged", "true");
  localStorage.setItem("UserID", idString);
  localStorage.setItem("nama", namaString);
  localStorage.setItem("role", roleString);
  localStorage.setItem("token", tokenString);
};

const GetAuth = (key) => {
  const itemString = localStorage.getItem(key);

  if (itemString) {
    try {
      return JSON.parse(itemString);
    } catch (error) {
      console.error(`Error parsing ${key} from local storage:`, error);
    }
  }

  return null;
};

const ClearAuth = () => {
  localStorage.clear();
};

export default {
  SetAuth,
  GetAuth,
  ClearAuth,
};
