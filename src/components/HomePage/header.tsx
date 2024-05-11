'use client';

import { useState } from 'react';

export const Header = () => {
  const [searchValue, setSearchValue] = useState<String>('');

  const handleFormChange = (e: any) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };

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
          className="border-bg-gray-900 w-[10rem] place-content-center rounded-2xl border border-primaryColor bg-gray-600 px-4 py-1 text-sm text-white placeholder-white caret-primaryColor outline-none duration-300 placeholder:text-sm focus:w-[20rem]"
        />
      </header>
    </>
  );
};
