import React from 'react'
import styled from 'styled-components'

const ButtonStyled = styled.button`
height: 3rem;
margin: 5px;
width: ${props => props.width || '12.5rem'};
font-family: 'Cabin', sans-serif;
font-size: ${props => props.font || '2rem'};
border-radius: 5px;
box-shadow: 1px 1px 5px black;
border: none;
background-color: white;
cursor: pointer;
`

const Button = ({text, handler, width, font}) => {
    return (
        <ButtonStyled font={font} onClick={handler} width={width}>
            {text}
        </ButtonStyled>
    )
}

export default Button
