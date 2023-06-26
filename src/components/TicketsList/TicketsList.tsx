import { FunctionComponent, ReactNode } from "react";
import { Ticket } from "@/components/Ticket/Ticket";
import IFilm from "@/interfaces/Film";
import styles from './TicketsList.module.css';

interface Props {
  query: any,
  filters?: {name?: string, genre?: string, cinema?: string},
  isInBasket?: boolean
};

export const TicketsList: FunctionComponent<Props> = ({query, filters, isInBasket = false}) => {
    let data: IFilm[], isLoading: boolean, error;

    ({ data, isLoading, error } = query);

    let list: ReactNode[] = [];
    if (!isLoading && !error) {
      list = (
        data
            .filter((film: IFilm) => {
              return (
                (filters?.name ? film.title.toLowerCase().includes(filters.name.toLowerCase()) : true) && 
                (filters?.genre ? film.genre.toLowerCase().includes(filters.genre.toLowerCase()) : true) &&
                (filters?.cinema ? filters.cinema.includes(film.id) : true)
              );
            })
            .map((film: IFilm) => {
              return (
                <Ticket
                  key={film.id}
                  filmId={film.id}
                  imageUrl={film.posterUrl}
                  header={film.title}
                  genre={film.genre}
                  isInBasket={isInBasket}
                />
              );
            })
      );
    }

    return (
      <ul className={styles.list}>
        {isLoading ?
          (Array.from({length: 5}, (_, index) => <Ticket key={index} isLoading={true} />))
        : !!error ? <li>Внутренняя ошибка сервера</li>
        : 
          list.length > 0 ? list : <li className={styles.notFound}>Ничего не найдено :(</li>
        }
      </ul>
    );
}