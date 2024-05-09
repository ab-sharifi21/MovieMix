'use client';
import { Movie } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';

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
        <div className='group-hover:block absolute bottom-3 left-4'>
            <p className='text-sm font-semibold text-slate-100'>{movie.title}</p>
            <p className='text-xs text-slate-300'>{movie.release_date}</p>
        </div>
      </div>
    </Link>
  );
};
