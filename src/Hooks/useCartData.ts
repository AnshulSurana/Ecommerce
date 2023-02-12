import { useState, useContext } from 'react';

import { CurrentUserContext } from '../App';
import { calculatePrice } from '../utils/utility'

const useCartData = () => {
  const [cartItemData, setData] = useState<{id: string} | {}>({});
  const { setCartItem } = useContext(CurrentUserContext);
  const cartData = window.sessionStorage.getItem('cartItem');
  /**
   * 
   * @param id 
   * @param amount 
   * sets data in state and updates session storage
   */
  const setCartData = (id: string, amount: number) => {
    if (cartData) {
      const existingData = JSON.parse(cartData);
      const ItemCount = existingData[id];
      if (ItemCount) {
        window.sessionStorage.setItem('cartItem', JSON.stringify({ ...existingData, [id]: ItemCount + amount }));
        setData({ [id]: ItemCount + amount });
      } else {
        setCartItem(Object.keys(existingData).length + 1);
        window.sessionStorage.setItem('cartItem', JSON.stringify({ ...existingData, [id]: amount }));
        setData({ [id]: amount });
      }
    } else {
      setCartItem(1);
      window.sessionStorage.setItem('cartItem', JSON.stringify({ [id]: amount }));
      setData({ [id]: amount });
    }
  };

  /**
   * 
   * @param itemId 
   * @returns Item quantity for products in cart or 0
   */
  const getCartItemCountForItem = (itemId) => {
    if (cartData) {
      const existingData = JSON.parse(cartData);
      return existingData[itemId] ? existingData[itemId] : 0;
    }
    return 0;
  };

  /**
   * 
   * @returns return total item count in cart
   */
  const getCartItemTotalCount = () => {
    if (cartData) {
      const existingData = JSON.parse(cartData);
      return existingData ? Object.keys(existingData).length : 0;
    }
    return 0;
  };

  

  /**
   * 
   * @param productData 
   * @returns product data for items in cart and formats it to match CartProduct type
   */
  const getCartProducts = (productData) => {
    const newCartData = window.sessionStorage.getItem('cartItem');
    let productInCart = [];
    let total = 0;
    if (newCartData) {
      const cartItem = JSON.parse(newCartData);
      productInCart = Object.keys(cartItem).map((item) => {
        const productItem = productData.find((product) => product.id === item);
        productItem.quantity = cartItem[item];
        const price = cartItem[item] * productItem.price;
        productItem.totalPrice = calculatePrice(price);
        total += productItem.totalPrice;
        return productItem;
      });
    }
    return { productInCart, total };
  };

  /**
   * 
   * @param itemId 
   * removes item from cart
   */
  const removeCartProduct = (itemId) => {
    if (cartData) {
      const cartItem = JSON.parse(cartData);
      delete cartItem[itemId];
      setCartItem(Object.keys(cartItem).length);
      window.sessionStorage.setItem('cartItem', JSON.stringify(cartItem));
    }
  };
  return {
    cartItemData,
    setCartData,
    getCartItemCountForItem,
    getCartItemTotalCount,
    getCartProducts,
    removeCartProduct,
  };
};

export default useCartData;
