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
    <table className="w-full my-5 border-collapse overflow-scroll md:overflow-hidden rounded-lg shadow-lg">
  <thead className="bg-secondary text-lg text-white">
    <tr>
      <th className="p-4">No</th>
      <th className="p-4">Buku</th>
      <th className="p-4">Harga</th>
      <th className="p-4">User</th>
      <th className="p-4">Tanggal</th>
    </tr>
  </thead>
  <tbody className="bg-white divide-y divide-gray-300 text-base">
    {transaksi && transaksi.length > 0 ? (
      transaksi.map((item, index) => (
        <tr key={index} className="hover:bg-gray-100 transition-colors">
          <td className="p-4">{index + 1}</td>
          <td className="p-4">{item.book?.judul}</td>
          <td className="p-4" align="center">Rp. {item.book?.harga}</td>
          <td className="p-4" align="center">{item.nama}</td>
          <td className="p-4" align="center">{formatDate(item.TglTransaksi)}</td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan="5">
          <div className="flex flex-col items-center justify-center py-10">
            <img
              src="/notFound.svg"
              alt="troly kosong"
              className="w-40 h-40 mb-4"
            />
            <h1 className="text-lg text-gray-700 text-center">
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
