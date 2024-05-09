export const Header = () => {
  return (
    <>
      <header className="absolute left-0 right-0 top-0 flex items-center justify-between bg-transparent p-4">
        <div className="flex items-center gap-1 text-sm font-semibold uppercase">
          <p className="rounded-md bg-primaryColor p-1 text-black">Top 10</p>
          <p className="text-primaryColor">Movies</p>
        </div>
        <input
          type="text"
          placeholder="What are you searching?"
          className="border-bg-gray-900 rounded-3xl border bg-white/75 px-4 py-1 text-orange-600 placeholder-orange-500 caret-orange-500 outline-none"
        />
      </header>
    </>
  );
};
