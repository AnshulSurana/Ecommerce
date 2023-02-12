import React from 'react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect'
import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import CartComponent from '../../../src/Components/Common/CartComponent';

jest.mock('../../../src/Components/Common/ThemeToggler', () =>
    jest.fn(() => <div data-testid="mockedThemeToggler" />)
);

const renderWithRouter = (ui, { route = '/products' } = {}) => {
    window.history.pushState({}, 'Test page', route)
    return {
        ...render(ui, {wrapper: BrowserRouter}),
    }
}
describe('CartComponent component', () => {
    it('Should render CartComponent Component and verify the texts visible', () => {
        renderWithRouter(<CartComponent />);
        expect(screen.getByText('Cart is Empty')).toBeVisible();
        expect(screen.getByText('Go to Catalog')).toBeVisible();
        expect(screen.getByText('SUBTOTAL')).toBeVisible();
        expect(screen.getByText('€0')).toBeVisible();
    });
    it('Should render cart Component and verify the back button  are clickable', async () => {
        renderWithRouter(<CartComponent />);
        expect(screen.getByTestId('backButton')).toBeInTheDocument();
        const button = screen.getByTestId('backButton');
        fireEvent.click(button);
    });
});