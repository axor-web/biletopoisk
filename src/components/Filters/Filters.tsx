import { FunctionComponent } from "react";
import styles from './Filters.module.css';
import { Input } from "../Input/Input";
import { Select } from "../Select/Select";
import ICinema from "@/interfaces/Cinema";

interface Props {
  filterSetters?: { setName?: Function, setGenre?: Function, setCinema?: Function },
  genres?: string[][],
  cinemas?: string[][]
};

export const Filters: FunctionComponent<Props> = ({filterSetters, genres = [], cinemas = []}) => {
  const genresList = [['', 'Любой'], ...genres];
  const cinemasList = [['', 'Любой'], ...cinemas];

  return (
    <div className={styles.container}>
      <h3 className={styles.header}>Фильтр поиска</h3>
      
      <Input type="text" label="Название" placeholder="Введите название" setName={filterSetters?.setName} />

      <Select placeholder="Выберите жанр" items={genresList} label="Жанр" setFunc={filterSetters?.setGenre} />

      <Select placeholder="Выберите кинотеатр" items={cinemasList} label="Кинотеатр" setFunc={filterSetters?.setCinema} />
    </div>
  );
};