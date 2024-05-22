import { useEffect, useState } from "react";
import { getAllUser, addByAdmin, deleteUser, updateUser, search } from "./../../user/ApiUser";
import {toast} from 'react-toastify'

export const APIuser = () => {
  const userBaru = {
    nama: "",
    email: "",
    role: "",
    password: "",
  }

  const handleApiResponse = (
    response,
    additionalSuccessAction = () => { },
  ) => {
    if (response.success === true) {
      toast.success(response.message, { autoClose: 2000 });
      additionalSuccessAction();
    } else {
      const errorMessage = response.data.errors
        ? response.data.errors
        : ["Something wrong"];

      errorMessage.forEach((message) => {
        toast.error(message, { autoClose: 2000 });
      });
    }
  };

  const [user, setUser] = useState([]);
  const [ModalIsOpen, setModalIsOpen] = useState(false);
  const [newUser, setNewUser] = useState(userBaru);
  const [search, setSearch] = useState("");
  const [userID, setUserID] = useState("");
  const [action, setAction] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const dataUser = await getAllUser();
    setUser(dataUser);
  };

  const handleSearch = async (keyword) => {
    try {
      const result = await search(keyword);
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
        toast.success(response.message, {
          autoClose: 3000,
        });
      } else {
        if (response.data.errors.name == "SequelizeForeignKeyConstraintError")
          toast.info("Terdapat transaksi menggunakan data ini", {
            autoClose: 3000,
          });
      }
      fetchData();
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();

    let response;
    if (action === "add") {
      response = await addByAdmin(newUser);
    } else if (action === "edit") {
      response = await updateUser(userID, newUser);
    }

    handleApiResponse(response, () => {
      setNewUser(userBaru);
      setModalIsOpen(false);
      fetchData();
    });
  };

  const handleCloseModal = () => {
    setAction("");
    setUserID("");
    setNewUser(userBaru);
    setModalIsOpen(false);
  };

  return{user, ModalIsOpen, newUser, search, userID, action, setModalIsOpen, setNewUser, setSearch, setUserID, handleAdd, handleEdit, handleCloseModal, handleDelete, handleSave, handleSearch}
}