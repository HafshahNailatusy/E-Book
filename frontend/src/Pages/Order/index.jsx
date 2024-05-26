import { AppliactionSection, BookSection } from "./BookSection";
import { selectorBayar } from "./MetodeBayar";
import { useOrderData } from "./useOrder";

const Order = () => {
  const {
    book,
    metodePay,
    total,
    loading,
    info,
    setMetode,
    setInfo,
    handleOrder,
  } = useOrderData();

  return (
    <main className="w-full min-h-screen bg-background flex flex-col md:flex-row justify-center md:gap-12 py-12">
      <BookSection
        book={book}
        info={info}
        setInfo={setInfo}
      />
      <selectorBayar
        metodePay={metodePay}
        setMetode={setMetode}
        total={total}
        handleOrder={handleOrder}
        loading={loading}
      />
    </main>
  );
};

export default Order;
