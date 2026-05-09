import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family:
            "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu",
            "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        color: ${theme.colors.fontPrimary};
        line-height: 1.2;
    }

    code {
        font-family:
            source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
    }

    a {
        text-decoration: none;
        margin: 0;
        padding: 0;
        cursor: pointer;
    }

    ul {
        list-style: none;
    }

    /* button {
        background-color: unset;
        border: none;
    } */

    header,
    section,
    footer {
        background-color: ${theme.colors.primaryBg};
    }

    section {
        padding: 80px 0;
    }
`;
