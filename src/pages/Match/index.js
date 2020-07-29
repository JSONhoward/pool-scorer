import React, { useContext } from 'react'
import styled from 'styled-components'
import Names from '../../components/Names/Names'
import Scores from '../../components/Scores/Scores'
import { MatchContext, WIN, LOSS, OPEN_MODAL } from '../../store'
import SetBox from '../../components/SetBox/SetBox'
import Button from '../../components/Button/Button'
import MatchModal from '../../components/Modal/MatchModal'

const MatchStyled = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
height: 100%;
width: 100%;
color: white;
text-shadow: 1px 1px 5px black;
padding-top: 2rem;
`

const ButtonDiv = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 15rem;
padding: 0px;
flex-wrap: wrap;
`

const BreakDiv = styled.div`
display: flex;
justify-content: space-between;
width: 220px;
font-size: 2rem;
`

const BreakP = styled.p`
visibility: ${props => props.break ? 'visible' : 'hidden'};
`

const Match = () => {
    const [matchState, matchDispatch] = useContext(MatchContext)
    const { newGameModalOpen, scores1, scores2, players, player1, raceTo } = matchState

    const handleButton = (e, type) => {
        e.preventDefault()
        matchDispatch({ type })
    }

    return (
        <>
            <MatchModal open={newGameModalOpen} dispatch={matchDispatch} />
            <MatchStyled>
                <Names state={matchState} dispatch={matchDispatch} />
                <Scores raceTo={raceTo} match={true} score1={scores1[0] !== null ? scores1.reduce((a, b) => a + b) : 0} score2={scores2[0] !== null ? scores2.reduce((a, b) => a + b) : 0} players={players} player1={player1} />
                <BreakDiv>
                <BreakP break={player1}>Break</BreakP>
                <BreakP break={!player1}>Break</BreakP>
                </BreakDiv>
                <ButtonDiv>
                <Button width={'6rem'} handler={(e) => handleButton(e, WIN)} text={'Win'} />
                <Button width={'6rem'} handler={(e) => handleButton(e, LOSS)} text={'Loss'} />
                <Button handler={(e) => handleButton(e, OPEN_MODAL)} text={'New Game'} />
                </ButtonDiv>
                <SetBox state={matchState} />
            </MatchStyled>
        </>
    )
}

export default Match
