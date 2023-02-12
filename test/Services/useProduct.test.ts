import getProductDetails from '../../src/Services/getProducts';

// @ts-ignore
global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({ data: [] }),
    })
);
  
describe('get product service tests', () => {
    it('Should be respond with correct data', async () => {
        expect(getProductDetails).toBeInstanceOf(Function);
        const response = getProductDetails();
        expect(response).toBeInstanceOf(Promise);
        const res = await getProductDetails();
        expect(res).toStrictEqual({"data": {"data": []}, "error": null, "isOk": true});
    });
});