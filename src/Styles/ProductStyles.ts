import styled from 'styled-components';

import {mediaQueries} from '../utils/utility';

export const ItemsContainer = styled.div`
    margin: 1em;
    display: grid;
    grid-gap: 1rem;
    width: 100%;
    justify-content: center;

    ${mediaQueries('sm')`
        grid-template-columns: repeat(2, 0.25fr)
    `}
    ${mediaQueries('md')`
        grid-template-columns: repeat(3, 0.25fr)
    `}
`;

export const ItemcCard = styled.div`
    background-color: dodgerblue;
    color: white;
    padding: 1rem;
    height: 10rem;
`;

export const CardContainer = styled.div`
    display: flex;
`;

export const ImageSection = styled.div`
    width: 100%;
    height: 100%;
    transition: .5s;
`;
export const Image = styled.img`
    width: 100%;
    height: auto;
    aspect-ratio: 9/9;
    filter: ${(props) => (props.availableStock <= 0 ? 'blur(2px)' : 'blur(0px)')};
`;
export const ContentBox = styled.div`
    bottom: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    background-color: ${({ theme }) => theme.cardContent};
    transition: 1s;
`;

export const ItemName = styled.div`
    text-align: left;
    font-weight: 800;
    letter-spacing: 1px;
    color:${({ theme }) => theme.cardContentText};
    margin: 1em;
    line-height: 2;
`;

export const NamePriceContainer = styled.div`
    display: flex;
    flex-flow: row;
    justify-content: space-between;
`;

export const Price = styled.div`
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 1px;
    margin: 1em;
    color: ${({ theme }) => theme.priceColor};
`;

export const CardDetails = styled.div`
    display: flex;
    min-width: 8em;
    min-height: 25em;
    background: #fff;
    border-radius: 20px;
    overflow: hidden;
    flex-flow: column;
    box-shadow: 10px 10px 10px #000;

    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    &:hover {
        ${ImageSection}: {
            top: 0%;
            transform: translateY(-25%);
        }
        ${ContentBox}: {
            height: 210px;
        }
    }

    &:hover:before {
        clip-path: circle(300px at 80% -20%);
    }
`;

export const QuantityContainer = styled.div`
    display: flex;
    align-self: center;
    margin: 10px;
`;
export const MinusButton = styled.button`
    border:none;
    border-radius:10px;
    width: 20px;
`;
export const QuantityIndicator = styled.input`
    text-align: center; 
    border-radius: 10px;
    border-color: black;
`;
export const PlusButton = styled.button`
    border:none;
    border-radius:10px;
    width: 20px;
`;
export const MinimumOrderLabel = styled.label`
    font-size: 12px;
    font-weight: 200;
    letter-spacing: 1px;
    align-self: flex-start;
    margin: 0px 10px 0px 10px;
    color:${({ theme }) => theme.cardContentText};
    text-decoration: ${(props) => (props.availableStock <= 0 ? 'line-through' : 'none')};
`;
export const MinimumOrder = styled.label`
    font-size: 12px;
    font-weight: 700;
    margin-left: 2px;
    letter-spacing: 1px;
    align-self: flex-start;
    color: ${({ theme }) => theme.cardContentText};
`;
export const AddContainer = styled.div`
    display: flex;
    flex-flow: column;
`;

export const BuyContainer = styled.div`
    display: flex;
    margin-bottom: 5px;
    flex-flow: column;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-evenly;

`;

export const BuyButton = styled.button`
    border: none;
    padding: 7px;
    font-size: 10px;
    position: relative;
    background: transparent;
    color: #fff;
    background-color: #B33771;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.7s;
    overflow: hidden;
    border-radius: 15px;

    &:disabled {
        background: #84817a;
        border: #84817a;
    }
`;
export const AddToCartButton = styled.button`
    border: none;
    padding: 7px;
    font-size: 10px;
    position: relative;
    background: transparent;
    color: #fff;
    background-color: #009432;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.7s;
    overflow: hidden;
    border-radius: 15px;

    &:disabled {
        background: #84817a;
        border: #84817a;
    }
`;

export const Stock = styled.label`
      font-size: 12px;
      color: black;
      margin-left: 10px;
`;
