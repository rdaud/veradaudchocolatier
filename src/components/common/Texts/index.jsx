import React from "react";
import styled from "styled-components";
import colors from "tokens/colors";


const TextHolder = styled.div`
  position: relative;
  text-align: ${props => props.left && "left"};
  color: ${props => props.color || colors.$chocolate};
  min-width: 300px;

  small {
    display: block;
    color: ${colors.$chocolate};
  }

  h1 {
    line-height: 1.2;
    margin-top: 1rem;
  }

`;


export const SectionTitle = (props) => (
    <TextHolder {...props} >
        <small>{props.sectionName}</small>
        <h1>{props.sectionTitle}</h1>
    </TextHolder>
)