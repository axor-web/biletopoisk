'use client';

import { FunctionComponent, ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "./store";

interface Props {
  children: ReactNode[] | ReactNode
}

export const StoreProvider: FunctionComponent<Props> = ({children}) => {
  return (
    <Provider store={store}>{children}</Provider>
  )
}