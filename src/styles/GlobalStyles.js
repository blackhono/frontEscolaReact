import styled, { createGlobalStyle } from 'styled-components'
/* eslint-disable */
import {
  primaryColor,
  primaryDarkColor,
  primaryShadowBoxColor,
  msgColor
} from '../config/colors'
/* eslint-disable */
//

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}

body{
  font-family: sans-serif;
  background-color: ${primaryDarkColor};
}

html, border-style, #root{
  height: 100%;
}

button{
  cursor: pointer;
  background-color: ${msgColor.infoColor};
  border: none;
  border-radius: 3px;
  font-weight: bold;
  color: #fff;
  padding: 5px 5px;
}

a{
  text-decoration: none;
}

ul{
  list-style: none
}
`

export const Container = styled.section`
  max-width: 360px;
  background-color: #fff;
  margin: 30px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: -4px 6px 8px rgba(77, 136, 147, 0.6);
`
