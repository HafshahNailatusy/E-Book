import { useEffect, useState } from "react";
import { handleApiResponse } from "../../utils/helpers/Response";
import GetMe from "../../utils/GetMe";
import { getLocalStorage } from "../../utils/helpers/Localstorage";
import { LOCAL_STORAGE_USER } from "../../utils/helpers/Http";

export const useProfileData = () => {
  const [user, setUser] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const user = getLocalStorage(LOCAL_STORAGE_USER);
    setUser(user);
}, []);

  const handleSave = async (e) => {
    e.preventDefault();

    handleApiResponse( () => {
      toggleModal();
    });
  };

  const toggleModal = () => setModalIsOpen(!modalIsOpen);

  return {
    user,
    modalIsOpen,
    handleSave,
    toggleModal,
  };
};
