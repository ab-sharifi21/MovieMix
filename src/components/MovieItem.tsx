'use client';
import { Movie } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';
import { IoPlayCircleOutline } from 'react-icons/io5';

interface MovieItemProps {
  movie: Movie;
}

export const MovieItem = ({ movie }: MovieItemProps) => {
  return (
    <Link href="#">
      <div className='w-[330px] h-[200px] group relative'>
        <Image
          src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
          alt={`${movie.title}'s poster`}
          width={330}
          height={200}
          priority={false}
          className="h-full w-full rounded-lg saturate-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black rounded-lg"></div>
        <div className='absolute bottom-0 left-0 p-4'>
            <p className='text-sm font-semibold text-slate-100'>{movie.title}</p>
            <p className='text-xs text-slate-300'>{movie.release_date}</p>
        </div>
        <div className="hidden group-hover:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-slate-300">
        <IoPlayCircleOutline className='h-12 w-12 hover:scale-110 duration-300 transition-all' />
        </div>
      </div>
    </Link>
  );
};
