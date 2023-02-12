import React, { useContext } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { CartCheck } from '@styled-icons/bootstrap/CartCheck';

import ThemeToggler from './ThemeToggler';
import { CurrentUserContext } from '../../App';

const HeaderContainer = styled.div`
    background-color: ${({ theme }) => theme.headerBackground};
    font-family: "Times New Roman", Times, serif;
    color: ${({ theme }) => theme.titleTextColor};
    font-size: 30px;
    font-weight: 800;
    top: 0%;
    right: 0%;
    left: 0%;
    bottom: auto;
    position: fixed;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 10vh;
    z-index: 2;
`;

const HeaderTitle = styled.div`
    border:none;
    cursor: pointer;
`;

const SideHeader = styled.div`
    display: flex;
`;

const Badge = styled.div`
  font-size: 12px;
  color: red;
`;

const CartIconContainer = styled.div`
  margin-left: 40px;
  display: flex;
  cursor: pointer;
`;

const HeaderComponent = ({ theme, themeToggler }) => {
  const navigate = useNavigate();
  const { cartItemCount } = useContext(CurrentUserContext);

  const handleClick = () => {
    navigate('/cart');
  };

  const handleMainClick = () => {
    navigate('/products');
  };

  return (
    <HeaderContainer>
      <HeaderTitle
        data-testid="headerTitle"
        onClick={handleMainClick}
      >
        ALDI STORE
      </HeaderTitle>
      <SideHeader>
        <ThemeToggler theme={theme} toggleTheme={themeToggler} />
        <CartIconContainer data-testid="cartIcon">
          <CartCheck
            data-testid="cartCheckIcon"
            size="30"
            onClick={handleClick}
          />
          <Badge>{cartItemCount}</Badge>
        </CartIconContainer>
      </SideHeader>
    </HeaderContainer>
  );
};

export default HeaderComponent;
