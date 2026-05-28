const Navbar = () => {
  return (
    <div className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
      </div>
      <div className="flex items-center gap-4">
        <button className="relative p-2 rounded-full hover:bg-gray-100 transition">
          🔔
        </button>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
            A
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-800">Admin</p>
            <p className="text-xs text-gray-500">HR Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
