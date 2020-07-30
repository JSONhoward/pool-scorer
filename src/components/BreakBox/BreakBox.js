import React from 'react'
import styled from 'styled-components'
import {FaLevelDownAlt } from 'react-icons/fa'

const BreakBoxStyled = styled.div`
display: flex;
opacity: ${props => props.gameOver ? '0' : '1'};
justify-content: space-between;
width: 220px;
font-size: 2rem;
`

const ArrowLeft = styled.div`
display: flex;
visibility: ${props => props.player1 ? 'visible' : 'hidden'};
align-items: flex-end;
justify-content: center;
flex: 1;
transform: rotateX(180deg) rotateY(180deg);

`

const ArrowRight = styled.div`
display: flex;
visibility: ${props => props.player1 ? 'visible' : 'hidden'};
align-items: flex-end;
justify-content: center;
flex: 1;
transform: rotateX(180deg);
`

const BreakBox = ({player1, gameOver}) => {
    return (
        <BreakBoxStyled gameOver={gameOver}>
            <ArrowLeft player1={player1}><FaLevelDownAlt /></ArrowLeft>
            <p>Break</p>
            <ArrowRight player1={!player1}><FaLevelDownAlt /></ArrowRight>
        </BreakBoxStyled>
    )
}

export default BreakBox
