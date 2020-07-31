import React from 'react'
import styled from 'styled-components'

const ScoresBox = styled.div`
display: flex;
width: fit-content;
justify-content: space-between;
margin-bottom: .5rem;
`

const CurrentScore = styled.p`
display: grid;
place-items: center;
min-width: 5rem;
font-size: 5rem;
color: white;
opacity: ${props => props.scoreOpacity ? '1' : '.25'};
border: 2px solid white;
margin: 0 5px;
border-radius: 10px;
box-shadow: 1px 1px 5px black;
`

const RacksContainer = styled.div`
display: grid;
place-items: center;
`

const Racks = styled.p`
display: grid;
place-items: center;
height: 3rem;
min-width: 3rem;
font-size: 2rem;
border: 2px solid white;
margin: 0 5px;
border-radius: 10px;
`

const Scores = ({ players, score1, score2, player1, match, raceTo, gameOver }) => {
    return (
        <ScoresBox>
            {
                players === 1 ? (<CurrentScore scoreOpacity={player1}>{score1}</CurrentScore>) : !match ?
                    (
                        <>
                            <CurrentScore scoreOpacity={player1}>{score1}</CurrentScore>
                            <CurrentScore scoreOpacity={!player1}>{score2}</CurrentScore>
                        </>
                    )
                    : !gameOver ?
                        (
                            <>
                                <CurrentScore scoreOpacity={player1}>{score1}</CurrentScore>
                                <RacksContainer>
                                    <Racks>{raceTo}</Racks>
                                </RacksContainer>
                                <CurrentScore scoreOpacity={!player1}>{score2}</CurrentScore>
                            </>
                        )
                        :
                        (
                            <>
                                <CurrentScore scoreOpacity={true}>{score1}</CurrentScore>
                                <RacksContainer>
                                    <Racks>{raceTo}</Racks>
                                </RacksContainer>
                                <CurrentScore scoreOpacity={true}>{score2}</CurrentScore>
                            </>
                        )
            }
        </ScoresBox>
    )
}

export default Scores
