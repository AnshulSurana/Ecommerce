import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    background: transparent;
    margin-top: 10vh;
    z-index: 1;
    background-color: ${({ theme }) => theme.cartBackground};
    box-sizing: border-box;
    transition: right 0.2s;
`;

export const CartContent = styled.div`
  height: 100%;
  width: 100%;
  z-index: 1;
  margin: 50px;
    z-index: 1;
    box-shadow: 0px 10px 17px #5c5696;

  /* MAC scrollbar para desktop*/
  @media screen and (min-width: 640px) {
    &::-webkit-scrollbar {
      -webkit-appearance: none;
      width: 10px;
      background-color: rgba(0, 0, 0, 0.2);
      padding: 10px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 4px;
      background-color: #0c0b10;
    }
  }
`;


export const Sub = styled.div`
    color: #1e272e;
    vertical-align: middle;
    display: inline-block;
    line-height: 1.4;
    margin: 1em;
    font-size: 21px;
`;

export const SubPriceValue = styled.span`
  color: black;
  font-size: 22px;
  margin: 1em;
  letter-spacing: 2px;
`;

export const SubPriceInstallment = styled.p`
  margin: 0;
`;

export const CartFooter = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-flow: column;
  bottom: 0;
  z-index: 2;
  background-color: rgba(255,145,164,1.00);
  min-height: 100vh;

  &::before {
    content: '';
    width: 100%;
    height: 20px;
    display: block;
    position: absolute;
    top: -20px;
    left: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.2), transparent);
  }
`;

export const ProductsData = styled.div`
  border-top: 2px solid black;
  justify-content: center;
  margin: 25px;
`;

export const EmptyDataContainer = styled.div`
  border-top: 2px solid black;
  justify-content: center;
  display: flex;
`;

export const EmptyCart = styled.div`
  font-size: 30px;
  color: #000;
`;

export const SideContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const FormButtonComponent = styled.button`
    justify-content: center;
    background: ${({ theme }) => theme.formButtonComponentColor};
    font-size: 20px;
    padding: 16px 20px;
    border-radius: 26px;
    border: 1px solid #D4D3E8;
    text-transform: uppercase;
    font-weight: 700;
    display: flex;
    align-items: center;
    color: #f5f6fa;
    box-shadow: 0px 2px 2px #5C5696;
    cursor: pointer;
    transition: .2s;
    margin-top: 20px;

    &:hover {
        border-color: #6A679E;
        outline: none;
        color: #FFF;
        background: ${({ theme }) => theme.formButtonHoverColor}
    }
`;
