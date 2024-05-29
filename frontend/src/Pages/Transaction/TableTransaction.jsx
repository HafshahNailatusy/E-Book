import { imageURL } from "./../../Config";

export const TableTransaction = ({ transaksi }) => {
  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  return (
    <table className="w-full my-5 border-collapse overflow-scroll md:overflow-hidden rounded-2xl shadow-lg">
      <thead className="bg-secondary w-full text-lg text-white">
        <tr>
          <th className="p-3">No</th>
          <th className="py-3">Buku</th>
          <th className="py-3">Harga</th>
          <th className="py-3">User</th>
          <th className="py-3">Tanggal</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-300 text-base">
        {transaksi && transaksi.length > 0 ? (
          transaksi.map((item, index) => (
            <tr key={index} className="hover:bg-slate-50">
              <td className="p-3">{index + 1}</td>
              <td>{item.book?.judul}</td>
              <td align="center">Rp. {item.book?.harga}</td>
              <td align="center">{item.nama}</td>
              <td align="center">{formatDate(item.TglTransaksi)}</td>
              
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="7">
              <div className="flex flex-col justify-center items-center">
                <div className="w-60 h-60">
                  <img
                    src="/notFound.svg"
                    alt="troly kosong"
                    className="mt-6"
                  />
                </div>
                <h1 className="pb-6 text-xl">
                  <strong>Oooops!</strong> Sepertinya tidak ada transaksi yang
                  ditemukan
                </h1>
              </div>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};
