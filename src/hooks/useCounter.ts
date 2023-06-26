import { cartActions } from "@/redux/features/cart";
import { useCallback, useContext, useState } from "react";
import { useDispatch } from "react-redux";

export function useCounter(initialValue: number = 0, id: string | undefined) {
  let count: number, setCount: Function;
  [count, setCount] = useState(initialValue);

  const dispatch = useDispatch();
  
  const decrement = useCallback(() => {
    setCount((currentCount: number) => currentCount - 1 > 0 ? currentCount - 1 : 0);
    id && dispatch(cartActions.decrement(id)); 
  }, [id, dispatch, setCount]);
  const increment = useCallback(() => {
    setCount((currentCount: number) => currentCount + 1);
    id && dispatch(cartActions.increment(id));
  }, [id, dispatch, setCount]);

  return { count, increment, decrement };
}