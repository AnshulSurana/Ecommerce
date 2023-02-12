import React from 'react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect'
import { screen, render, fireEvent } from '@testing-library/react';

import BodyComponent from '../../../src/Components/Common/BodyComponent';

jest.mock('../../../src/Components/Common/ThemeToggler', () =>
    jest.fn(() => <div data-testid="mockedThemeToggler" />)
);

describe('Body component', () => {
    it('Should render Body Component and verify the texts visible', () => {
        render(<BodyComponent />);
        expect(screen.getByText('WELCOME TO ALDI STORE')).toBeVisible();
        expect(screen.getByText('View Products')).toBeVisible();
        expect(screen.getByTestId('screenBackground')).toBeInTheDocument();
    });
});