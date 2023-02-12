import React from 'react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect'
import { screen, render, fireEvent, waitFor } from '@testing-library/react';

import HeaderComponent from '../../../src/components/Common/HeaderComponent';
import { BrowserRouter } from 'react-router-dom';

jest.mock('../../../src/Components/Common/ThemeToggler', () =>
    jest.fn(() => <div data-testid="mockedThemeToggler" />)
);

jest.mock('../../../src/Components/Common/CartComponent', () =>
    jest.fn(() => <div data-testid="mockedCartComponent" />)
);


const renderWithRouter = (ui, { route = '/products' } = {}) => {
    window.history.pushState({}, 'Test page', route)
    return {
        ...render(ui, {wrapper: BrowserRouter}),
    }
}
describe('Header component', () => {
    it('Should render Header Component', () => {
        renderWithRouter(<HeaderComponent 
            theme={'light'}
            themeToggler={jest.fn}
        />);
        expect(screen.getByTestId('headerTitle')).toBeInTheDocument();
        expect(screen.getByTestId('cartIcon')).toBeInTheDocument();
        expect(screen.getByTestId('mockedThemeToggler')).toBeInTheDocument();
        expect(screen.getByText('ALDI STORE')).toBeVisible();
    });
    it('Should render cart on click of icon', async () => {
        renderWithRouter(<HeaderComponent 
            theme={'light'}
            themeToggler={jest.fn}
        />);
        expect(screen.getByTestId('cartCheckIcon')).toBeInTheDocument();
        const icon = screen.getByTestId('cartCheckIcon');
        fireEvent.click(icon, {});
        await waitFor(() => {
            expect(screen.getByTestId('mockedThemeToggler')).toBeInTheDocument();
        });
    });
    
});