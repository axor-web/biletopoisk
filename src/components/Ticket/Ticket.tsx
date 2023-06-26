'use client';

import { FunctionComponent, MouseEventHandler, ReactNode, useEffect, useState } from "react";
import { Counter } from "../Counter/Counter";
import { CloseButton } from "../CloseButton/CloseButton";
import { useDispatch, useSelector } from "react-redux";
import { selectProductAmount } from "@/redux/features/cart/selector";
import { cartActions } from "@/redux/features/cart";
import { NoImageSvg } from "../NoImageSvg/NoImageSvg";
import getGenreOnRus, { Genre } from "@/helpers/getGenreOnRus";
import Link from "next/link";
import Image from 'next/image';
import '../../styles/loading.css';
import '../../styles/image.css';
import styles from './Ticket.module.css';

interface Props {
  imageUrl?: string,
  header?: string,
  genre?: string,
  isInBasket?: boolean,
  isLoading?: boolean,
  filmId?: string,
  setPopUpData?: Function
}

export const Ticket: FunctionComponent<Props> = ({ 
  imageUrl = 'Без картинки', 
  header = 'Без названия', 
  genre = '',
  isInBasket = false,
  isLoading = false,
  filmId,
  setPopUpData
}) => {
  const [isDeleted, setIsDeleted] = useState(false);

  const amount = useSelector((state) => selectProductAmount(state, filmId));
  const dispatch = useDispatch();

  useEffect(() => {
    if (isDeleted) {
      dispatch(cartActions.exclude(filmId));
      return;
    }
  }, [dispatch, filmId, isDeleted]);

  const onClickHandler: MouseEventHandler = (event) => {
    setPopUpData ? setPopUpData({isPopUp: true, deleteFunc: setIsDeleted}) : setIsDeleted(true);
  }
  
  let ticket: ReactNode;

  if (isLoading) {
    ticket = 
      <li className={styles.card + (isLoading ? ' loading' : '')}>
        <div className={styles.image + ' image'}></div>
      </li>
  }
  else {
    ticket = 
      <li className={styles.card}>
        <Link href={`/film/${filmId}`} className={styles.image + ' image'}>
          {imageUrl === 'Без картинки' ? <NoImageSvg /> : <Image className='image__inner' src={imageUrl} alt={header} height={120} width={100} loading="lazy" />}
        </Link>

        <span className={styles.info}>
          <Link href={`/film/${filmId}`} className={styles.header}>
            <h3>{header}</h3>
          </Link>

          {genre !== '' && <span className={styles.genre}>{getGenreOnRus(genre as Genre)}</span>}
        </span>
      
        <div className={styles.controls}>
          <Counter minValue={isInBasket ? 1 : 0} id={filmId} amount={amount} />

          { isInBasket && <CloseButton size={20} onClickHandler={onClickHandler}/> }
        </div>
      </li>
  }

  return ticket;
}