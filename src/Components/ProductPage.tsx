import React from 'react';

import HeaderComponent from './Common/HeaderComponent';
import BodyComponent from './Common/BodyComponent';
import ProductsComponent from './Common/ProductsComponent';
import { IProductPageProps } from '../constants';

const ProductPage: React.FC<IProductPageProps> = ({ theme, themeToggler }) => (
  <div data-testid="Container">
    <HeaderComponent theme={theme} themeToggler={themeToggler} />
    <BodyComponent />
    <ProductsComponent />
  </div>
);

export default ProductPage;
