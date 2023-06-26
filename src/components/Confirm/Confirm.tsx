import { FunctionComponent, MouseEventHandler } from "react";
import styles from './Confirm.module.css';

interface Props {
  type: boolean,
  onClickHandler?: MouseEventHandler
};

export const Confirm: FunctionComponent<Props> = ({type, onClickHandler}) => {
  let buttonTypeClass = type ? styles.button_yes : styles.button_no;
  buttonTypeClass += ' ' + styles.button;

  return (
    <button onClick={onClickHandler} className={buttonTypeClass}>{type ? 'Да' : 'Нет'}</button>
  );
}