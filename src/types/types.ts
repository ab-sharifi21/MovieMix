import { ReactElement } from 'react';

export interface Route {
  id: string | number;
  text: string;
  href: string;
  icon?: ReactElement;
}

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Genre {
  id: number;
  name: string;
}

export interface CurrentSlideData {
  data: Movie;
  index: number;
}
