import React from 'react';

import { Link } from 'react-scroll';
import * as Styles from '../../Styles/BodyStyles';

const Background = () => (
  <Styles.ScreenBackground data-testid="screenBackground">
    <Styles.PolynomialOne />
    <Styles.PolynomialTwo />
    <Styles.PolynomialThree />
    <Styles.PolynomialFour />
    <Styles.PolynomialFive />
  </Styles.ScreenBackground>
);

const BodyComponent: React.FC = () => (
  <Styles.StyleComponent>
    <Styles.FlexContainerParent>
      <Styles.FlexComponentContainer>
        <Styles.WelcomeText>WELCOME TO ALDI STORE</Styles.WelcomeText>
        <Link to="about" spy smooth>
          <Styles.FormButtonComponent>View Products</Styles.FormButtonComponent>
        </Link>
      </Styles.FlexComponentContainer>
      <Background />
    </Styles.FlexContainerParent>
  </Styles.StyleComponent>
);

export default BodyComponent;
