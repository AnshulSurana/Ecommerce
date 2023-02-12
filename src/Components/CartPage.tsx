import React from 'react';

import HeaderComponent from './Common/HeaderComponent';
import CartComponent from './Common/CartComponent';
import { ICartPageProps } from '../constants';


const CartPage: React.FC<ICartPageProps> = ({ theme, themeToggler }) => (
  <div data-testid="cartContainer">
    <HeaderComponent theme={theme} themeToggler={themeToggler} />
    <CartComponent />
  </div>
);

export default CartPage;
