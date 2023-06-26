'use client';

import { selectCartModule } from "@/redux/features/cart/selector";
import { useGetMoviesQuery } from "@/redux/services/movie.api";
import { useSelector } from "react-redux";
import styles from './page.module.css';
import { ReactNode, useState } from "react";
import { Ticket } from "@/components/Ticket/Ticket";
import { createPortal } from "react-dom";
import { PopUp } from "@/components/PopUp/PopUp";
import IFilm from "@/interfaces/Film";

interface Cart {
  [key: string]: number
};

export default function Page() {
  let cart: Cart = useSelector((state) => selectCartModule(state));
  let totalAmount = Object.values(cart).reduce((sum, current) => sum + current, 0);

  const { data, isLoading, error } = useGetMoviesQuery('');

  interface IPopUpData {
    isPopUp: boolean,
    deleteFunc?: Function
  }

  let popUpData: IPopUpData, setPopUpData: Function;
  [ popUpData, setPopUpData ] = useState({isPopUp: false, deleteFunc: () => {}});

  let list: ReactNode[] = [];

  if (data) {
    list = data
      .filter((film: IFilm) => film.id in cart)
      .map((film: IFilm) => {
        return (
          <Ticket
            key={film.id}
            filmId={film.id}
            imageUrl={film.posterUrl}
            header={film.title}
            genre={film.genre}
            isInBasket={true}
            setPopUpData={setPopUpData}
          />
        );
      });
  }

  return (
    <div className={styles.container}>
    <ul className={styles.list}>
      {isLoading ?
        (Array.from({length: 5}, (item, index) => <Ticket key={index} isLoading={true} />))
      : !!error ? <li>Внутренняя ошибка сервера</li>
      : 
        list.length > 0 ? list : <li className={styles.notFound}>Корзина пуста :(</li>
      }
    </ul>

    { !!totalAmount && 
      <div className={styles.totalAmount}>
        <span>Итого билетов: </span>
        <span>{totalAmount}</span>
      </div> 
    }

    { popUpData.isPopUp && createPortal(<PopUp header="Удаление билета" text="Вы уверены, что хотите удалить билет?" action={popUpData.deleteFunc} closePopUp={() => setPopUpData({isPopUp: false})} />, document.body) }
    </div>
  );
};