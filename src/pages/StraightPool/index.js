import React, { useContext } from 'react'
import styled from 'styled-components'

import { INCREMENT, DECREMENT, FOUL, OPEN_MODAL, NEXT } from '../../store'
import { StraightPoolContext } from '../../store'
import Modal from '../../components/Modal/Modal'
import Names from '../../components/Names/Names'
import Scores from '../../components/Scores/Scores'
import Stats from '../../components/Stats/Stats'
import Button from '../../components/Button/Button'

const StraightPoolStyled = styled.div`
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

const StraightPool = () => {
    const [straightPoolState, straightPoolDispatch] = useContext(StraightPoolContext)
    const { players, currentRun, ballsRemaining, runs1, runs2, fouls1, fouls2, player1, score1, score2, newGameModalOpen } = straightPoolState

    const handleButton = (e, type) => {
        e.preventDefault()
        straightPoolDispatch({ type })
    }

    return (
        <>
            <Modal open={newGameModalOpen} dispatch={straightPoolDispatch} />
            <StraightPoolStyled>
                <Names state={straightPoolState} dispatch={straightPoolDispatch} />
                <Scores score1={score1} score2={score2} players={players} player1={player1} />
                <Stats stat={ballsRemaining} statLabel={'Balls Remaining'} />
                <Stats stat={currentRun} statLabel={'Current Run'} />
                {
                    players === 1 ?
                        (
                            <>
                                <Stats stat={runs1.length === 1 ? currentRun : Math.max(...runs1)} statLabel={'High Run'} />
                                <Stats stat={fouls1} statLabel={'On Foul'} />
                            </>
                        )
                        :
                        (
                            <>
                                <Stats stat={player1 ? runs1.length === 1 ? currentRun : Math.max(...runs1) : runs2.length === 1 ? currentRun : Math.max(...runs2)} statLabel={'High Run'} />
                                <Stats stat={player1 ? fouls1 : fouls2} statLabel={'On Foul'} />
                            </>
                        )
                }
                <ButtonDiv>
                    <Button width={'6rem'} handler={(e) => handleButton(e, DECREMENT)} text={'-'} />
                    <Button width={'6rem'} handler={(e) => handleButton(e, INCREMENT)} text={'+'} />
                    <Button handler={(e) => handleButton(e, NEXT)} text={players === 1 ? 'Missed' : 'Next Player'} />
                    <Button handler={(e) => handleButton(e, FOUL)} text={'Foul'} />
                    <Button handler={(e) => handleButton(e,OPEN_MODAL)} text={'New Game'} />
                </ButtonDiv>
            </StraightPoolStyled>
        </>
    )
}

export default StraightPool
