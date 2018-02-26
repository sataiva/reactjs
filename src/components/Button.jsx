import React, { Component } from 'react'
import styled from 'styled-components'
export default styled.button`
  border: 1px solid ${props => props.theme.brand};
  border-radius: 3px;
  padding: 25px;
  font-size: 2rem;
  color: ${props => props.theme.brand};
  display: inline-block;
  transition: all .3s ease;
  
  &:hover {
    color: white;
    background: ${props => props.theme.brand};
  }
`