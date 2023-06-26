import { FunctionComponent } from "react";
import { CloseButton } from "../CloseButton/CloseButton";
import { Confirm } from "../Confirm/Confirm";
import styles from './PopUp.module.css';

interface Props {
  action?: Function,
  closePopUp: Function,
  header: string,
  text?: string
}

export const PopUp: FunctionComponent<Props> = ({action, closePopUp, header = '', text = ''}) => {
  return (
    <div className={styles.backdrop} onClick={() => closePopUp()}>
      <div className={styles.popUp} onClick={(event) => event.stopPropagation()}>
        <span className={styles.header}>
          <h3 className={styles.header__text}>{header}</h3>
          <CloseButton size={16} onClickHandler={() => closePopUp()} />
        </span>

        <p className="styles.text">{text}</p>

        <div className={styles.controls}>
          <Confirm type={true} onClickHandler={ () => { action?.(true); closePopUp(); }} />
          <Confirm type={false} onClickHandler={ () => closePopUp() } />
        </div>
      </div>
    </div>
  );
}