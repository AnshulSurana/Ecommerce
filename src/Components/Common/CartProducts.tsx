import React from 'react';

import { Delete } from '@styled-icons/material/Delete';
import * as S from '../../Styles/CartProductStyles';
import { IProps } from '../../constants';

const CartProduct: React.FC<IProps> = ({ product, handleClick }) => (
  <S.Container>
    <S.Image
      src={product.img}
      alt={product.name}
    />
    <S.Details>
      <S.Title>{product.name}</S.Title>
      <S.Desc>
        Quantity:{' '}{product.quantity}
      </S.Desc>
    </S.Details>
    <S.Price>
      <p>
        &#8364;
        {product.totalPrice}
      </p>
    </S.Price>
    <S.DeleteButton
      title="remove product from cart"
    >
      <Delete
        data-testid="deleteButton"
        size="30"
        onClick={() => handleClick(product.id)}
      />
    </S.DeleteButton>
  </S.Container>
);

export default CartProduct;
