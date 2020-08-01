import React, { useContext } from 'react'
import styled from 'styled-components'
import {Helmet} from 'react-helmet'

import { FargoContext, INCREMENT, DECREMENT, OPEN_MODAL, NEXT } from '../../store'
import Modal from '../../components/Modal/Modal'
import Names from '../../components/Names/Names'
import Scores from '../../components/Scores/Scores'
import Stats from '../../components/Stats/Stats'
import InningBox from '../../components/InningBox/InningBox'
import Button from '../../components/Button/Button'
import Help from '../../components/Help/Help'

const FargoStyled = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100%;
width: 100%;
color: white;
text-shadow: 1px 1px 5px black;
padding-top: 5rem;
padding-bottom: 3.5rem;
`

const ButtonDiv = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 10rem;
padding: 0px;
flex-wrap: wrap;
`

const Fargo = () => {
    const [fargoState, fargoDispatch] = useContext(FargoContext)
    const { inning, player1, players, scores1, scores2, newGameModalOpen, ballsRemaining } = fargoState

    const handleButton = (e, type) => {
        e.preventDefault()
        fargoDispatch({ type })
    }

    return (
        <>
            <Modal open={newGameModalOpen} dispatch={fargoDispatch} />
            <FargoStyled>
            <Helmet>
            <title>Pool Scorer | Fargo</title>
            </Helmet>
                <Names state={fargoState} dispatch={fargoDispatch} />
                <Scores score1={scores1?.reduce((a, b) => a + b)} score2={scores2?.reduce((a, b) => a + b)} players={players} player1={player1} />
                <Stats stat={inning[player1 ? 0 : 1] === 11 ? 10 : inning[player1 ? 0 : 1]} statLabel={"Inning"} />
                <Stats stat={player1 ? scores1[inning[0] - 1] : scores2[inning[1] - 1]} statLabel={"Inning Score"} />
                <Stats stat={ballsRemaining} statLabel={'Balls Remaining'} />
                <ButtonDiv>
                    <Button width={'3rem'} handler={(e) => handleButton(e, DECREMENT)} text={'-'} />
                    <Button width={'3rem'} handler={(e) => handleButton(e, INCREMENT)} text={'+'} />
                    <Button handler={(e) => handleButton(e, NEXT)} text={players === 1 ? 'Missed/Next' : 'Next Player'} />
                    <Button handler={(e) => handleButton(e, OPEN_MODAL)} text={'New Game'} />
                </ButtonDiv>
                <InningBox top={'3.5rem'} players={players} scores={[scores1, scores2]}/>
            </FargoStyled>
            <Help page={'fargo'} />
        </>
    )
}

export default Fargo
