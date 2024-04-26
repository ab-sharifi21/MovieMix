import { Route } from '@/types/types';
import { GiFilmProjector, GiFilmSpool } from 'react-icons/gi';
import { RouteItem } from './route-item';
import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';

const routes: Route[] = [
  {
    id: 1,
    text: 'Action',
    href: '/action',
  },
  {
    id: 2,
    text: 'Comedies',
    href: '/comedies',
  },
  {
    id: 3,
    text: 'Romance',
    href: '/romance',
  },
  {
    id: 4,
    text: 'Documentaries',
    href: '/documentaries',
  },
  {
    id: 5,
    text: 'Horror',
    href: '/horror',
  },
  {
    id: 6,
    text: 'Anime',
    href: '/anime',
  },
  {
    id: 7,
    text: 'Fantasy',
    href: '/fantasy',
  },
];

export const Navigation = ({ children }: any) => {
  return (
    <>
          <nav
            id="menu"
            style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(155, 155, 155, 0.5) rgba(0, 0, 0, 0.1)' }}
            className="sticky flex flex-col top-0 left-0 z-10 h-screen min-h-screen w-64 overflow-y-scroll  bg-gray-900 text-slate-300"
          >
            <div id="logo" className="my-4 px-6">
              <Link
                href="/"
                className="flex gap-2 text-lg font-bold text-white md:text-2xl"
              >
                MovieMix
                <span className="text-blue-500">
                  <GiFilmProjector />
                </span>
              </Link>
              <p className="text-sm text-slate-300">
                Discover endless movies at your fingertips.
              </p>
            </div>

            <div className="mx-4 flex items-center">
              <GiFilmSpool className="h-6 w-5" />
              <h3 className="m-3 text-lg font-bold text-white">Genres</h3>
            </div>

            <div id="nav" className="w-full flex-1 px-6">
              {routes.map((route) => {
                return <RouteItem key={route.id} {...route} />;
              })}
            </div>

            <div className="flex w-full justify-center gap-4 p-4">
              <Link
                href="https://github.com/ab-sharifi21"
                target="_blank"
                className="text-white/70 duration-300 hover:scale-110 hover:text-primaryColor"
              >
                <BsGithub className="h-6 w-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/abdullahsharifi/"
                target="_blank"
                className="text-white/70 duration-300 hover:scale-110 hover:text-primaryColor"
              >
                <FaLinkedin className="h-6 w-5" />
              </Link>
            </div>
          </nav>
    </>
  );
};
