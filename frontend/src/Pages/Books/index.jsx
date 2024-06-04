import Modal from "react-modal";
import { imageURL } from "./../../Config";
import { IoCamera } from "react-icons/io5";
import { IsiBuku } from "./IsiBuku";
import { AdminLayout } from "../../components/Layouts";
import { CustomButton, CustomSearch } from "../../components";
import { useState } from "react";

const Book = () => {
  const {
    search,
    setSearch,
    buku,
    ModalIsOpen,
    setModalIsOpen,
    newBuku,
    setNewBuku,
    setBookID,
    action,
    handleSearch,
    handleAdd,
    handleEdit,
    handleDelete,
    handleSave,
    handleClose,
    handleFileInputChange,
  } = IsiBuku();

  const [foto, setFoto] = useState()

  const handleImageChange = (e) => {
		const file = e.target.files[0];
		setFoto(file);
    handleFileInputChange(file)
	};

  return (

    <AdminLayout>
    {/* Header */}
    <header className="mb-10">
      <h1 className="text-center text-4xl md:text-5xl text-primary-dark font-fredoka font-extrabold mb-12">
        Book Panel
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-around space-y-4 md:space-y-0 md:space-x-4">
        {/* Search */}
        <form
          className="flex items-center text-gray-700 w-full md:w-[500px] h-12 rounded-md border-2 border-primary bg-white shadow-lg"
          onSubmit={handleSearch}
        >
          <CustomSearch search={search} setSearch={setSearch} />
        </form>
        {/* End Search */}

        <CustomButton
          className="bg-gradient-to-r from-primary-dark to-secondary text-white w-full md:w-[220px] h-12 rounded-md shadow-lg"
          type="button"
          onClick={handleAdd}
        >
          Tambah
        </CustomButton>
      </div>
    </header>
    {/* End Header */}
  


      <table className="w-full my-5 border-collapse overflow-scroll md:overflow-hidden rounded-2xl shadow-lg">
        <thead className="bg-secondary w-full text-lg text-white">
          <tr>
            <th className="p-3">No</th>
            <th className="py-3">Judul</th>
            <th className="py-3">Penulis</th>
            <th className="py-3">Sinopsis</th>
            <th className="py-3">Harga</th>
            <th className="py-3">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-300 text-base">
          {buku && buku.length > 0 ? (
            buku?.map((item, index) => (
              <tr key={index} className="hover:bg-slate-50">
                <th className="p-3">{index + 1}</th>
                <td align="center">
                  <p className="text-lg">{item.judul}</p>
                </td>
                <td align="center">
                  <p className="text-lg">{item.penulis}</p>
                </td>
                <td align="center">
                  <p className="text-lg">{item.sinopsis}</p>
                </td>
                <td align="center">
                  <p className="text-lg">{item.harga}</p>
                </td>
                <td align="center" className="h-full w-96 justify-center">
                  <div className="flex justify-center items-center gap-2">
                    <CustomButton
                      className="bg-primary rounded-full hover:bg-secondary text-white w-28 my-2"
                      onClick={() => {
                        handleEdit(item);
                        setBookID(item.BookID);
                      }}
                    >
                      Edit
                    </CustomButton>
                    
                      <CustomButton
                        className="bg-red-400 rounded-full hover:bg-red-500 text-white w-28"
                        onClick={() => handleDelete(item.BookID)}
                      >
                        Delete
                      </CustomButton>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">
                <div className="flex flex-col justify-center items-center">
                  <div className="w-60 h-60">
                    <img
                      src="/notFound.svg"
                      alt="troly kosong"
                      className="mt-6"
                    />
                  </div>
                  <h1 className="pb-6 text-xl">
                    <strong>Oooops!</strong> Sepertinya tidak ada buku yang
                    ditemukan
                  </h1>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Modal */}

      <Modal
        isOpen={ModalIsOpen}
        ariaHideApp={false}
        className="flex flex-col justify-center items-center h-screen"
        onRequestClose={() => setModalIsOpen(false)}
      >
        <div className="modal-content sm:w-full md:w-[30rem] bg-white rounded-lg shadow-xl px-8 sm:px-16 py-8 sm:py-16 relative">
          <h2 className="text-3xl font-bold leading-tight tracking-wide">
            {action === "add" ? "Tambah Buku" : "Edit Buku"}
          </h2>
          <button
            onClick={() => handleClose()}
            className="absolute top-8 right-8"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
              className="flex-shrink-0 w-6 h-6"
            >
              <polygon points="427.314 107.313 404.686 84.687 256 233.373 107.314 84.687 84.686 107.313 233.373 256 84.686 404.687 107.314 427.313 256 278.627 404.686 427.313 427.314 404.687 278.627 256 427.314 107.313"></polygon>
            </svg>
          </button>

          <form onSubmit={(e) => handleSave(e)} className="flex flex-col">
            <div className="mb-3">
              <label className="text-base font-semibold text-gray-800">
                Judul
              </label>
              <input
                type="text"
                placeholder="judul"
                value={newBuku.judul}
                onChange={(e) =>
                  setNewBuku({ ...newBuku, judul: e.target.value })
                }
                className="w-[22rem] px-4 py-2 text-base text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="mb-3">
              <label className="text-base font-semibold text-gray-800">
                Penulis
              </label>
              <input
                type="text"
                placeholder="Penulis"
                value={newBuku.penulis}
                onChange={(e) =>
                  setNewBuku({ ...newBuku, penulis: e.target.value })
                }
                className="w-[22rem] px-4 py-2 text-base text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="mb-3">
              <label className="text-base font-semibold text-gray-800">
                Sinopsis
              </label>
              <input
                type="text"
                placeholder="Sinopsis"
                value={newBuku.sinopsis}
                onChange={(e) =>
                  setNewBuku({ ...newBuku, sinopsis: e.target.value })
                }
                className="w-[22rem] px-4 py-2 text-base text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="mb-3">
              <label className="text-base font-semibold text-gray-800">
                Kategori
              </label>
              <input
                type="text"
                placeholder="Kategori"
                onChange={(e) =>
                  setNewBuku({ ...newBuku, kategori: e.target.value })
                }
                className="w-[22rem] px-4 py-2 text-base text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="mb-3">
              <label className="text-base font-semibold text-gray-800">
                Harga
              </label>
              <input
                type="number"
                min={1}
                placeholder="harga"
                onChange={(e) =>
                  setNewBuku({ ...newBuku, harga: e.target.value })
                }
                className="w-[22rem] px-4 py-2 text-base text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <img
                src={
                  newBuku.foto
                    ? typeof newBuku.foto === "string"
                      ? imageURL + newBuku.foto
                      : URL.createObjectURL(newBuku.foto)
                    : "https://via.placeholder.com/300x300"
                }
                alt={newBuku.foto}
                className="max-w-xs rounded-md object-contain"
                width={300}
                height={300}
              />
              <input
                type="file"
                onChange={handleImageChange}
                key={foto}
                className="w-full whitespace-nowrap py-2 px-4 bg-primary hover:bg-secondary mt-2 flex items-center text-white text-2xl gap-4 rounded-full"
              />
                <IoCamera /> <span className="text-base">Select Photo</span>
            <CustomButton
              className="bg-gradient-to-r from-primary-dark to-secondary font-bold text-white w-full h-[40px] md:h-12"
              type="submit"
            >
              Save
            </CustomButton>
          </form>
        </div>
      </Modal>
    </AdminLayout>
  );
};

export default Book;