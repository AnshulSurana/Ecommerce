import React from 'react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect'
import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import ProductItem from '../../../src/Components/Common/ProductItem';

jest.mock('../../../src/Components/Common/ThemeToggler', () =>
    jest.fn(() => <div data-testid="mockedThemeToggler" />)
);

const renderWithRouter = (ui, { route = '/products' } = {}) => {
    window.history.pushState({}, 'Test page', route)
    return {
        ...render(ui, {wrapper: BrowserRouter}),
    }
}
describe('ProductItem component', () => {
    it('Should render ProductItem Component and verify the texts visible', () => {
        const productDetail = {
            id: '12',
            availableAmount: 74,
            minOrderAmount: 4,
            price: 0.6,
            img: "",
            name: "bolts"
        }
        renderWithRouter(<ProductItem productDetail={productDetail} />);
        expect(screen.getByText('Stock:74')).toBeVisible();
        expect(screen.getByText('Minimum Qty.')).toBeVisible();
        expect(screen.getByText('bolts')).toBeVisible();
        expect(screen.getByText('€0.6')).toBeVisible();
        expect(screen.getByText('Add to cart')).toBeVisible();
        expect(screen.getByText('Buy Now')).toBeVisible();
        expect(screen.getByTestId('productImage')).toBeInTheDocument();
    });
    it('Should render ProductItem Component and verify the plus minus buttons are clickable', async () => {
        const productDetail = {
            id: '12',
            availableAmount: 74,
            minOrderAmount: 4,
            price: 0.6,
            img: "",
            name: "bolts"
        }
        renderWithRouter(<ProductItem productDetail={productDetail} />);
        expect(screen.getByTestId('addtoCart')).toBeVisible();
        expect(screen.getByTestId('QuantityContainer')).toBeInTheDocument();
        expect(screen.getByTestId('minus')).toBeInTheDocument();
        expect(screen.getByTestId('plus')).toBeInTheDocument();
        expect(screen.getByTestId('indicator')).toBeInTheDocument();
        const button = screen.getByTestId('addtoCart');
        const plus = screen.getByTestId('plus');
        const minus = screen.getByTestId('minus');
        fireEvent.click(plus);
        fireEvent.click(plus);
        await waitFor(() => {
            expect(screen.getByTestId('indicator')).toHaveDisplayValue('8');
        });
        fireEvent.click(minus);
        await waitFor(() => {
            expect(screen.getByTestId('indicator')).toHaveDisplayValue('4');
        });
        fireEvent.click(minus);
        await waitFor(() => {
            expect(screen.getByTestId('indicator')).toHaveDisplayValue('0');
        });
    });
    it('Should render ProductItem Component and verify the add to cart  and buy button are clickable', async () => {
        const productDetail = {
            id: '12',
            availableAmount: 74,
            minOrderAmount: 4,
            price: 0.6,
            img: "",
            name: "bolts"
        }
        renderWithRouter(<ProductItem productDetail={productDetail} />);
        expect(screen.getByTestId('addtoCart')).toBeInTheDocument();
        expect(screen.getByTestId('QuantityContainer')).toBeInTheDocument();
        expect(screen.getByTestId('minus')).toBeInTheDocument();
        expect(screen.getByTestId('plus')).toBeInTheDocument();
        expect(screen.getByTestId('indicator')).toBeInTheDocument();
        const button = screen.getByTestId('addtoCart');
        const buyButton = screen.getByTestId('buynow');
        const plus = screen.getByTestId('plus');
        const minus = screen.getByTestId('minus');
        fireEvent.click(plus);
        fireEvent.click(plus);
        await waitFor(() => {
            expect(screen.getByTestId('indicator')).toHaveDisplayValue('8');
        });
        fireEvent.click(button);
        await waitFor(() => {
            expect(screen.getByTestId('indicator')).toHaveDisplayValue('0');
        });
        fireEvent.click(plus);
        fireEvent.click(buyButton);
        await waitFor(() => {
            expect(screen.getByTestId('indicator')).toHaveDisplayValue('0');
        });
    });
});