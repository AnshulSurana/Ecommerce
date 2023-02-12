import { IProducts, GetProductsResponse } from '../constants';

const url = 'https://cas5-0-urlprotect.trendmicro.com:443/wis/clicktime/v1/query?url=https%3a%2f%2f63c10327716562671870f959.mockapi.io%2fproducts&umid=e8a47ce1-7fac-4cf6-8b41-1440c16d6fe5&auth=3bd1ed0ea25e030aebac2180cda48b2d7a1ccc30-f96d54fc4b3f7a33fc52d1c22a921041d0abdb1d';

const getProductDetails = async (): Promise<GetProductsResponse> => {
  try {
    const resp = await fetch(`${url}`);
    const data: Array<IProducts> = await resp.json();

    return {
      isOk: true,
      data,
      error: null,
    };
  } catch (e) {
    return {
      isOk: false,
      data: null,
      error: (e as Error).message,
    };
  }
};

export default getProductDetails;
