'use client';

import { FunctionComponent, ReactNode } from "react";
import { Counter } from "../Counter/Counter";
import { useSelector } from "react-redux";
import { selectProductAmount } from "@/redux/features/cart/selector";
import { useGetMovieQuery } from "@/redux/services/movie.api";
import { NoImageSvg } from "../NoImageSvg/NoImageSvg";
import Image from 'next/image';
import getGenreOnRus, { Genre } from "@/helpers/getGenreOnRus";
import IFilm from "@/interfaces/Film";
import '../../styles/loading.css';
import '../../styles/image.css';
import styles from './Film.module.css';

interface Props {
  id: string
};

export const Film: FunctionComponent<Props> = ({id}) => {
  let data: IFilm, isLoading: boolean, error;

  ({ data, isLoading, error } = useGetMovieQuery(id));

  const amount = useSelector((state) => selectProductAmount(state, data?.id)) || 0;

  let film: ReactNode;

  if (!isLoading) {
    film = (
      <div className={styles.film}>
        <div className={styles.image + ' image'}>
          {data.posterUrl === 'Без картинки' ? <NoImageSvg /> : <Image className='image__inner' src={data.posterUrl} alt={data.title} width={800} height={1000} priority={true} />}
        </div>
        
        <div className={styles.info}>
          <span className={styles.header}>
            <h2>{data.title}</h2>
            <Counter id={data.id} amount={amount}  />
          </span>

          <div className={styles.specs}>
            <span>
              <h4 className={styles.spec}>Жанр:</h4> {getGenreOnRus(data.genre)}
            </span>

            <span>
              <h4 className={styles.spec}>Год выпуска:</h4> {data.releaseYear}
            </span>

            <span>
              <h4 className={styles.spec}>Рейтинг:</h4> {data.rating}
            </span>

            <span>
              <h4 className={styles.spec}>Режиссер:</h4> {data.director}
            </span>
          </div>

          <span className={styles.description}>
            <h4 className={styles.description__head}>Описание</h4>
            <p className={styles.description__text}>{data.description}</p>
          </span>
        </div>
      </div>
    );
  }
  else if (error) {
    film = <div>Произошла ошибка. Попробуйте перезагрузить страницу</div>
  }
  else {
    film = (
      <div className={styles.film + ' loading'}>
        <div className={styles.image + ' image'}></div>
      </div>
    );
  }

  return film;
};