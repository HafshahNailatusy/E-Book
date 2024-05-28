import {
  IoCut,
  IoLockClosed,
  IoCall,
  IoCard,
  IoCheckmark,
  IoNotifications,
} from "react-icons/io5";

import Gambar from "../../assets/reading.jpg"

const benefits = [
  {
    icon: <IoCut className="text-black text-md md:text-2xl"/>,
    title: "Ga perlu ke toko buku",
  },
  {
    icon: <IoLockClosed className="text-black text-md md:text-2xl"/>,
    title: "Mager Friendly",
  },
  {
    icon: <IoCall className="text-black text-md md:text-2xl"/>,
    title: "Praktis, tinggal klik",
  },
  {
    icon: <IoCard className="text-black text-md md:text-2xl" />,
    title: "Bayar pake apa aja OK",
  },
  {
    icon: <IoCheckmark className="text-black text-md md:text-2xl" />,
    title: "Bukan buku bajakan",
  },
  {
    icon: <IoNotifications className="text-black text-md md:text-2xl" />,
    title: "Sangat keren",
  },
];

export const CardBenefit = () => {
  return (
    <div>
      <img
        src={Gambar}
        alt=""
        className="sm:block md:hidden pb-4"
      />

      <div className="flex">
        <div className="flex-col space-y-12 md:space-y-24">
          {benefits.slice(0, 3).map((benefit, index) => (
            <div
              key={index}
              className="flex justify-start"
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-delay="200"
            >
              <div className="w-8 h-8 md:w-12 md:h-12 bg-primary rounded-xl mr-5 flex justify-center items-center">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold md:text-2xl md:font-bold text-primary w-[140px] md:w-[220px] h-[74px]">
                {benefit.title}
              </h3>
            </div>
          ))}
        </div>

        {/* <img
          src={Gambar}
          alt="Benefit Photo"
          className="hidden md:block max-w-[200px]"
        /> */}

        <div className="flex-col space-y-12 md:space-y-24">
          {benefits.slice(3).map((benefit, index) => (
            <div
              key={index}
              className="flex justify-end"
              data-aos="fade-left"
              data-aos-duration="2000"
              data-aos-delay="200"
            >
              <h3 className="text-xl font-semibold md:text-2xl md:font-bold text-primary text-end w-[140px] md:w-[220px] h-[74px]">
                {benefit.title}
              </h3>
              <div className="w-8 h-8 md:w-12 md:h-12 bg-primary rounded-xl ml-5 flex justify-center items-center">
                {benefit.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
