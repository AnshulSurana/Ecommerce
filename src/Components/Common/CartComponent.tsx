import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import useCartData from '../../Hooks/useCartData';
import getProductDetails from '../../Services/getProducts';
import * as S from '../../Styles/CartStyles';
import CartProducts from './CartProducts';
import { calculatePrice } from '../../utils/utility';

const Cart: React.FC = () => {
  const [cartData, setCartData] = useState([]);
  const [totalValue, setTotalValue] = useState(0);
  const { getCartProducts, removeCartProduct } = useCartData();
  const navigate = useNavigate();

  const getAPIData = async () => {
    const { data } = await getProductDetails();
    const { productInCart, total } = getCartProducts(data);
    setTotalValue(calculatePrice(total));
    setCartData(productInCart);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getAPIData();
  }, []);

  const handleClick = (id: any) => {
    removeCartProduct(id);
    getAPIData();
  };

  const handleBack = () => {
    navigate('/products');
  };

  const getCardProduct = () => {
    if (cartData && cartData.length > 0) {
      return cartData.map((product) =>
        <CartProducts 
        key={product.id}
        product={product} 
        data-testid="cartProduct" 
        handleClick={handleClick} />
      );
    } else {
      return (
        <S.EmptyDataContainer>
          <S.EmptyCart>
            Cart is Empty
          </S.EmptyCart>
        </S.EmptyDataContainer>
      )
    }
  }

  return (
    <S.Container>
      <S.CartContent>
        <S.SideContainer>
          <S.ProductsData>
            {getCardProduct()}
            <S.FormButtonComponent
              data-testid="backButton"
              onClick={handleBack}
            >
              Go to Catalog
            </S.FormButtonComponent>
          </S.ProductsData>
          <S.CartFooter>
            <S.Sub>SUBTOTAL</S.Sub>
            <S.SubPriceValue>
              &#8364;
              {totalValue}
            </S.SubPriceValue>
          </S.CartFooter>
        </S.SideContainer>
      </S.CartContent>
    </S.Container>
  );
};

export default Cart;
