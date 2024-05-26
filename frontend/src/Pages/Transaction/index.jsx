import { AdminLayout } from "./../../components/Layouts";
import { CustomButton } from "./../../components";
import { useTransaksi } from "./useTransaksi";
import { TableTransaction } from ".//TableTransaction";

const Transaksi = () => {
  const {
    transaksi,
    keyword,
    setKeyword,
    search
  } = useTransaksi();

  return (
    <AdminLayout>
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-center text-3xl md:text-4xl text-primary-dark font-bold mb-12">
          Transaksi Panel
        </h1>

        {/* Search */}
        <div className="flex justify-between">
          <div>
            <div className="flex gap-2 mb-4">
              <div>
                <label
                  htmlFor="startDate"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Keyword:
                </label>
                <input
                  id="keyword"
                  type="text"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                />
              </div>
            </div>

            <CustomButton
              onClick={search}
              className="bg-blue-400 hover:bg-blue-500 text-white w-28 md:text-base"
              type={"submit"}
            >
              Search
            </CustomButton>
          </div>
        </div>
        {/* End Search */}
      </header>
      {/* End Header */}

      <TableTransaction transaksi={transaksi} />
    </AdminLayout>
  );
};

export default Transaksi;
