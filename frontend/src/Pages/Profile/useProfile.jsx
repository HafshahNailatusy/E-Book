import { useEffect, useState } from "react";
import { handleApiResponse } from "@/utils/helpers/Response";
import { getMe } from "../../utils/User";

export const useProfileData = () => {
  const [user, setUser] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    fetchMe();
  }, []);

  const fetchMe = async () => {
    const result = await getMe();
    setUser(result);
  };

  const handleSave = async (e) => {
    e.preventDefault();

    handleApiResponse(response, () => {
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
