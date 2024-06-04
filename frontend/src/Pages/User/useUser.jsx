import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  addUser,
  deleteUser,
  fetchAllUsers,
  findUser,
  updateUser,
} from "./../../utils/User";
import { initialNewUserState } from "./../../Config";
import { handleApiResponse } from "./../../utils/helpers/Response";

export const useUserData = () => {
  const [user, setUser] = useState([]);
  const [ModalIsOpen, setModalIsOpen] = useState(false);
  const [newUser, setNewUser] = useState(initialNewUserState);
  const [search, setSearch] = useState("");
  const [userID, setUserID] = useState("");
  const [action, setAction] = useState("");


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const dataUser = await fetchAllUsers();
    setUser(dataUser);
  };

  const handleSearch = async (searchTerm) => {
    try {
      const result = await findUser(searchTerm);
      setUser(result);
    } catch (error) {
      console.error(error);
    }
  };

  
  const handleAdd = () => {
    setModalIsOpen(true);
    setAction("add");
  };

  const handleEdit = (item) => {
    setModalIsOpen(true);
    setAction("edit");
    setNewUser({
      email: "",
      nama: item.nama,
      role: item.role,
      password: "",
    });
    setUserID(item.userID);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Apakah kamu yakin ingin menghapus data user ini?")) {
      const response = await deleteUser(id);
      if (response.success == true) {
        try {
          await deleteUser(id);
          fetchAllUsers();
        } catch (error) {
          console.log(error);
        }
      } else {
        if (response.message == "SequelizeForeignKeyConstraintError")
          toast.info("Terdapat transaksi menggunakan data ini", {
            autoClose: 3000,
          });
      }
      fetchData();
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();

    const formData = new FormData();
			formData.append("nama", newUser.nama);
			formData.append("email", newUser.email);
			formData.append("password", newUser.password);
			formData.append("foto", newUser.foto);
			formData.append("role", newUser.role);


    let response;
    if (action === "add") {
      response = await addUser(formData);
      console.log(newUser)

      console.log(response)
    } else if (action === "edit") {
      response = await updateUser(userID, newUser);
      console.log(response)
    }

    handleApiResponse(response, () => {
      setNewUser(initialNewUserState);
      setModalIsOpen(false);
      fetchData();
    });
  };

  const handleCloseModal = () => {
    setAction("");
    setUserID("");
    setNewUser(initialNewUserState);
    setModalIsOpen(false);
  };

  const handleFileInputChange = (foto) => {
    console.log(foto)
    setNewUser({ ...newUser, foto: foto });
  };

  return {
    user,
    handleFileInputChange,
    ModalIsOpen,
    newUser,
    search,
    userID,
    action,
    setModalIsOpen,
    setNewUser,
    setSearch,
    setUserID,
    handleSearch,
    handleAdd,
    handleEdit,
    handleDelete,
    handleSave,
    handleCloseModal,
  };
};
