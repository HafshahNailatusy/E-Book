import { AdminLayout } from "../../components/Layouts";
import { CustomButton } from "../../components";
import { useTransaksi } from "./useTransaksi";
import { TableTransaction } from "./TableTransaction";

const Transaksi = () => {
  const {
    transaksi,
    keyword,
    setKeyword,
    search
  } = useTransaksi();

  return (
    // <AdminLayout>
    // {/* Header */}
    // <header className="mb-10">
    //   <h1 className="text-center text-4xl md:text-5xl text-primary-dark font-extrabold mb-12">
    //     Transaksi Panel
    //   </h1>

    //   {/* Search */}
    //   <div className="flex justify-center md:justify-between items-center mb-6">
    //     <div className="flex gap-4 items-center w-full md:w-auto">
    //       <div className="w-full">
    //         <label
    //           htmlFor="keyword"
    //           className="block text-gray-700 text-sm font-bold mb-2"
    //         >
    //           Keyword:
    //         </label>
    //         <input
    //           id="keyword"
    //           type="text"
    //           value={keyword}
    //           onChange={(e) => setKeyword(e.target.value)}
    //           className="border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-300 w-full"
    //         />
    //       </div>

    //       <CustomButton
    //         onClick={search}
    //         className="bg-gradient-to-r from-primary-dark to-secondary text-white px-6 py-2 rounded-md hover:from-primary hover:to-secondary-light transition-all duration-300 ease-in-out"
    //         type="submit"
    //       >
    //         Search
    //       </CustomButton>
    //     </div>
    //   </div>
    //   {/* End Search */}
    // </header>
    // {/* End Header */}

    <>
    {/* Header */}
    <header className="mb-10">
      <h1 className="text-center text-4xl md:text-5xl text-primary-dark font-fredoka font-extrabold mb-12">
        Transaksi
      </h1>
      {/* End Search */}
    </header>
    {/* End Header */}


      <TableTransaction transaksi={transaksi} />
    </>
  );
};

export default Transaksi;
