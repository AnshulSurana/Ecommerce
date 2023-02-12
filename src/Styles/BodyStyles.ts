import styled, { keyframes } from 'styled-components';

export const StyleComponent = styled.div`
    display: block;
    height: 100vh;
    background-color: ${({ theme }) => theme.bodyBackgroundColor};
`;
export const FlexComponentContainer = styled.div`
    display: flex;
    width: 80vw;
    align-items: center;
    background: transparent;
    margin-top: 10vh;
    z-index: 1;
    flex-flow: column;
`;

export const ScreenBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    -webkit-clip-path: inset(0 0 0 0);
    clip-path: inset(0 0 0 0);    
`;

export const PolynomialOne = styled.div`
    z-index: -1;
    transform: rotate(45deg);
    position: absolute; 
    height: 520px;
    width: 520px;
    background: linear-gradient(145deg,${({ theme }) => theme.bodyPolynomialShade}, ${({ theme }) => theme.bodyPolynomialMain});    
    top: 24vh;
    right: 84vw;    
    border-radius: 0 72px 0 0;
`;
export const PolynomialTwo = styled.div`
    z-index: -1;
    position: absolute;
    height: 540px;
    width: 190px;
    background: linear-gradient(270deg,${({ theme }) => theme.bodyPolynomialShade}, ${({ theme }) => theme.bodyPolynomialMain});
    top: 5vh;
    right: 0vw;    
    border-radius: 32px;
`;

export const PolynomialThree = styled.div`
    z-index: -1;
    position: absolute;
    height: 400px;
    width: 200px;
    background: linear-gradient(270deg,${({ theme }) => theme.bodyPolynomialShade}, ${({ theme }) => theme.bodyPolynomialMain});
    top: 75vh;
    right: 10vw;    
    border-radius: 60px;
`;

export const PolynomialFour = styled.div`
    z-index: -1;
    transform: rotate(12deg);
    position: absolute;
    height: 400px;
    width: 400px;
    background: linear-gradient(245deg,${({ theme }) => theme.bodyPolynomialShade}, ${({ theme }) => theme.bodyPolynomialMain});    
    top: 24vh;
    right: 24vw;    
    border-radius: 60px;
    transition: background-color 1000ms linear;
`;

export const PolynomialFive = styled.div`
    z-index: -1;
    transform: rotate(12deg);
    position: absolute;
    height: 200px;
    width: 200px;
    background: linear-gradient(245deg,${({ theme }) => theme.bodyPolynomialShade}, ${({ theme }) => theme.bodyPolynomialMain});    
    top: 18vh;
    right: 60vw;    
    border-radius: 200px;
    transition: background-color 1000ms linear;
`;

export const FlexContainerParent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const FormInput = styled.input`
    display: block;
    border-radius: 4px;
    padding: 10px;
    margin-top: 8px;
    font-size: 16px;
    font-weight: 300;

    &:focus {
        outline-style: none;
        border: 1px solid transparent;
    }
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

    &:hover {
        border-color: #6A679E;
        outline: none;
        color: #FFF;
        background: ${({ theme }) => theme.formButtonHoverColor}
    }
`;

export const WelcomeText = styled.p`
  font-size: 60px;
  font-family: serif;
  font-weight: 500;
`;
