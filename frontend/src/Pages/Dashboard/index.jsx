import { imageURL } from "./../../Config";
import { MainLayout } from "./../../components/Layouts";
import { CustomButton, CustomSearch } from "../../components";

import { useDashboardData } from "./useDashboard";
import { CardBenefit } from "./CardBenefit";
import { CardBuku } from "./CardBuku";
import { CardBerlangganan } from "./CardBerlangganan";

const Dashboard = () => {
  const { buku, search, setSearch, handleSearch, handleDetailClick } =
    useDashboardData();

  return (
    <MainLayout>
      {/* Landing Page */}
      <main className="min-h-screen flex flex-col-reverse sm:flex-row  justify-center mb-12 md:mb-0">
        <section
          data-aos="fade-right"
          data-aos-duration="1500"
          className="w-full md:w-[600px] px-[5vw] py-[20vh] "
        >
          <h1 className="text-primary-dark font-extrabold text-4xl font-fredoka md:text-6xl mb-6">
            Butopia
          </h1>
          <p className="text-primary text-xl font-medium mb-6">
            Ayo baca buku di Butopia
          </p>
          <div data-aos="fade-up" data-aos-duration="2000">
            <CustomButton
              className="md:text-base bg-gradient-to-r from-primary-dark to-secondary text-white w-[160px] md:w-[220px] h-[40px] md:h-12"
              onClick={(e) => {
                e.preventDefault();
                const caraPesanSection = document.getElementById("buku");
                caraPesanSection.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Lihat Daftar Buku
            </CustomButton>
          </div>
        </section>
        <div className="md:h-[600px] md:w-[600px] flex items-center justify-end">
          <img
            data-aos="fade-up"
            data-aos-duration="1500"
            src="/mainPhoto.svg"
            alt="main photo"
          />
        </div>
      </main>
      {/* End Landing Page */}

      {/* Information Section */}
      <section
        id="user"
        className="flex flex-col min-h-screen justify-center items-center bg-inherit md:bg-gradient-to-b md:from-primary-dark md:to-secondary"
      >
        <header
          data-aos="fade-down"
          data-aos-duration="1500"
          className="text-center md:w-[680px] mb-14"
        >
          <h1 className="text-3xl md:text-4xl md:text-white text-primary-dark font-bold mb-6">
            Ayo beli buku di Butopia
          </h1>
          <p className="text-lg md:text-xl text-primary md:text-white md:font-semibold">
            Kita semua cinta Butopia 
          </p>
        </header>

      </section>
      {/* End Information Section */}

      <section
        id="benefit"
        className="flex flex-col justify-center items-center min-h-screen mb-6"
      >
        <div data-aos="fade-down" data-aos-duration="2000">
          <h1 className="text-2xl md:text-4xl text-primary-dark font-bold py-12 text-center">
            Kita bahagia <br /> Saat melihat TA (Butopia)
          </h1>

          <CardBenefit />
        </div>
      </section>

      {/* Layanan Container */}
      <section
        id="layanan"
        className="w-full md:w-[1270px] min-h-screen flex flex-col items-center justify-center mx-auto"
      >
        <header className="w-full mb-12">
          <h1 className="text-2xl md:text-4xl text-primary-dark font-bold mb-6">
            Beli Buku Digital
          </h1>
          <form
            className="flex items-center text-gray-100 px-4 w-full md:w-[500px] h-[40px] rounded-md border-2 border-primary bg-white p-4"
            onSubmit={handleSearch}
          >
            <CustomSearch search={search} setSearch={setSearch} />
          </form>
        </header>

        <main className="flex flex-wrap items-start gap-8 md:gap-20 w-full md:w-[1270px]">
          {buku? (
            buku.map((data) => (
              <>{console.log(data)}
              <CardBuku
                key={data.BookID}
                id={data.BookID}
                judul={data.judul}
                harga={data.harga}
                sinopsis={data.sinopsis}
                kategori={data.kategori}
                image={imageURL + data.foto || null}
                onPesan={() => handleDetailClick(data.BookID)}
              /></>
            ))
          ) : (
            <div className="w-full h-[420px] flex flex-col rounded-xl shadow justify-center items-center bg-slate-50 p-7">
              <h1 className="text-4xl font-semibold text-center text-gray-500">
                Tidak ada buku yang ditemukan.
              </h1>
            </div>
          )}
        </main>
      </section>
      {/* End Layanan Container */}

      <CardBerlangganan />
    </MainLayout>
  );
};

export default Dashboard;
