import React from 'react'
import styled from 'styled-components'
import colors from 'tokens/colors'
import spacings from 'tokens/spacings'


const Wrapper = styled.div`
  z-index: 5;
  cursor: pointer;
  transition: left 500ms cubic-bezier(0.6, 0.05, 0.28, 0.91);
  position: relative;
  align-self: center;
  display: none;

   @media (max-width: 850px) {
    display: block;
   }

`;

const Bar = styled.div`
	width: ${spacings.$layout2};
	height: ${spacings.$layout1xxsm};
	margin-bottom: ${spacings.$layout1xsm};
	background-color: ${colors.$chocolate};
	transition: transform 500ms cubic-bezier(0.6, 0.05, 0.28, 0.91),
	opacity 500ms,
	box-shadow 250ms,
	background-color 500ms;

	${({ top, sidebar }) =>
    top &&
    sidebar &&
    `
		transform: translateY(6px) rotate(-135deg);
	`}
	${({ mid, sidebar }) =>
    mid &&
    sidebar &&
    `
			transform: scale(0);
	`}
	${({ bottom, sidebar }) =>
    bottom &&
    sidebar &&
    `
			transform: translateY(-6px) rotate(-45deg);
	`}
`;



const Hamburger = ({ sidebar, toggle }) => (
		<Wrapper sidebar={sidebar} onClick={() => toggle(!sidebar)}>
			<Bar top sidebar={sidebar} />
			<Bar mid sidebar={sidebar} />
			<Bar bottom sidebar={sidebar} />
		</Wrapper>

)

export default Hamburger
