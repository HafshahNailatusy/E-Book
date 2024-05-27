import { useEffect, useState } from "react";
import { handleApiResponse } from "../../utils/helpers/Response";
import GetMe from "../../utils/GetMe";

export const useProfileData = () => {
  const [user, setUser] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    fetchMe();
  }, []);

  const fetchMe = async () => {
    const result = await GetMe();
    setUser(result);
  };

  const handleSave = async (e) => {
    e.preventDefault();

    handleApiResponse( () => {
      toggleModal();
      fetchMe();
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
