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
      className={`inline-flex w-full items-center space-x-2 rounded-sm text-white/50 border-slate-700 px-2 py-1 transition duration-150 ease-linear hover:border-b hover:bg-white/5 ${(pathName === href) && 'bg-primaryColor text-slate-700'} `}
    >
      {icon ? icon : <FaArrowRight />}
      <div className="flex flex-col">
        <span className="hidden text-sm md:block">{text}</span>
      </div>
    </Link>
  );
};
