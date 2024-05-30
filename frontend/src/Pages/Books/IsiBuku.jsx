import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { initialNewbookState } from "./../../Config";
import { addBook, getallbook, updateBook, deleteBook , findbook} from "./../../utils/Buku";
import { handleApiResponse } from "./../../utils/helpers/Response";
import { useParams } from "react-router-dom";


export const IsiBuku = () => {
  const [search, setSearch] = useState("");
  const [buku, setBuku] = useState([]);
  const [ModalIsOpen, setModalIsOpen] = useState(false);
  const [newBuku, setNewBuku] = useState(initialNewbookState);
  const [idbuku, setidbuku] = useState("");
  const [action, setAction] = useState("");
  const { id } = useParams();



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
    setidbuku(item.BookID);
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

    let data = new FormData();
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
    } else if (action === "edit") {
      response = await updateBook(id, data);
      console.log(response)
    }

    handleApiResponse(response, () => {
      setNewBuku(initialNewbookState);
      setModalIsOpen(false);
      getall();
    });
  };

  const handleClose = () => {
    setAction("");
    setidbuku("")
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
    idbuku,
    setidbuku,
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
