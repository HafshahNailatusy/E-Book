import { imageURL } from "./../../Config";

export const AppliactionSection = ({ book, info, setInfo }) => {
  return (
    <section className="w-full md:w-[560px]">
      {/* Application Detail */}
      <div className="flex flex-col md:flex-row items-center mb-6">
        <div className="w-20 h-20 rounded-lg overflow-hidden mr-4 md:mr-0">
          <img
            src={imageURL + book.foto}
            alt={book.foto}
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-2xl font-semibold ml-4">{book.judul}</h1>
      </div>

      <h2 className="text-lg font-semibold md:text-2xl md:font-bold text-primary mb-4">
        Rp.{book.harga}{" "}
      </h2>
      {/* End Application Detail */}

      {/* Card */}
      <div className="rounded-xl overflow-hidden border bg-white border-gray-200 divide-y-2 divide-gray-200">
        {/* Card Head */}
        <div className="md:flex">
          <div className="py-3 px-5 flex gap-4">
            <div
              className={`flex items-center h-10 px-6 py-2 rounded-lg ${
                info ? "bg-primary text-white" : "text-gray-400"
              } hover:cursor-pointer`}
              onClick={() => setInfo(true)}
            >
              <a className="text-lg font-semibold">Informasi</a>
            </div>
            <div
              className={`flex items-center h-10 px-6 py-2 rounded-lg ${
                !info ? "bg-primary text-white" : "text-gray-400"
              } hover:cursor-pointer whitespace-nowrap`}
              onClick={() => setInfo(false)}
            >
              <a className="text-lg font-semibold">Sinopsis</a>
            </div>
          </div>
        </div>

        {/* Card Body */}
        <div className="md:flex-shrink-0">
          {info ? (
            <div className="p-4">
              <p className="bg-background p-4">
                <strong>{book?.judul}</strong>{" "}
                {book?.sinopsis}
              </p>
            </div>
          ) : (
            <div className="p-6 flex flex-col gap-4">
              <div className="flex items-center gap-4 w-full">
                <span className="w-9 h-8 rounded-full flex justify-center items-center bg-secondary text-white">
                  1
                </span>{" "}
                Pilih buku
                {application?.nama}
              </div>
              <div className="flex items-center gap-4 w-full">
                <span className="w-8 h-8 rounded-full flex justify-center items-center bg-secondary text-white">
                  2
                </span>{" "}
                Klik tombol beli
              </div>
              <div className="flex items-center gap-4 w-full">
                <span className="w-8 h-8 rounded-full flex justify-center items-center bg-secondary text-white">
                  3
                </span>{" "}
                Selesaikan pembayaran
              </div>
              <div className="flex items-center gap-4 w-full">
                <span className="w-8 h-8 rounded-full flex justify-center items-center bg-secondary text-white">
                  4
                </span>{" "}
                Selamat membaca!
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
