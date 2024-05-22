import Modal from "react-modal";

import { AdminLayout } from "../../components/Layouts/AdminLayout";
import { CustomButton, CustomSearch } from "./../../components/Button";
import { imageURL } from "./../../Config";
import { CardBuku } from './CardBuku';
import { IoCamera } from "react-icons/io5";
import { IsiBuku } from "./IsiBuku";


const Book = () => {
  const {
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
  } = IsiBuku();

  return (
    <AdminLayout>
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-center text-3xl md:text-4xl text-primary-dark font-bold mb-16">
          Buku
        </h1>
        <div className="flex flex-col md:flex-row justify-around">
          {/* Search */}
          <form
            className="flex items-center text-gray-100 px-4 w-full md:w-[500px] h-[40px] rounded-md border-2 border-primary bg-white p-4 mb-4"
            onSubmit={handleSearch}
          >
            <CustomSearch search={search} setSearch={setSearch} />
          </form>
          {/* End Search */}

          <CustomButton
            className="bg-gradient-to-r from-primary-dark to-secondary font-bold text-white w-full md:w-[220px] h-[40px] md:h-12 md:text-base"
            type="button"
            onClick={() => handleAdd()}
          >
            Tambah
          </CustomButton>
        </div>
      </header>
      {/* End Header */}

      <main className="flex flex-wrap justify-center gap-8">
        {buku && buku.length > 0 ? (
          buku.map((data) => (
            <CardBuku
              key={data.idbuku}
              judul={data.judul}
              penulis={data.penulis}
              sinopsis={data.sinopsis}
              foto={data.foto}
              harga={data.harga}
              onEdit={() => {
                handleEdit(data);
                setidbuku(data.idbuku);
              }}
              onHapus={() => handleDelete(data.idbuku)}
            />
          ))
        ) : (
          <div className="w-full h-[280px] rounded-xl shadow bg-slate-50 flex flex-col p-7">
            <div className="flex items-center justify-center h-full">
              <h1 className="text-4xl font-semibold text-center text-gray-500">
                Tidak ada aplikasi yang ditemukan.
              </h1>
            </div>
          </div>
        )}
      </main>

      {/* Modals */}

      <Modal
        isOpen={ModalIsOpen}
        ariaHideApp={false}
        className="flex justify-center items-center h-screen"
        onRequestClose={() => handleClose()}
      >
        <div className="modal-content sm:w-full md:w-[80rem] bg-white rounded-lg shadow-xl px-8 sm:px-16 py-8 sm:py-16 relative">
          <h2 className="text-3xl font-bold leading-tight tracking-wide">
            {action === "add" ? "Tambah Buku" : "Edit Buku"}
          </h2>
          <div>
            <button onClick={() => handleClose()}>
              <a className="absolute top-8 right-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="flex-shrink-0 w-6 h-6"
                >
                  <polygon points="427.314 107.313 404.686 84.687 256 233.373 107.314 84.687 84.686 107.313 233.373 256 84.686 404.687 107.314 427.313 256 278.627 404.686 427.313 427.314 404.687 278.627 256 427.314 107.313"></polygon>
                </svg>
              </a>
            </button>
          </div>

          <form onSubmit={handleSave} className="flex items-center">
            <div className="me-6">
              <label
                htmlFor="fileInput"
                className="text-lg font-semibold text-gray-800"
              >
                Images
              </label>
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
              />
              <button
                type="button"
                onClick={handleSelectPhoto}
                className="w-full whitespace-nowrap py-2 px-4 bg-primary hover:bg-secondary mt-2 flex items-center text-white text-2xl gap-4 rounded-full"
              >
                <IoCamera /> <span className="text-base">Select Photo</span>
              </button>

              <input
                type="file"
                id="fileInput"
                className="hidden"
                onChange={handleFileInputChange}
              />
            </div>

            <div className="flex-col w-full">
              <div className="mb-3">
                <label
                  htmlFor="Nama"
                  className="text-base font-semibold text-gray-800"
                >
                  Judul
                </label>
                <input
                  id="Judul"
                  type="text"
                  className="block w-full px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  onChange={(e) =>
                    setNewBuku({ ...newBuku, judul: e.target.value })
                  }
                  value={newBuku.judul}
                  required
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="Penulis"
                  className="text-base font-semibold text-gray-800"
                >
                  Penulis
                </label>
                <input
                  id="Penulis"
                  type="text"
                  className="block w-full px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  onChange={(e) =>
                    setNewBuku({ ...newBuku, penulis: e.target.value })
                  }
                  value={newBuku.penulis}
                  required
                />
              </div>
              
              <div className="mb-3">
                <label
                  htmlFor="Penulis"
                  className="text-base font-semibold text-gray-800"
                >
                  Sinopsis
                </label>
                <input
                  id="Sinopsis"
                  type="text"
                  className="block w-full px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  onChange={(e) =>
                    setNewBuku({ ...newBuku, sinopsis: e.target.value })
                  }
                  value={newBuku.sinopsis}
                  required
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="Harga"
                  className="text-base font-semibold text-gray-800"
                >
                  Harga
                </label>
                <input
                  id="Harga"
                  type="number"
                  className="block w-full px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  onChange={(e) =>
                    setNewAplikasi({ ...newBuku, harga: e.target.value })
                  }
                  value={newBuku.harga}
                  required
                />
              </div>

              <CustomButton
                className="bg-gradient-to-r from-primary-dark to-secondary font-bold text-white w-full md:w-[220px] h-[40px] md:h-12 md:text-base"
                type="submit"
              >
                Save
              </CustomButton>
            </div>
          </form>
        </div>
      </Modal>
    </AdminLayout>
  );
};

export default Aplikasi;
