import { act, renderHook } from '@testing-library/react';

import useCartData from '../../src/Hooks/useCartData';

describe('useCartData hook tests', () => {
    it('Should be callable', () => {
        expect(useCartData).toBeInstanceOf(Function);
    });
    it('Should return an object', () => {
        const { result } = renderHook(() => useCartData())
        expect(result.current).toBeInstanceOf(Object);
    });
    it('Should be able to call removeCartProduct', () => {
        const { result } = renderHook(() => useCartData())
        act(async () => {
            await result.current.removeCartProduct(1);
        })
    });
    it('Should be able to call getCartProducts', () => {
        const { result } = renderHook(() => useCartData())
        act(() => {
            result.current?.getCartProducts({});
        })
    });
    it('Should be able to call getCartItemTotalCount', () => {
        const { result } = renderHook(() => useCartData())
        act(() => {
            result.current?.getCartItemTotalCount();
        })
    });
    it('Should be able to call getCartItemCountForItem', () => {
        const { result } = renderHook(() => useCartData())
        act(() => {
            result.current?.getCartItemCountForItem(1);
        })
    });
    it('Should be able to call setCartData', () => {
        const { result } = renderHook(() => useCartData())
        act(() => {
            result.current?.setCartData('1', 4);
        })
    });
});