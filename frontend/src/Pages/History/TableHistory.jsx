import CustomButton from "./../../components/Button";

export const TableHistory = ({ history, checkOut }) => {
  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  return (
    <section className="w-full md:w-[840px] h-full bg-white shadow-xl rounded-xl p-12">
      <h1 className="text-2xl font-bold whitespace-nowrap text-secondary">
        Histori Transaksi
      </h1>

      <div className="overflow-auto max-h-[400px]">
        <table className="w-full my-5 border-collapse shadow-lg">
          <thead className="bg-secondary w-full text-lg text-white">
            <tr>
              <th className="p-3">No</th>
              <th className="py-3">Judul Buku</th>
              <th className="py-3">Total</th>
              <th className="py-3">Tanggal</th>
              <th className="py-3">Pembayaran</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-300 text-base">
            {history && history.length > 0 ? (
              history.map((item, index) => (
                <tr key={index} className="hover:bg-slate-50">
                  <th className="p-3">{index + 1}</th>
                  <td align="center">{item.judul}</td>
                  <td align="center">Rp. {item.harga}</td>
                  <td align="center">{formatDate(item.TglTransaksi)}</td>
                  <td align="center">{item.MetodePay}</td>
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
                      <strong>Oooops!</strong> Anda belum pernah membeli
                    </h1>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};
