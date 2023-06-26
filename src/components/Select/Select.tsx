'use client';

import { FunctionComponent, MutableRefObject, ReactNode, useEffect, useRef, useState } from "react";
import styles from './Select.module.css';
import { createPortal } from "react-dom";

interface Props {
  placeholder?: string,
  items?: string[][],
  label?: string,
  setFunc?: Function
}

export const Select: FunctionComponent<Props> = ({ items, placeholder = 'Placeholder', label = '', setFunc }) => {
  let [chosenItem, setChosenItem] = useState('');
  let [isActive, setIsActive] = useState(false);

  const ref: MutableRefObject<HTMLInputElement | null> = useRef(null);

  useEffect(() => {
    function clickHandler(event: Event): void {
      const elem = event.target as HTMLElement;
      const isSelect = elem.classList && 
        ([...elem?.classList].includes(styles.list__item) || [...elem?.classList].includes(styles.input));

      !isSelect && setIsActive(false);
    }

    document.body.addEventListener('click', clickHandler);
    document.addEventListener('scroll', clickHandler);

    return () => {
      document.body.removeEventListener('click', clickHandler);
      document.removeEventListener('scroll', clickHandler);
    };
  }, []);

  const select = (
    <div className={styles.container} onClick={(event) => {
      event.stopPropagation();
      event.preventDefault();
      setIsActive(!isActive);
    }}>
      <input
        id="value"
        ref={ref}
        type="text"
        disabled
        placeholder={placeholder} 
        value={chosenItem} 
        className={styles.input + (isActive ? ' ' + styles.input_active : '')}
      />

      <div className={styles.arrow + (isActive ? ' ' + styles.arrow_active : '')}>
        <svg className={styles.arrow__svg} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M7.50008 18.9583H12.5001C17.0251 18.9583 18.9584 17.025 18.9584 12.5V7.49996C18.9584 2.97496 17.0251 1.04163 12.5001 1.04163H7.50008C2.97508 1.04163 1.04175 2.97496 1.04175 7.49996V12.5C1.04175 17.025 2.97508 18.9583 7.50008 18.9583ZM2.29175 7.49996C2.29175 3.65829 3.65841 2.29163 7.50008 2.29163H12.5001C16.3417 2.29163 17.7084 3.65829 17.7084 7.49996V12.5C17.7084 16.3416 16.3417 17.7083 12.5001 17.7083H7.50008C3.65841 17.7083 2.29175 16.3416 2.29175 12.5V7.49996ZM9.55842 12.2417C9.68342 12.3667 9.84175 12.4251 10.0001 12.4251C10.1584 12.4251 10.3168 12.3667 10.4418 12.2417L13.3834 9.30006C13.6251 9.05839 13.6251 8.65839 13.3834 8.41672C13.1418 8.17506 12.7418 8.17506 12.5001 8.41672L10.0001 10.9167L7.50008 8.41672C7.25842 8.17506 6.85842 8.17506 6.61675 8.41672C6.37508 8.65839 6.37508 9.05839 6.61675 9.30006L9.55842 12.2417Z" fill="#999FA6"/>
        </svg>
      </div>

      { isActive && createPortal(
        <ul 
          className={styles.list}
          style={{top: ((ref.current?.getBoundingClientRect().bottom || 0) + 4) + 'px', left: ((ref.current?.getBoundingClientRect().left || 0) + 'px')}}
        >
          { items?.map((item, index) => <li 
              className={styles.list__item} 
              key={item[0]}
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                setChosenItem(index !== 0 ? item[1] : '');
                setIsActive(false);

                setFunc && setFunc(item[0]);
              }}
            >
              {item[1]}
          </li>)}
        </ul>, document.body) 
      }
    </div>
  );

  return (
    label.length > 0 ? 
      <label className={styles.label}>
        <span className={styles.label__text}>{label}</span>
        {select}
      </label>

     : {select}
  ) as ReactNode;
}