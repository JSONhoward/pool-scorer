import React from 'react'
import styled from 'styled-components'

const StyledP = styled.p`
font-size: 2rem;
`

const HelpModalStyled = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
display: ${props => props.open ? 'flex' : 'none'};
align-items: center;
justify-content: center;
height: 300px;
width: 300px;
color: white;
background-color: rgb(0,0,0,.9);
border-radius: 10px;

${StyledP}:first-child {
    text-decoration: underline;
}
`



const HelpModal = ({open}) => {
    return (
        <HelpModalStyled open={open}>
        <StyledP>Help</StyledP>
            
        </HelpModalStyled>
    )
}

export default HelpModal
