import React, {useContext} from 'react'
import styled from 'styled-components'
import { StraightPoolContext } from '../../store'

const StatDiv = styled.div`
display: grid;
place-items: center;
width: 90%;
font-size: 1.5rem;
margin: 0 auto;
`

const Stats = () => {
    // eslint-disable-next-line
    const [straightPoolState, straightPoolDispatch] = useContext(StraightPoolContext)
    const {ballsRemaining, currentRun, fouls1, fouls2, runs1, runs2, player1, players} = straightPoolState

    return (
        <>
        <StatDiv><p>Balls Remaining: {ballsRemaining}</p></StatDiv>
        <StatDiv><p>Current Run: {currentRun}</p></StatDiv>
        {
            players === 1 ?
                (
                    <>
                        <StatDiv><p>High Run: {Math.max(...runs1)}</p></StatDiv>
                        <StatDiv><p>On Foul: {fouls1}</p></StatDiv>
                    </>
                )
                :
                (
                    <>
                        <StatDiv><p>High Run: {player1 ? Math.max(...runs1) : Math.max(...runs2)}</p></StatDiv>
                        <StatDiv><p>On Foul: {player1 ? fouls1 : fouls2}</p></StatDiv>
                    </>
                )
        }
        </>
    )
}

export default Stats
