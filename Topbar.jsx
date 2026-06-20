function Topbar() {
  return (
    <div className="bg-white shadow p-4 flex justify-between">
      <h2 className="text-xl font-semibold">
        Dashboard Overview
      </h2>

      <img
        src="https://i.pravatar.cc/40"
        alt="profile"
        className="rounded-full"
      />
    </div>
  );
}

export default Topbar;