export const Header = () => {
  return (
    <>
      <header className="flex items-center absolute top-0 left-0 right-0 bg-transparent justify-between p-4">
        <div className="flex items-center gap-1 text-sm font-semibold uppercase">
          <p className="rounded-md bg-primaryColor text-black p-1">Top 10</p>
          <p className="text-primaryColor">Movies</p>
        </div>
        <input
          type="text"
          placeholder="What are you searching?"
          className="rounded-3xl border border-bg-gray-900 px-4 py-1 text-orange-600 placeholder-orange-500 caret-orange-500 outline-none bg-white/75"
        />
      </header>
    </>
  );
};
