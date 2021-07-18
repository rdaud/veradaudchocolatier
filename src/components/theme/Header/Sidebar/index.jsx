import React from 'react'
import styled from 'styled-components';
import NavbarLinks from '../NavbarLinks'

const Wrapper = styled.div`
  position: fixed;
  z-index: 1;
  overflow: auto;
  top: 0px;
  right: -275px;
  opacity: 0;
  height: 100%;
  background-color: white;
  transition: all 350ms cubic-bezier(0.6, 0.05, 0.28, 0.91);
  ${({ active }) =>
    active &&
    `
			width: 80%;
			right: 0px;
      opacity: 1;
      z-index: 2;

			@media (max-width: 600px) {
				width: 100%;
			}
	`}
`;



const Sidebar = ({ sidebar, toggle }) => (
	<Wrapper active={sidebar} onClick={toggle}>
		<NavbarLinks />
	</Wrapper>
)

export default Sidebar



