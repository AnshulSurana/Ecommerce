import React from 'react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect'
import { screen, render } from '@testing-library/react';

import ProductPage from '../../src/Components/ProductPage';

jest.mock('../../src/Components/Common/HeaderComponent', () =>
    jest.fn(() => <div data-testid="mockedHeaderComponentComponent" />)
);

jest.mock('../../src/Components/Common/BodyComponent', () =>
    jest.fn(() => <div data-testid="mockedBodyComponent" />)
);

jest.mock('../../src/Components/Common/ProductsComponent', () =>
    jest.fn(() => <div data-testid="mockedProductsComponent" />)
);

describe('Product Page component', () => {
    it('Should render Product Page Component', () => {
        render(<ProductPage 
            theme={'light'}
            themeToggler={jest.fn}
        />);
        expect(screen.getByTestId('Container')).toBeInTheDocument();
    });
});