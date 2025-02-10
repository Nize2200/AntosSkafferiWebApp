import { createGlobalStyle } from 'styled-components';

const KapakanaFont = createGlobalStyle`
    /* Local font import using @font-face */
    @font-face {
        font-family: 'MyCustomFont';
        src: url('/public/Fonts/Kapakana[wght].ttf');
        font-weight: normal;
        font-style: normal;
    }

    body {
        font-family: 'MyCustomFont', sans-serif;
    }
`;

export default KapakanaFont;
