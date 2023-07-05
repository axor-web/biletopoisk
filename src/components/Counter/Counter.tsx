'use client';

import { FunctionComponent, MouseEventHandler } from "react";
import { CounterButton } from "../CounterButton/CounterButton";
import { useCounter } from "@/hooks/useCounter";
import styles from './Counter.module.css';

interface Props {
  minValue?: number,
  maxValue?: number,
  id?: string,
}

export const Counter: FunctionComponent<Props> = ({ id, minValue = 0, maxValue = 30 }) => {
  let { count, increment, decrement } = useCounter(id);

  return (
    <div className={styles.counter}>
      <CounterButton type="-" onClick={decrement} disabled={count<= minValue}/>
      <span>{ count }</span>
      <CounterButton type="+" onClick={increment} disabled={count >= maxValue}/>
    </div>
  );
}; 