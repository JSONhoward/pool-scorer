import React, { useContext } from 'react'
import styled from 'styled-components'
import {Helmet} from 'react-helmet'

import { MatchContext, WIN, LOSS, OPEN_MODAL } from '../../store'
import Names from '../../components/Names/Names'
import Scores from '../../components/Scores/Scores'
import SetBox from '../../components/SetBox/SetBox'
import Button from '../../components/Button/Button'
import MatchModal from '../../components/Modal/MatchModal'
import BreakBox from '../../components/BreakBox/BreakBox'

const MatchStyled = styled.main`
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
height: 100%;
width: 100%;
color: white;
text-shadow: 1px 1px 5px black;
padding-top: 4rem;
`

const ButtonDiv = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 10rem;
padding: 0px;
flex-wrap: wrap;
`

const Match = () => {
    const [matchState, matchDispatch] = useContext(MatchContext)
    const { newGameModalOpen, scores1, scores2, players, player1, raceTo, gameOver, playerName1, playerName2 } = matchState

    const handleButton = (e, type) => {
        e.preventDefault()
        matchDispatch({ type })
    }

    return (
        <>
            <MatchModal player1={playerName1} player2={playerName2} open={newGameModalOpen} dispatch={matchDispatch} />
            <MatchStyled>
            <Helmet>
            <title>Pool Scorer | VS.</title>
            </Helmet>
                <Names state={matchState} dispatch={matchDispatch} gameOver={gameOver} />
                <Scores gameOver={gameOver} raceTo={raceTo} match={true} score1={scores1[0] !== null ? scores1.reduce((a, b) => a + b) : 0} score2={scores2[0] !== null ? scores2.reduce((a, b) => a + b) : 0} players={players} player1={player1} />
                <BreakBox gameOver={gameOver} player1={player1} />
                <ButtonDiv>
                <Button width={'3rem'} handler={(e) => handleButton(e, WIN)} text={'Win'} />
                <Button width={'3rem'} handler={(e) => handleButton(e, LOSS)} text={'Loss'} />
                <Button handler={(e) => handleButton(e, OPEN_MODAL)} text={'New Game'} />
                </ButtonDiv>
                <SetBox state={matchState} />
            </MatchStyled>
        </>
    )
}

export default Match
