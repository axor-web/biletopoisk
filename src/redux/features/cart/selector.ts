export const selectCartModule = (state: any) => state.cart;
export const selectProductAmount = (state: any, id: string | undefined) => id && selectCartModule(state)[id] || 0;