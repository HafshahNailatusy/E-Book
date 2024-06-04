import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import AuthHelpers from "./../../utils/helpers/AuthHelpers";
import ProfileLayout from "./../../components/Layouts/ProfileLayout";
import { TableHistory } from "./TableHistory";
import { findtransaksi } from "../../utils/Transaksi";

const History = () => {
  const [history, setHistory] = useState([]);
  const [userID, setUserID] = useState("");

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    const userID = AuthHelpers.GetAuth("userID");
    const dataHistory = await findtransaksi(userID);

    setUserID(userID);
    setHistory(dataHistory);
  };

  return (
    <ProfileLayout>
      <TableHistory
        history={history}
      />
    </ProfileLayout>
  );
};

export default History;
