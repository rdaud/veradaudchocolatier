import React from 'react';
import styled from 'styled-components';

import { Container }  from 'components/common/Container';
import { Logo } from 'utils';



const Wrapper = styled.div`
	width: 100%;
	position: fixed;
	background: transparent;
	z-index: 9999;
`

const ContentWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	a {
		color: #212121;
	}
`




export const Header = () => {


	
	
	return (
		<Wrapper id="h">
			<ContentWrapper as={Container}>
				<Logo />
			
			</ContentWrapper>
		</Wrapper>
	)
}

