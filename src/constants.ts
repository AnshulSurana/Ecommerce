export const UNEXPECTED_ERROR = 'Unexpected Error:';

export interface IProducts {
    id: string;
    name: string;
    img: string;
    availableAmount: number;
    minOrderAmount: number;
    price: number;
}

export interface IContext {
    cartItemCount: number;
    setCartItem: Function;
}

export interface ICartProduct {
    id: string;
    name: string;
    img: string;
    availableAmount: number;
    minOrderAmount: number;
    price: number;
    quantity: number;
    totalPrice: number;
}

export type GetEmailsSuccessResponse = {
    isOk: boolean;
    data: Array<IProducts>;
    error: null;
  };

export type GetEmailsErrorResponse = {
    isOk: boolean;
    data: null;
    error: string;
  };

export type GetProductsResponse =
  | GetEmailsSuccessResponse
  | GetEmailsErrorResponse;

export interface IProductPageProps {
    theme: string
    themeToggler:Function;
}

export interface ICartPageProps {
    theme: string
    themeToggler: Function;
}

export interface IProductItemProps {
    productDetail: IProducts
}

export interface IProps {
    product: ICartProduct;
    handleClick: (id: any) => void;
}