import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { initialNewbookState } from "./../../Config";
import { addBook, getallbook, updateBook, deleteBook , findbook} from "./../../utils/Buku";
import { handleApiResponse } from "./../../utils/helpers/Response";


export const IsiBuku = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [buku, setBuku] = useState([]);
  const [ModalIsOpen, setModalIsOpen] = useState(false);
  const [newBuku, setNewBuku] = useState(initialNewbookState);
  const [BookID, setBookID] = useState("");
  const [action, setAction] = useState("")

  useEffect(() => {
    getall();
  }, []);

  const getall = async () => {
    const databuku = await getallbook();
    setBuku(databuku);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const result = await findbook(search);
      setBuku(result);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAdd = () => {
    setAction("add");
    setModalIsOpen(true);
  };

  const handleEdit = (item) => {
    setAction("edit");
    setModalIsOpen(true);
    setNewBuku({
      judul: item.judul,
      penulis: item.penulis,
      sinopsis: item.sinopsis,
      foto: item.foto,
      harga: item.harga,
      kategori: item.kategori,
    });
    setBookID(item.BookID);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Yakin mau hapus?")) {
      const response = await deleteBook(id);
      if (response.success == true) {
        try {
          await deleteBook(id);
          getallbook();
        } catch (error) {
          console.log(error);
        }
      } else {
        if (response.message == "SequelizeForeignKeyConstraintError")
          toast.info("Ada transaksi pake data ini", {
            autoClose: 3000,
          });
        else {
          toast.error("Server Error", {
            autoClose: 3000,
          });
        }
      }

      getall();
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("judul", newBuku.judul);
    data.append("penulis", newBuku.penulis);
    data.append("sinopsis", newBuku.sinopsis);
    data.append("foto", newBuku.foto);
    data.append("harga", newBuku.harga);
    data.append("kategori", newBuku.kategori);

    let response;
    if (action === "add") {
      response = await addBook(data);
      console.log(response)
      setModalIsOpen(false);
    } else if (action === "edit") {
      response = await updateBook(BookID, newBuku);
      console.log(response)
      setModalIsOpen(false);
    }

    handleApiResponse(response, () => {
      setNewBuku(initialNewbookState);
      setModalIsOpen(false);
      getall();
    });
  };

  const handleClose = () => {
    setAction("");
    setBookID("")
    setNewBuku(initialNewbookState)
    setModalIsOpen(false);
  };

  const handleFileInputChange = (foto) => {
    console.log(foto)
    setNewBuku({ ...newBuku, foto: foto });
  };
  

  return {
    search,
    setSearch,
    buku,
    setBuku,
    ModalIsOpen,
    setModalIsOpen,
    newBuku,
    setNewBuku,
    BookID,
    setBookID,
    action,
    setAction,
    getall,
    handleSearch,
    handleAdd,
    handleEdit,
    handleDelete,
    handleSave,
    handleClose,
    handleFileInputChange,
  };
};
