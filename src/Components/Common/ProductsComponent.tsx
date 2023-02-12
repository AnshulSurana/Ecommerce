import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import * as ProductStyles from '../../Styles/ProductStyles';
import ProductItem from './ProductItem';
import { IProducts } from '../../constants';
import getProductDetails from '../../Services/getProducts';

const AboutContainer = styled.div`
    padding: 10px;
    margin: 0;
    display: block;
    justify-content: center;
    background-color: ${({ theme }) => theme.productSection};
`;

const BoxComponent = styled.div`
    display: flex;
    margin: auto;
    align-items: center;
    margin: 2vw;
    justify-content: center;
    border-radius: 5px;
`;

const ProductsComponent:React.FC = () => {
  const [productData, setProductData] = useState([]);

  const getAPIData = async () => {
    const { data } = await getProductDetails();
    setProductData(data);
  };

  useEffect(() => {
    getAPIData();
  }, []);

  return (
    <AboutContainer data-testid="aboutSection" id="about">
      <BoxComponent>
        <ProductStyles.ItemsContainer data-testid="item">
          {productData.map((product: IProducts) => <ProductItem 
          key={product.id} 
          data-testid="products" 
          productDetail={product} />)}
        </ProductStyles.ItemsContainer>
      </BoxComponent>
    </AboutContainer>
  );
};

export default ProductsComponent;
