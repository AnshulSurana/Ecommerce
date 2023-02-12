import React from 'react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect'
import { screen, render } from '@testing-library/react';

import CartPage from '../../src/Components/CartPage';

jest.mock('../../src/Components/Common/HeaderComponent', () =>
    jest.fn(() => <div data-testid="mockedHeaderComponentComponent" />)
);

jest.mock('../../src/Components/Common/CartComponent', () =>
    jest.fn(() => <div data-testid="mockedCartComponent" />)
);

describe('Cart Page component', () => {
    it('Should render Cart Page Component', () => {
        render(<CartPage 
            theme={'light'}
            themeToggler={jest.fn}
        />);
        expect(screen.getByTestId('cartContainer')).toBeInTheDocument();
    });
});