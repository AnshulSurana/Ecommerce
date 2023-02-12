import React from "react";
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect'
import { screen, render, act, waitFor } from '@testing-library/react';

import ProductComponent from '../../../src/Components/Common/ProductsComponent';

// @ts-ignore
global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({ productData: [{id: 1, name: 'bolt'}] }),
    })
);

jest.mock('../../../src/Components/Common/ThemeToggler', () =>
    jest.fn(() => <div data-testid="mockedThemeToggler" />)
);

describe('Product component', () => {
    it('Should render Product Component and verify the elements visible', () => {
        render(<ProductComponent />);
        expect(screen.getByTestId('aboutSection')).toBeInTheDocument();
    });
});