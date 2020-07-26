import React from 'react'
import styled from 'styled-components'

const ButtonStyled = styled.button`
height: 3rem;
margin: 5px;
width: ${props => props.width || '12.5rem'};
font-size: 2rem;
border-radius: 5px;
box-shadow: 1px 1px 5px black;
border: none;
background-color: white;
`

const Button = ({text, handler, width}) => {
    return (
        <ButtonStyled onClick={handler} width={width}>
            {text}
        </ButtonStyled>
    )
}

export default Button
