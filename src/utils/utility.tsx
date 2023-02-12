
/**
   * 
   * @param quantity 
   * @param price 
   * @returns round value to 2 decimals.
   */
export const calculatePrice = (price) => Math.round(price * 100) / 100;

export const breakpoints = {
    sm: 16,
    md: 24,
    lg: 45,
    xl: 60,
  };
  
export const mediaQueries = (key: keyof typeof breakpoints) => (style: TemplateStringsArray | String) => `@media (min-width: ${breakpoints[key]}em) { ${style} }`;