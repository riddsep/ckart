import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root{
    /* colors primary */
    --clr-primary-5:hsla(25, 95.00%, 53.10%, 0.05);
    --clr-primary-15:hsla(25, 95.00%, 53.10%, 0.15);
    --clr-primary-25:hsla(25, 95.00%, 53.10%, 0.25);
    --clr-primary-50:hsla(25, 95.00%, 53.10%, 0.5);
    --clr-primary-75:hsla(25, 95.00%, 53.10%, 0.75);
    --clr-primary-90:hsla(25, 95.00%, 53.10%, 0.90);
    --clr-primary-100:hsl(25, 95.00%, 53.10%);

    /* colors secondary */
    --clr-secondary-5:hsl(221, 83.20%, 53.30%, 0,05);
    --clr-secondary-15:hsl(221, 83.20%, 53.30%, 0.15);
    --clr-secondary-25:hsl(221, 83.20%, 53.30%, 0.25);
    --clr-secondary-50:hsl(221, 83.20%, 53.30%, 0.5);
    --clr-secondary-75:hsl(221, 83.20%, 53.30%, 0.75);
    --clr-secondary-90:hsl(221, 83.20%, 53.30%, 0.90);
    --clr-secondary-100:hsl(221, 83.20%, 53.30%);

    /* colors dark */
    --clr-dark-5:hsla(214, 100.00%, 12.70%, 0.05);
    --clr-dark-15:hsla(214, 100.00%, 12.70%, 0.15);
    --clr-dark-25:hsla(214, 100.00%, 12.70%, 0.25);
    --clr-dark-50:hsla(214, 100.00%, 12.70%, 0.5);
    --clr-dark-75:hsla(214, 100.00%, 12.70%, 0.75);
    --clr-dark-90:hsla(214, 100.00%, 12.70%, 0.9);
    --clr-dark-100:hsl(214, 100.00%, 12.70%);

    /* colors white */
    --clr-white-5: hsla(0, 0.00%, 100.00%, 0.05);
    --clr-white-15:hsla(0, 0.00%, 100.00%, 0.15);
    --clr-white-25:hsla(0, 0.00%, 100.00%, 0.25);
    --clr-white-50:hsla(0, 0.00%, 100.00%, 0.5);
    --clr-white-75:hsla(0, 0.00%, 100.00%, 0.75);
    --clr-white-90:hsla(0, 0.00%, 100.00%, 0.9);
    --clr-white-100:hsl(0, 0.00%, 100.00%);

    /* colors error */
    --clr-error-5:hsla(4, 86.00%, 58.00%, 0.05);
    --clr-error-15: hsla(4, 86.00%, 58.00%, 0.15);
    --clr-error-25: hsla(4, 86.00%, 58.00%, 0.25);
    --clr-error-50: hsla(4, 86.00%, 58.00%, 0.5);
    --clr-error-75: hsla(4, 86.00%, 58.00%, 0.75);
    --clr-error-90: hsla(4, 86.00%, 58.00%, 0.9);
    --clr-error-100: hsl(4, 86.00%, 58.00%);

    /* colors warning */
    --clr-warning-5:hsla(34, 93.70%, 50.20%,0.05);
    --clr-warning-15: hsla(34, 93.70%, 50.20%,0.15);
    --clr-warning-25: hsla(34, 93.70%, 50.20%, 0.25);
    --clr-warning-50: hsla(34, 93.70%, 50.20%, 0.5);
    --clr-warning-75: hsla(34, 93.70%, 50.20%, 0.75);
    --clr-warning-90: hsla(34, 93.70%, 50.20%, 0.9);
    --clr-warning-100:hsl(34, 93.70%, 50.20%);

    /* colors success */
    --clr-success-5:hsla(152, 82.10%, 39.40%, 0.05);
    --clr-success-15: hsla(152, 82.10%, 39.40%, 0.15);
    --clr-success-25: hsla(152, 82.10%, 39.40%, 0.25);
    --clr-success-50: hsla(152, 82.10%, 39.40%, 0.5);
    --clr-success-75: hsla(152, 82.10%, 39.40%, 0.75);
    --clr-success-90: hsla(152, 82.10%, 39.40%, 0.9);
    --clr-success-100:hsl(152, 82.10%, 39.40%);


    /* shadow */
    --shadow-xs: 0 1px 2px hsla(220, 42.90%, 11.00%, 0.05);
    --shadow-sm: 0 1px 3px hsla(220, 42.90%, 11.00%, 0.1), 0 1px 2px hsla(220, 42.90%, 11.00%, 0.06);
    --shadow-md: 0 4px 8px -2px hsla(220, 42.90%, 11.00%, 0.1), 0 2px 4px -2px hsla(220, 42.90%, 11.00%, 0.06);
    --shadow-lg: 0 12px 16px -4px hsla(220, 42.90%, 11.00%, 0.1), 0 4px 6px -2px hsla(220, 42.90%, 11.00%, 0.05);
    --shadow-xl: 0 20px 24px -4px hsla(220, 42.90%, 11.00%, 0.1), 0 8px 8px -4px hsla(220, 42.90%, 11.00%, 0.04);
    --shadow-2xl: 0 24px 48px -12px hsla(220, 42.90%, 11.00%, 0.25);
    --shadow-3xl: 0 4px 40px hsla(220, 42.90%, 11.00%, 0.25);


    /* blur */
    --blur-sm: blur(8px)
    --blur-md: blur(16px)
    --blur-lg: blur(24px)
    --blur-xl: blur(40px)

}


/* reset css */
*, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  
}
html,body, #root{
  height:100%
}
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  font-family: 'Dm Sans', sans-serif;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

p {
  text-wrap: pretty;
}
h1, h2, h3, h4, h5, h6 {
  text-wrap: balance;
}

#root, #__next {
  isolation: isolate;
}

`;
export default GlobalStyles;
