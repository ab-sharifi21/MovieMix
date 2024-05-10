'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactElement } from 'react';
import { FaArrowRight } from 'react-icons/fa';

interface RouteItemProps {
  href: string;
  text: string;
  icon?: ReactElement;
}

export const RouteItem = ({ href, text, icon }: RouteItemProps) => {
  const pathName = usePathname();
  return (
    <Link
      href={href}
      className={`inline-flex w-full items-center space-x-2 rounded-sm border-slate-700 px-2 py-1 transition duration-150 ease-linear hover:border-b hover:bg-white/5 ${pathName === href && 'bg-primaryColor text-black'} `}
    >
      {icon ? icon : <FaArrowRight className='hidden md:block' />}
      <div className="flex flex-col">
        <span className="text-sm">{text}</span>
      </div>
    </Link>
  );
};
