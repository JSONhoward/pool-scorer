import React from 'react'
import styled from 'styled-components'

const ScoresBox = styled.div`
display: flex;
width: fit-content;
justify-content: space-between;
margin-bottom: 1rem;
`

const CurrentScore = styled.p`
display: grid;
place-items: center;
min-width: 5rem;
font-size: 5rem;
opacity: ${props => !props.scoreOpacity ? '1' : '.5'};
border: 2px solid white;
margin: 0 5px;
border-radius: 10px;
`

const Scores = ({ players, score1, score2, player1 }) => {
    return (
        <ScoresBox>
            {
                players === 1 ? (<CurrentScore>{score1}</CurrentScore>) :
                    (
                        <>
                            <CurrentScore scoreOpacity={!player1}>{score1}</CurrentScore>
                            <CurrentScore scoreOpacity={player1}>{score2}</CurrentScore>
                        </>
                    )
            }
        </ScoresBox>
    )
}

export default Scores
