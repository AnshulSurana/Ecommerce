import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { IProductItemProps } from '../../constants';
import useCartData from '../../Hooks/useCartData';
import * as ProductStyles from '../../Styles/ProductStyles';

const QuantityToggle = ({
  setQuantity, amount, getCartItemCountForItem, itemId, minAmount, maxAmount,
}) => (
  <ProductStyles.QuantityContainer data-testid="QuantityContainer">
    <ProductStyles.MinusButton
      data-testid="minus"
      onClick={() => setQuantity('decrease', maxAmount, minAmount, getCartItemCountForItem(itemId))}
      disabled={amount === 0}
    >
      -
    </ProductStyles.MinusButton>
    <ProductStyles.QuantityIndicator
      data-testid="indicator"
      size="3"
      readonly
      disabled
      value={amount}
    />
    <ProductStyles.PlusButton
      data-testid="plus"
      onClick={() => setQuantity('increase', maxAmount, minAmount, getCartItemCountForItem(itemId))}
      disabled={(getCartItemCountForItem(itemId) + minAmount + amount) > maxAmount}
    >
      +
    </ProductStyles.PlusButton>
  </ProductStyles.QuantityContainer>
);

const ProductItem: React.FC<IProductItemProps> = ({ productDetail }) => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState(0);
  const { setCartData, getCartItemCountForItem } = useCartData();
  const {
    name,
    availableAmount,
    minOrderAmount,
    price,
    id,
    img,
  } = productDetail;

  const addToCart = (item) => {
    setCartData(item.id, amount);
    setAmount(0);
  };
  const buyNow = (item) => {
    setCartData(item.id, amount);
    setAmount(0);
    navigate('/cart');
  };

  const setQuantity = (action: string, max: number, min: number, inCart: number) => {
    setAmount((prev) => {
      if (action === 'decrease') {
        if (prev === 0) {
          return 0;
        }
        return prev - min;
      } if (action === 'increase') {
        if (prev >= max) {
          return prev;
        }
        if ((prev + min + inCart) <= max){
          return prev + min;
        }
      }
      return prev;
    });
  };

  const availableStock = availableAmount - getCartItemCountForItem(id);
  return (
    <ProductStyles.CardContainer>
      <ProductStyles.CardDetails>
        <ProductStyles.ImageSection>
          <ProductStyles.Image
            object-fit="contain"
            data-testid="productImage"
            src={img}
            alt="Aldi"
            availableStock={availableStock}
          />
        </ProductStyles.ImageSection>
        <ProductStyles.Stock>
          Stock:
          {availableStock}
        </ProductStyles.Stock>
        <ProductStyles.ContentBox availableStock={availableStock}>
          <ProductStyles.MinimumOrderLabel
            availableStock={availableStock}
          >
            {' '}
            Minimum Qty.
            <ProductStyles.MinimumOrder>
              {minOrderAmount}
            </ProductStyles.MinimumOrder>
          </ProductStyles.MinimumOrderLabel>
          <ProductStyles.NamePriceContainer>
            <ProductStyles.ItemName>{name}</ProductStyles.ItemName>
            <ProductStyles.Price>
              &#8364;
              {price}
            </ProductStyles.Price>
          </ProductStyles.NamePriceContainer>
          <ProductStyles.AddContainer>
            <ProductStyles.BuyContainer>
              <QuantityToggle
                setQuantity={setQuantity}
                getCartItemCountForItem={getCartItemCountForItem}
                amount={amount}
                minAmount={minOrderAmount}
                maxAmount={availableAmount}
                itemId={id}
              />
              <ProductStyles.ButtonContainer>
                <ProductStyles.AddToCartButton
                  data-testid="addtoCart"
                  disabled={amount === 0}
                  onClick={() => addToCart(productDetail)}
                >
                  Add to cart
                </ProductStyles.AddToCartButton>
                <ProductStyles.BuyButton
                  data-testid="buynow"
                  disabled={amount === 0}
                  onClick={() => buyNow(productDetail)}
                >
                  Buy Now
                </ProductStyles.BuyButton>
              </ProductStyles.ButtonContainer>
            </ProductStyles.BuyContainer>
          </ProductStyles.AddContainer>
        </ProductStyles.ContentBox>
      </ProductStyles.CardDetails>
    </ProductStyles.CardContainer>
  );
};

export default ProductItem;
