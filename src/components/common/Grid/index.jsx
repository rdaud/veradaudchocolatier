import styled from 'styled-components'
import spacings from 'tokens/spacings'

export const Grid = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 8fr;
    gap: ${spacings.$layout2};
    margin: 0 ${spacings.$layout3};
`

