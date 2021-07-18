import React from 'react';
import styled from "styled-components";
import { Logo } from 'utils';




const InnerWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top:0;
  left: 0;
  z-index: 0;
`
const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  bottom: 4rem;
`
const LogoWrapper = styled.div`

  width: 300px;
  @media (max-width: 650px) {
    width: 65vw;
  }
  position: absolute;
  
`


export const Intro = () => {



    return (
        <Wrapper>
              <InnerWrapper>
                <LogoWrapper>
                <Logo
                  width={"100%"}
                />
                </LogoWrapper>
              </InnerWrapper> 
        </Wrapper>
    )
}


