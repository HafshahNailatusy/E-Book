const NavbarAdmin = () => {
  return (
    
    <header className="  w-full flex justify-center md:justify-center items-center px-4 md:px-8 z-50 shadow-lg">
      <ul className="flex space-x-12 items-center">
        <li className="my-6">
          <a
            href="/"
            className="text-lg text-black hover:text-slate-300 font-semibold duration-500"
          >
            Home
          </a>
        </li>
        <li className="my-6">
          <a
            href="/admin/buku"
            className="text-lg text-black hover:text-slate-300 font-semibold duration-500"
          >
            Buku
          </a>
        </li>
        <li className="my-6">
          <a
            href="/admin/user"
            className="text-lg text-black hover:text-slate-300 font-semibold duration-500"
          >
            User
          </a>
        </li>
        <li className="my-6">
          <a
            href="/admin/transaksi"
            className="text-lg text-black hover:text-slate-300 font-semibold duration-500"
          >
            Transaksi
          </a>
        </li>
      </ul>
    </header>
  );
};

export default NavbarAdmin;