export const Header = () => {
  return (
    <>
      <header className="flex items-center justify-between p-4">
        <div className="flex items-center gap-1 text-sm font-semibold uppercase">
          <p className="rounded-md bg-primaryColor p-1">Top 10</p>
          <p className="text-primaryColor">Movies</p>
        </div>
        <input
          type="text"
          placeholder="What are you searching?"
          className="rounded-3xl border border-primaryColor px-4 py-1 text-orange-600 placeholder-orange-500 caret-orange-500 outline-none"
        />
      </header>
    </>
  );
};
