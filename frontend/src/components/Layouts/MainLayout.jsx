import { Navbar,} from "../Navbar/Navbar";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="px-8 md:px-0 pt-14 min-h-screen bg-background pb-16 md:pb-24 overflow-hidden">
        {children}
      </main>
    </>
  );
};

export default MainLayout;
