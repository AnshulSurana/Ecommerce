import React from 'react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react';
import App from '../src/App';

jest.mock('../src/Components/ProductPage', () =>
    jest.fn(() => <div data-testid="mockedProductPageComponent" />)
);

jest.mock('../src/Components/CartPage', () =>
    jest.fn(() => <div data-testid="mockedCartPageComponent" />)
);

jest.mock('../src/Components/CartPage', () =>
    jest.fn(() => <div data-testid="mockedCartPageComponent" />)
);

const renderWithRouter = (ui, { route = '/products' } = {}) => {
    window.history.pushState({}, 'Test page', route)
    return {
        ...render(ui),
    }
}
describe('App component', () => {
    it('Should render Product Page', () => {
        renderWithRouter(<App />);

        expect(screen.getByTestId('mockedProductPageComponent')).toBeInTheDocument();
    });
    it('Should render Cart Page', () => {
        renderWithRouter(<App />, { route: '/cart' });

        expect(screen.getByTestId('mockedCartPageComponent')).toBeInTheDocument();
    });
});