import React from "react";
import styled from "styled-components";
import colors from "tokens/colors";
import { Container }  from 'components/common/Container';




const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  width: 100vw;
  background: ${colors.$creme};
`;

const FooterWrapper = styled.div`

  display: flex;
  flex-direction: row;
  place-content: center;
  justify-content: flex-start;
  padding-top: 4rem;
  padding-bottom: 8rem;
  background: ${colors.$creme};

  @media (max-width: 650px) {
    flex-direction: column;
    margin-top: 4rem;
    margin-bottom: 4rem;
  }


`





const Contato = styled.div`
  margin-right: 6rem;
  @media (max-width: 650px) {
    margin-bottom: 3rem;
  }

  & > h3 {
    margin-bottom: 1rem;
  }

`

const Sociais = styled.div`
& > h3 {
  margin-bottom: 1rem;
}
`




export const Footer = () => {

    return (
        <Wrapper>
          <FooterWrapper as={Container}>

            <Contato>
              <h3 style={{"color": colors.$chocolate}}>Contato para encomendas</h3>
              <p style={{"lineHeight": "3rem"}}>(11) 97283-3624 <br/>
              vera.daud@yahoo.com.br</p>
            </Contato>
            <Sociais>
              <h3 style={{"color": colors.$chocolate}}>Redes sociais</h3>
              <p style={{"lineHeight": "3rem"}}>Facebook <br/>
              Instagram</p>
            </Sociais>
             
          </FooterWrapper>
        </Wrapper>
    )

}
