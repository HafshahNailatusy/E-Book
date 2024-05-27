const SetAuth = (res) => {
  const roleString = res.res.role;
  const namaString = res.res.nama;
  const tokenString = res.res.token;
  

  localStorage.setItem("logged", "true");
  localStorage.setItem("nama", namaString);
  localStorage.setItem("role", roleString);
  localStorage.setItem("token", tokenString);

  if(roleString === "admin"){
    return { res: "admin", success: true };  }
};

const GetAuth = (key) => {
  const itemString = localStorage.getItem(key);

  if (itemString) {
    try {
      return itemString;
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
