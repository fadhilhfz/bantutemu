function Navbar() {
  return (
    <nav className="flex justify-between items-center px-4 py-5">
      <div className="flex">
        <img
          src="../bantutemuicon.png"
          alt="logo"
          className="w-8 h-auto mr-1"
        />
        <h1 className="font-bold text-2xl">BantuTemu</h1>
      </div>
      <button className="bg-gray-200 hover:bg-gray-300 p-2 rounded">
        Login
      </button>
    </nav>
  );
}

export default Navbar;
