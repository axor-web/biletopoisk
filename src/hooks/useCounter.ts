import { cartActions } from "@/redux/features/cart";
import { selectProductAmount } from "@/redux/features/cart/selector";
import { MouseEventHandler, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export function useCounter(id?: string) {
  const amount = useSelector((state) => selectProductAmount(state, id));

  let count: number, setCount: Function;
  [count, setCount] = useState(amount);

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