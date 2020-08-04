import React, { useContext } from 'react'
import styled from 'styled-components'
import {Helmet} from 'react-helmet'

import { EqualOffenseContext, INCREMENT, DECREMENT, NEXT, OPEN_MODAL } from '../../store'
import Names from '../../components/Names/Names'
import Scores from '../../components/Scores/Scores'
import Stats from '../../components/Stats/Stats'
import Button from '../../components/Button/Button'
import InningBox from '../../components/InningBox/InningBox'
import Modal from '../../components/Modal/Modal'
import Help from '../../components/Help/Help'

const EqualOffenseStyled = styled.main`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100%;
width: 100%;
color: white;
text-shadow: 1px 1px 5px black;
`

const ButtonDiv = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 10rem;
padding: 0px;
flex-wrap: wrap;
`

const EqualOffense = () => {
    const [equalOffenseState, equalOffenseDispatch] = useContext(EqualOffenseContext)
    const { players, scores1, scores2, newGameModalOpen, player1, inning, ballsRemaining, gameOver } = equalOffenseState

    const handleButton = (e, type) => {
        e.preventDefault()
        equalOffenseDispatch({ type })
    }

    return (
        <>
            <Modal open={newGameModalOpen} dispatch={equalOffenseDispatch} />
            <EqualOffenseStyled>
            <Helmet>
            <title>Pool Scorer | EO</title>
            </Helmet>
                <Names state={equalOffenseState} dispatch={equalOffenseDispatch} />
                <Scores score1={scores1?.reduce((a, b) => a + b)} score2={scores2?.reduce((a, b) => a + b)} players={players} player1={player1} />
                <Stats stat={inning[player1 ? 0 : 1] === 11 ? 10 : inning[player1 ? 0 : 1]} statLabel={"Inning"} />
                <Stats stat={!gameOver ? player1 ? scores1[inning[0] - 1] : scores2[inning[1] - 1] : 0} statLabel={"Inning Score"} />
                <Stats stat={ballsRemaining} statLabel={'Balls Remaining'}  />
                <ButtonDiv>
                    <Button width={'3rem'} handler={(e) => handleButton(e, DECREMENT)} text={'-'} />
                    <Button width={'3rem'} handler={(e) => handleButton(e, INCREMENT)} text={'+'}/>
                    <Button handler={(e) => handleButton(e, NEXT)} text={players === 1 ? 'Missed/Next' : 'Next Player'}  />
                    <Button handler={(e) => handleButton(e, OPEN_MODAL)} text={'New Game'} />
                </ButtonDiv>
                <InningBox top={'3.5rem'} players={players} scores={[scores1, scores2]} />
            </EqualOffenseStyled>
            <Help page={'eo'} />
        </>
    )
}

export default EqualOffense
