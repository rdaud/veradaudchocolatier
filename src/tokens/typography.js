import { css } from "styled-components";
import colors from "tokens/colors";


export default {
    $body1: css`
        margin: 0 0 1.5rem 0;
        padding: 0;
        line-height: 1.5;
        font-size: 1rem;
        max-width: var(--measure);
        font-family: 'Sarabun', Sans;
        color: ${colors.$textonormal};
    `,
    $body2: css`
        line-height: 1.5;
        font-size: 0.825rem;
        font-family: 'Sarabun', Sans;
    `,
    $subtitle1: css`
        line-height: 1.5;
        font-size: 1.25rem;
        font-family: 'Sarabun', Sans;
    `,

    $heading1: css`
    line-height: 2rem;
    font-size: 2rem;
    font-family: 'Sarabun', Sans;
`
}