import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { initialNewbookState } from "./../../Config";
import { addBook, getallbook, updateBook, deleteBook , findbook} from "./../../utils/Buku";
import { handleApiResponse } from "./../../utils/helpers/Response";

export const IsiBuku = () => {
  const [search, setSearch] = useState("");
  const [buku, setBuku] = useState([]);
  const [ModalIsOpen, setModalIsOpen] = useState(false);
  const [newBuku, setNewBuku] = useState(initialNewbookState);
  const [idbuku, setidbuku] = useState("");
  const [action, setAction] = useState("");

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
    setNewBuku(initialNewbookState);
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
    });
  };

  const handleDelete = async (id) => {
    if (window.confirm("Yakin mau hapus?")) {
      const response = await deleteBook(id);
      if (response.success == true) {
        toast.success(response.message, {
          autoClose: 3000,
        });
      } else {
        if (response.data.errors.name == "SequelizeForeignKeyConstraintError")
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

    let response;
    if (action === "add") {
      response = await addBook(data);
    } else if (action === "edit") {
      response = await updateBook(idbuku, data);
    }

    handleApiResponse(response, () => {
      setModalIsOpen(false);
      setNewBuku(initialNewbookState);
      getall();
    });
  };

  const handleClose = () => {
    setAction("");
    setModalIsOpen(false);
  };

  const handleSelectPhoto = () => {
    document.getElementById("fileInput").click();
  };

  const handleFileInputChange = (e) => {
    setNewBuku({ ...newBuku, foto: e.target.files[0] });
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
    handleSelectPhoto,
    handleFileInputChange,
  };
};
