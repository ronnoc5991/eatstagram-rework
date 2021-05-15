import { createGlobalStyle } from 'styled-components';
import { size } from 'polished';

import MontserratBlackWoff from './assets/fonts/Montserrat/Montserrat-Black.woff';
import MontserratBlackWoff2 from './assets/fonts/Montserrat/Montserrat-Black.woff2';

import MontserratBlackItalicWoff from './assets/fonts/Montserrat/Montserrat-BlackItalic.woff';
import MontserratBlackItalicWoff2 from './assets/fonts/Montserrat/Montserrat-BlackItalic.woff2';

import MontserratBoldWoff from './assets/fonts/Montserrat/Montserrat-Bold.woff';
import MontserratBoldWoff2 from './assets/fonts/Montserrat/Montserrat-Bold.woff2';

import MontserratBoldItalicWoff from './assets/fonts/Montserrat/Montserrat-BoldItalic.woff';
import MontserratBoldItalicWoff2 from './assets/fonts/Montserrat/Montserrat-BoldItalic.woff2';

import MontserratExtraBoldWoff from './assets/fonts/Montserrat/Montserrat-ExtraBold.woff';
import MontserratExtraBoldWoff2 from './assets/fonts/Montserrat/Montserrat-ExtraBold.woff2';

import MontserratExtraBoldItalicWoff from './assets/fonts/Montserrat/Montserrat-ExtraBoldItalic.woff';
import MontserratExtraBoldItalicWoff2 from './assets/fonts/Montserrat/Montserrat-ExtraBoldItalic.woff2';

import MontserratExtraLightWoff from './assets/fonts/Montserrat/Montserrat-ExtraLight.woff';
import MontserratExtraLightWoff2 from './assets/fonts/Montserrat/Montserrat-ExtraLight.woff2';

import MontserratExtraLightItalicWoff from './assets/fonts/Montserrat/Montserrat-ExtraLightItalic.woff';
import MontserratExtraLightItalicWoff2 from './assets/fonts/Montserrat/Montserrat-ExtraLightItalic.woff2';

import MontserratItalicWoff from './assets/fonts/Montserrat/Montserrat-Italic.woff';
import MontserratItalicWoff2 from './assets/fonts/Montserrat/Montserrat-Italic.woff2';

import MontserratLightWoff from './assets/fonts/Montserrat/Montserrat-Light.woff';
import MontserratLightWoff2 from './assets/fonts/Montserrat/Montserrat-Light.woff2';

import MontserratLightItalicWoff from './assets/fonts/Montserrat/Montserrat-LightItalic.woff';
import MontserratLightItalicWoff2 from './assets/fonts/Montserrat/Montserrat-LightItalic.woff2';

import MontserratMediumWoff from './assets/fonts/Montserrat/Montserrat-Medium.woff';
import MontserratMediumWoff2 from './assets/fonts/Montserrat/Montserrat-Medium.woff2';

import MontserratMediumItalicWoff from './assets/fonts/Montserrat/Montserrat-MediumItalic.woff';
import MontserratMediumItalicWoff2 from './assets/fonts/Montserrat/Montserrat-MediumItalic.woff2';

import MontserratRegularWoff from './assets/fonts/Montserrat/Montserrat-Regular.woff';
import MontserratRegularWoff2 from './assets/fonts/Montserrat/Montserrat-Regular.woff2';

import MontserratSemiBoldWoff from './assets/fonts/Montserrat/Montserrat-SemiBold.woff';
import MontserratSemiBoldWoff2 from './assets/fonts/Montserrat/Montserrat-SemiBold.woff2';

import MontserratSemiBoldItalicWoff from './assets/fonts/Montserrat/Montserrat-SemiBoldItalic.woff';
import MontserratSemiBoldItalicWoff2 from './assets/fonts/Montserrat/Montserrat-SemiBoldItalic.woff2';

import MontserratThinWoff from './assets/fonts/Montserrat/Montserrat-Thin.woff';
import MontserratThinWoff2 from './assets/fonts/Montserrat/Montserrat-Thin.woff2';

import MontserratThinItalicWoff from './assets/fonts/Montserrat/Montserrat-ThinItalic.woff';
import MontserratThinItalicWoff2 from './assets/fonts/Montserrat/Montserrat-ThinItalic.woff2';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
    background: ${(p) => p.theme.color.white};
    color: ${(p) => p.theme.color.black};

    ${size('100vh', '100%')};
    margin: 0;
    padding: 0;

     // uncomment for "dark mode" support
    /* @media screen and (prefers-color-scheme: dark) {
      background: ${(p) => p.theme.color.black};
      color: ${(p) => p.theme.color.white};
    }  */
  }

  #root {
    ${size('100%', '100%')};
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    font-family: 'Montserrat';
  }

  * {
    font-size: 62.5%;
    box-sizing: border-box;
    --default-border-radius: 0.5rem;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratBoldWoff2}) format('woff2'),
        url(${MontserratBoldWoff}) format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Montserrat';
    src: url(${MontserratBlackItalicWoff2}) format('woff2'),
        url(${MontserratBlackItalicWoff}) format('woff');
    font-weight: 900;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'Montserrat';
    src: url(${MontserratBlackWoff2}) format('woff2'),
        url(${MontserratBlackWoff}) format('woff');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Montserrat';
    src: url(${MontserratExtraBoldWoff2}) format('woff2'),
        url(${MontserratExtraBoldWoff}) format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Montserrat';
    src: url(${MontserratExtraBoldItalicWoff2}) format('woff2'),
        url(${MontserratExtraBoldItalicWoff}) format('woff');
    font-weight: bold;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'Montserrat';
    src: url(${MontserratBoldItalicWoff2}) format('woff2'),
        url(${MontserratBoldItalicWoff}) format('woff');
    font-weight: bold;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'Montserrat';
    src: url(${MontserratExtraLightWoff2}) format('woff2'),
        url(${MontserratExtraLightWoff}) format('woff');
    font-weight: 200;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Montserrat';
    src: url(${MontserratExtraLightItalicWoff2}) format('woff2'),
        url(${MontserratExtraLightItalicWoff}) format('woff');
    font-weight: 200;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'Montserrat';
    src: url(${MontserratLightItalicWoff2}) format('woff2'),
        url(${MontserratLightItalicWoff}) format('woff');
    font-weight: 300;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'Montserrat';
    src: url(${MontserratLightWoff2}) format('woff2'),
        url(${MontserratLightWoff}) format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Montserrat';
    src: url(${MontserratItalicWoff2}) format('woff2'),
        url(${MontserratItalicWoff}) format('woff');
    font-weight: normal;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'Montserrat';
    src: url(${MontserratMediumWoff2}) format('woff2'),
        url(${MontserratMediumWoff}) format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Montserrat';
    src: url(${MontserratSemiBoldItalicWoff2}) format('woff2'),
        url(${MontserratSemiBoldItalicWoff}) format('woff');
    font-weight: 600;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'Montserrat';
    src: url(${MontserratSemiBoldWoff2}) format('woff2'),
        url(${MontserratSemiBoldWoff}) format('woff');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Montserrat';
    src: url(${MontserratRegularWoff2}) format('woff2'),
        url(${MontserratRegularWoff}) format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Montserrat';
    src: url(${MontserratMediumItalicWoff2}) format('woff2'),
        url(${MontserratMediumItalicWoff}) format('woff');
    font-weight: 500;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'Montserrat';
    src: url(${MontserratThinWoff2}) format('woff2'),
        url(${MontserratThinWoff}) format('woff');
    font-weight: 100;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Montserrat';
    src: url(${MontserratThinItalicWoff2}) format('woff2'),
        url(${MontserratThinItalicWoff}) format('woff');
    font-weight: 100;
    font-style: italic;
    font-display: swap;
}
`;

export default GlobalStyle;
