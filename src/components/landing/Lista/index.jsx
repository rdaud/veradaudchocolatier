import React, { useState } from 'react';
import styled from "styled-components";
import { Container }  from 'components/common/Container';
import colors from "tokens/colors";
import { useStaticQuery, graphql } from 'gatsby';



const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  margin-top: 100vh;
  top: 100%;
  width: 100vw;
  display: flex;
  background: ${colors.$creme};
  height: auto;
  align-content: center;
`;

const InnerWrapper = styled.div`
  background: transparent;
  display: flex;
  margin-top: 10rem;
  height: auto;
  flex-direction: column;
`

const ListItemWrapper = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  margin-top: 1.5rem;
  border-bottom: 1px solid;
  border-color: ${props => props.isVisible === true ? colors.$bordo :colors.$cinza };
  color: ${colors.$textonormal};

  &:hover {
    cursor: pointer;
  }

`

const ListItemDetail = styled.div`

  width: 100%;
  display: flex;
  flex-direction: row;
  display: ${props => props.isVisible === true ? "" : "none"};

  @media (max-width: 850px) {
    flex-direction: column;
  }

`

const Descricao = styled.p`
  align-self: flex-start;
  flex-grow: 2;
`

const PrecoDoDoce = styled.p`
  align-self: flex-end;
  text-align: right;
  flex-grow: 1;
  @media (max-width: 850px) {
    align-self: flex-start;
  }
`

const ListItemTitle = styled.h2`
  width: 100%;
  display: flex;
  align-self: flex-start;
  color: ${props => props.isVisible === true ? colors.$bordo : "" };

`

const ListItemButton = styled.div`
  width: 24px;
  height: 24px;
  
  position: absolute;
  right: 0;  
  display: ${props => props.isVisible === true ? "" : "none"};

`


const ListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  place-content: center;
  place-items: flex-start;
  text-align: left;
  margin-bottom: 10rem;
`



export const ListItem = (props) => {

  const [visibility,setVisibility] = useState(false);


  const toggleVisibility = () => { 
    setVisibility(!visibility);
  }

  const [button,setButton] = useState(false);


  const toggleButton = () => { 
    setButton(!button);
  }

  // useEffect(() => {
  //   const a = document.getElementById('h');
  //   a.addEventListener(mou)
  // }, []) // this diff is necessary



return (
    <ListItemWrapper onMouseEnter={toggleButton} onMouseLeave={toggleButton} type="button" onClick={toggleVisibility} isVisible={button}>
      <ListItemTitle isVisible={button}>
        {props.titulo}
        <ListItemButton isVisible={button}>
          { visibility === true ?
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<rect x="0.5" y="12.5" width="1" height="24" transform="rotate(-90 0.5 12.5)" fill={colors.$bordo}/>
<rect x="24" y="11.5" width="1" height="24" transform="rotate(90 24 11.5)" fill={colors.$bordo}/>
</g>
<defs>
<clipPath id="clip0">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
 : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<rect x="12" width="1" height="24" fill={colors.$bordo}/>
<rect x="24" y="11.5" width="1" height="24" transform="rotate(90 24 11.5)" fill={colors.$bordo}/>
</g>
<defs>
<clipPath id="clip0">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>}
        

        </ListItemButton>
      </ListItemTitle>
     

      <ListItemDetail isVisible={visibility}>
        <Descricao>
        {props.descricao}
        </Descricao>
        <PrecoDoDoce>{props.preco}</PrecoDoDoce>
      </ListItemDetail>
    </ListItemWrapper>
    )

}


export const Lista = () => {


  const data = useStaticQuery(graphql`
  query MyQuery {
    allContentfulCategoria {
      edges {
        node {
          titulo
          produtos {
            id
            titulo
            descricao
            preco
          }
        }
      }
    }
  }
`)






    return (
        <Wrapper>
            <InnerWrapper as={Container}>

            { data.allContentfulCategoria.edges.map((item,index) => {
                
                return ( item.node.produtos !== null ?
                  <ListWrapper key={index}>
                  <h1>{item.node.titulo}</h1>
                  { item.node.produtos.map((doce,index) => {
                    return (
                      <ListItem key={index} titulo={doce.titulo} descricao={doce.descricao} preco={doce.preco}/>  
                    )
                  }) }                    
                  </ListWrapper>
                  : null )
                })

             }
             
            </InnerWrapper>
        </Wrapper>
    )
}


