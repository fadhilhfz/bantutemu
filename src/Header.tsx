function Header(): JSX.Element {
  return (
    <header className="py-14 px-2">
      <h1 className="font-semibold text-4xl text-center">
        <span className="block">Tak Perlu Galau Saat</span>
        <span className="block">Kehilangan*, Kami</span>
        <span className="block">Siap Membantu Menemukan!</span>
      </h1>
      <p className="text-center text-sm mt-1">*barang, bukan pasangan 😂</p>
      <button className="block mt-4 mx-auto px-8 py-2 bg-green-600 hover:bg-green-700 text-white rounded">
        Cari
      </button>
    </header>
  );
}

export default Header;
