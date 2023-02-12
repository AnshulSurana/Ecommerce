import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
  transition: background-color 0.2s, opacity 0.2s;
  border-bottom: 2px solid black;
  background-color: ${({ theme }) => theme.cartBackground};

  &::before {
    content: '';
    width: 90%;
    height: 2px;
    background-color: rgba(0, 0, 0, 0.2);
    position: absolute;
    top: 0;
    left: 5%;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-flow: column;
  vertical-align: middle;
  width: 50%;
  padding: 2%;
  justify-content: center;
`;

export const Title = styled.p`
  color: #000;
  margin: 0;
  font-weight: 500;
`;

export const Desc = styled.p`
  color: #5b5a5e;
  margin: 0;
`;

export const Price = styled.div`
  display: flex;
  vertical-align: middle;
  color: ${({ theme }) => theme.outputText};
  text-align: right;
  width: 25%;
  justify-content: flex-end;
  align-items: center;
`;

export const DeleteButton = styled.button`
    cursor: pointer;
    border: 0;
    background-color: transparent;
    width: 10%;

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.outputText};
  }

  &:hover {
    background-position-x: -17px;
  }
`;

export const Image = styled.img`
    display: flex;
    vertical-align: middle;
    width: 5%;
    height: auto;
    aspect-ratio: 1/1;
    padding: 2%;
    border-right: 2px solid black;
`;
