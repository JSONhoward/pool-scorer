import React from 'react'
import styled from 'styled-components'

const ButtonStyled = styled.button`
display: grid;
place-items: center;
height: ${props => props.height || '1.5rem'};
margin: 5px;
width: ${props => props.width || '6.25rem'};
font-family: 'Cabin', sans-serif;
font-size: ${props => props.font || '1rem'};
border-radius: 5px;
box-shadow: 1px 1px 5px black;
border: none;
background-color: white;
cursor: pointer;
color: black;
`

const Button = ({text, handler, width, font, height}) => {
    return (
        <ButtonStyled height={height} font={font} onClick={handler} width={width}>
            {text}
        </ButtonStyled>
    )
}

export default Button
