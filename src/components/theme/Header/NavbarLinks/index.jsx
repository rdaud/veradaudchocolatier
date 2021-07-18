import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled,{ keyframes } from 'styled-components';
import colors from 'tokens/colors';
import spacings from 'tokens/spacings';
import Link from 'gatsby-plugin-transition-link';


const grow = keyframes`
  0% {
	width: 0;
  }
  100% {
	width: 100%;
	
  }
`

const StyledLink = styled(Link)`
	opacity: 1;
	font-family: 'Sarabun', sans;
	letter-spacing: 0.025rem;
	font-weight: 300;
	display: block;
	color: ${colors.$chocolate} !important;
	
	&:before {
		content: '';
		height: 1px;
		width: 0;
		top: 1.6rem;
		background: ${colors.$chocolate};
		position: absolute;
	}

	&:hover:before {
		animation: .7s ${grow} ease-out forwards;
	}
`

const LinkWrapper = styled.div`
	width: auto;
	position: relative;
`

const StyledSpan = styled.span`
	width: 1.4rem;
	background: tranparent;
	position: relative;
	font-size: 0.5rem;
	color: ${colors.$chocolate};
	text-align: center;
	margin-top: 0.16rem;

`


const Wrapper = styled.div`

	margin: ${spacings.$layout2} 0;
	display: flex;

	@media (min-width: 850px) {
        margin: ${spacings.$layout3} 0;
	}


	${({ desktop }) =>
		desktop
		? `
			@media (min-width: 850px) {
				right: 0;
				display: flex;

			}
			display: none;
			
			a {
				// margin-right: ${spacings.$layout2};
				font-size: 1rem;
				&:last-child {
						margin-right: unset;
				}		
			}
			span:last-of-type {
				display: none;
			}
				
		`
		: `
			a {
				padding: ${spacings.$layout4} 0;
				border-bottom: 1px solid rgba(0,0,0,.1);
				font-size: 2rem;
			}
			width: 90%;
			margin: 0 auto;
			flex-direction: column;
			&:first-child {
				display: flex;
			}

			&:nth-child(1) {
				margin-top: ${spacings.$layout5};
			}
		`
	}
	
`

const NavbarLinks = ({ desktop }) => {
	const data = useStaticQuery(graphql`
		query {
			categoria: allContentfulCategoria {
			edges {
				node {
				titulo
				slug
				id
				}
			}
			}
		}
	`)
	return (
		<Wrapper desktop={desktop}>
			{/* <Link to="/">Orçamentos</Link> */}
			{data.categoria.edges.map(({node})=>{
					return (
						<>
						<LinkWrapper>
						<StyledLink key={node.id} to={`/${node.slug}`}>{node.titulo}
						</StyledLink>
						</LinkWrapper>
						<StyledSpan>•</StyledSpan>
						</>
					)
				})
			}
		</Wrapper>
	)
}



export default NavbarLinks