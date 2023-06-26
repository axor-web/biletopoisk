import { FunctionComponent } from "react";
import styles from './Input.module.css';

interface Props {
  type?: string,
  placeholder?: string,
  label?: string,
  setName?: Function
}

export const Input: FunctionComponent<Props> = ({ type = 'text', placeholder = 'placeholder', label = '', setName }) => {
  const input = 
    <input 
      id="input"
      type={type}
      placeholder={placeholder}
      className={styles.input}
      onChange={(event) => {setName && setName(event.target.value); }}
    />;

  return (
    label.length > 0 ?
      <label htmlFor="input" className={styles.label}>
        <span className={styles.label__text}>{label}</span>
        {input}
      </label>
      :
      input
  );
}