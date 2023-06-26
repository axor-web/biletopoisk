'use client';

import { Filters } from "@/components/Filters/Filters";
import { TicketsList } from "@/components/TicketsList/TicketsList";
import { useState } from "react";
import { useGetCinemasQuery, useGetMoviesQuery } from "@/redux/services/movie.api";
import getGenreOnRus, { Genre } from "@/helpers/getGenreOnRus";
import IFilm from "@/interfaces/Film";
import ICinema from "@/interfaces/Cinema";
import styles from './page.module.css';

export default function Home() {
  const [name, setName] = useState('');
  const [genre, setGenre] = useState('');
  const [cinema, setCinema] = useState('');

  const filterSetters = { setName, setGenre, setCinema };

  const filmsQuery = useGetMoviesQuery('');
  const cinemasQuery = useGetCinemasQuery('');

  let genres: string[][] = [[]];
  if (!filmsQuery.isLoading) {
    genres = [...new Set(filmsQuery.data.map((film: IFilm) => film.genre))]
      .map((genre) => [ genre, getGenreOnRus(genre as Genre) ]) as string[][];
  }

  let cinemas: string[][] = [];
  if (!cinemasQuery.isLoading) {
    cinemas = cinemasQuery.data.map((cinema: ICinema) => [cinema.movieIds.join(' '), cinema.name]);
  }

  return (
    <div className="wrapper">
      <Filters genres={genres} cinemas={cinemas} filterSetters={filterSetters} />
      <TicketsList query={filmsQuery} filters={{name, genre, cinema}} />
    </div>
  );
};
