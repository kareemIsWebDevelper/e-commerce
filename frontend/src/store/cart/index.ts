interface CartState {
    isDisabled: boolean;
    isLoading: boolean;
    error: string | null;
    message: string;
    cartData: object | null;
}

export const initialState: CartState = {
    isDisabled: false,
    isLoading: false,
    error: null,
    message: "",
    cartData: null
}