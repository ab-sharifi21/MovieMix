'use client'

import { useState } from "react";

export const Header = () => {
  const [searchValue, setSearchValue] = useState<String>('');

  const handleFormChange = (e: any) => {
    e.preventDefault()
    setSearchValue(e.target.value);
  }

  console.log(searchValue);
  return (
    <>
      <header className="absolute left-0 right-0 top-0 flex items-center justify-between bg-transparent p-4">
        <div className="flex items-center gap-1 text-sm font-semibold uppercase">
          <p className="rounded-md bg-primaryColor p-1 text-black">Top 20</p>
          <p className="text-primaryColor">Movies</p>
        </div>
        <input
          type="text"
          placeholder="Search..."
          onChange={handleFormChange}
          className="border-bg-gray-900 rounded-2xl border border-primaryColor bg-gray-600 w-[10rem] px-4 duration-300 focus:w-[20rem] py-1 text-white placeholder:text-sm placeholder-white place-content-center caret-primaryColor text-sm outline-none"
        />
      </header>
    </>
  );
};
