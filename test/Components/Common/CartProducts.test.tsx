import React from 'react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect'
import { screen, render, fireEvent, waitFor } from '@testing-library/react';

import CartProducts from '../../../src/Components/Common/CartProducts';

jest.mock('../../../src/Components/Common/ThemeToggler', () =>
    jest.fn(() => <div data-testid="mockedThemeToggler" />)
);

describe('Cart Product component', () => {
    it('Should render Cart Product and verify the texts visible', () => {
        const product = {
            id: '12',
            name: 'bolts',
            img: 'string',
            availableAmount: 12,
            minOrderAmount: 2,
            price: 2,
            quantity: 4,
            totalPrice: 8,
        }
        const handleClick = jest.fn();
        render(<CartProducts product={product} handleClick={handleClick} />);
        expect(screen.getByText('Quantity: 4')).toBeVisible();
        expect(screen.getByText('bolts')).toBeVisible();
    });
    it('Should render Cart Product and verify the delete icon click visible', async () => {
        const product = {
            id: '12',
            name: 'bolts',
            img: 'string',
            availableAmount: 12,
            minOrderAmount: 2,
            price: 2,
            quantity: 4,
            totalPrice: 8,
        }
        const handleClick = jest.fn();
        render(<CartProducts product={product} handleClick={handleClick} />);
        expect(screen.getByTestId('deleteButton')).toBeInTheDocument();
        const button = screen.getByTestId('deleteButton'); 
        fireEvent.click(button);
    });
    // it('Should render Body Component and verify the input fields are writtable', () => {
    //     render(<BodyComponent />);
    //     expect(screen.getByTestId('nameInput')).toBeVisible();
    //     expect(screen.getByTestId('domainInput')).toBeVisible();
    //     const nameInput = screen.getByTestId('nameInput');
    //     const domainInput = screen.getByTestId('domainInput');
    //     fireEvent.change(nameInput, {
    //         target: { value: "Anshul Surana" }
    //     });
    //     expect(nameInput).toHaveValue('Anshul Surana');
    //     fireEvent.change(domainInput, {
    //         target: { value: "domain.com" }
    //     });
    //     expect(domainInput).toHaveValue('domain.com');
    // });
    // it('Should render Body Component and verify the generate button are clickable', () => {
    //     render(<BodyComponent />);
    //     expect(screen.getByTestId('generateButton')).toBeVisible();
    //     const button = screen.getByTestId('generateButton');
    //     fireEvent.click(button);
    //     expect(screen.getByText('ENTER VALID fullName')).toBeVisible();
    //     expect(screen.getByText('ENTER VALID domain')).toBeVisible();
    // });
    // it('Should test and verify the generate button after input values', () => {
    //     render(<BodyComponent />);
    //     expect(screen.getByTestId('nameInput')).toBeVisible();
    //     expect(screen.getByTestId('domainInput')).toBeVisible();
    //     const nameInput = screen.getByTestId('nameInput');
    //     const domainInput = screen.getByTestId('domainInput');
    //     fireEvent.change(nameInput, {
    //         target: { value: "Anshul Surana" }
    //     });
    //     expect(nameInput).toHaveValue('Anshul Surana');
    //     fireEvent.change(domainInput, {
    //         target: { value: "domain.com" }
    //     });
    //     expect(screen.getByTestId('form')).toBeVisible();
    //     const form = screen.getByTestId('form');
    //     fireEvent.submit(form);
    // });
});