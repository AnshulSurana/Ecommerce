import React, { createContext, useMemo, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './Styles/GlobalStyles';
import { lightTheme, darkTheme } from './Styles/ThemeStyles';
import useDarkMode from './Hooks/useDarkMode';
import ProductPage from './Components/ProductPage';
import CartPage from './Components/CartPage';
import { IContext } from './constants';
import useCartData from './Hooks/useCartData';

export const CurrentUserContext = createContext<IContext>({
  cartItemCount: 0, setCartItem: () => {},
});

const App = () => {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const { getCartItemTotalCount } = useCartData();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  const [cartItemCount, setCartItem] = useState(getCartItemTotalCount());
  const value = useMemo(
    () => ({ cartItemCount, setCartItem }),
    [cartItemCount],
  );

  if (!mountedComponent) return (<div data-testid="notMounted" />);
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <CurrentUserContext.Provider value={value}>
        <Router>
          <Routes>
            <Route path="/products" element={<ProductPage theme={theme} themeToggler={themeToggler} />} />
            <Route path="/cart" element={<CartPage theme={theme} themeToggler={themeToggler} />} />
          </Routes>
        </Router>
      </CurrentUserContext.Provider>
    </ThemeProvider>
  );
};

export default App;
