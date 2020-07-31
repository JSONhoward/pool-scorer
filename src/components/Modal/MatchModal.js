import React, { useState } from 'react'
import styled from 'styled-components'
import { CANCEL, RESET } from '../../store'

const MatchModalStyled = styled.div`
position: absolute;
display: ${props => props.open ? 'flex' : 'none'};
flex-direction: column;
align-items: center;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
height: 350px;
max-width: 300px;
width: 75vw;
border-radius: 5px;
color: white;
backdrop-filter: blur(5px);
background-color: rgba(0,0,0,.9);
box-shadow: 1px 1px 5px black;
z-index: 1;
`

const Text = styled.p`
font-size: 1.5rem;
font-weight: bold;
margin: 10px auto;
text-shadow: 1px 1px 5px black;
text-decoration: underline;
`

const ButtonBox = styled.div`
position: absolute;
bottom: 0;
height: ${props => props.buttonBoxHeight ? '4rem' : '2rem'};
width: 100%;
`

const Button = styled.button`
height: ${props => props.buttonHeight ? '50%' : '100%'};
width: ${props => props.buttonWidth || '50%'};
color: ${props => props.color || 'black'};
border-radius: 5px;
border: 1px solid black;
background-color: white;
`

const RaceInput = styled.input`
width: 5rem;
font-size: 1.5rem;
text-align: center;
`

const BreakChoiceDiv = styled.div`
display: flex;
width: 100%;
justify-content: space-evenly;
`

const BreakChoiceP = styled.p`
border-width: ${props => props.breakChoice ? '1px' : 'none'};
border-style: ${props => props.breakChoice ? 'solid' : 'none'};
border-color: ${props => props.breakChoice ? 'white' : 'none'};
padding: 5px;
border-radius: 5px;
`

const FirstBreakChoice = styled.div`
display: flex;
width: 100%;
justify-content: space-evenly;
`

const FirstBreakChoiceP = styled.p`
border-width: ${props => props.firstBreakChoice ? '1px' : 'none'};
border-style: ${props => props.firstBreakChoice ? 'solid' : 'none'};
border-color: ${props => props.firstBreakChoice ? 'white' : 'none'};
font-size: 1rem;
padding: 5px;
border-radius: 5px;
`

const Divider = styled.div`
width: 90%;
border-bottom: 1px solid white;
margin-top: 10px;
`

const MatchModal = ({ open, dispatch, player1, player2 }) => {
    const [alternate, setAlternate] = useState(true)
    const [racks, setRacks] = useState(7)
    const [breakChoice, setBreakChoice] = useState({player1: true, player2: false, random: false})

    const handleNewGame = type => {
        if(type === CANCEL) {
            dispatch({type})
        }else {
            if(breakChoice.random) {
                dispatch({type, payload: {race: Number(racks), break: alternate ? 'alternate' : 'winner', breakChoice: Math.floor(Math.random() * (2 - 1 + 1) + 1)}})
            }else {
                dispatch({type, payload: {race: Number(racks), break: alternate ? 'alternate' : 'winner', breakChoice: breakChoice.player1 ? 1 : 2}})
            }
        }
    }

    const handleRacks = e => {
        let racks = Number(e.target.value)
        if(racks < 101) {
            setRacks(racks)
        }else {
            setRacks(100)
        }
    }

    const handleBreak = e => {
        switch(e.target.getAttribute('name')) {
            case 'player1':
                setBreakChoice({player1: true, player2: false, random: false})
                break
            case 'player2':
                setBreakChoice({player1: false, player2: true, random: false})
                break
            case 'random':
                setBreakChoice({player1: false, player2: false, random: true})
                break
            default:
                break
        }
    }

return (
    <MatchModalStyled open={open}>
        <Text>Race To?</Text>
        <RaceInput min={0} maxLength={3} onChange={(e) => handleRacks(e)} defaultValue={7} type={'number'} />
        <p style={{color: 'red', fontStyle: 'italic'}}>100 max</p>
        <Divider />
        <Text>Break?</Text>
        <BreakChoiceDiv >
            <BreakChoiceP onClick={() => setAlternate(true)} breakChoice={alternate}>Alternate</BreakChoiceP>
            <BreakChoiceP onClick={() => setAlternate(false)} breakChoice={!alternate}>Winner</BreakChoiceP>
        </BreakChoiceDiv>
        <Divider />
        <Text>First Break?</Text>
        <FirstBreakChoice>
        <FirstBreakChoiceP onClick={e => handleBreak(e)} name='player1' firstBreakChoice={breakChoice.player1}>{player1 === '' ? 'Player 1' : player1}</FirstBreakChoiceP>
        <FirstBreakChoiceP onClick={e => handleBreak(e)} name='player2' firstBreakChoice={breakChoice.player2}>{player2 === '' ? 'Player 2' : player2}</FirstBreakChoiceP>
        <FirstBreakChoiceP onClick={e => handleBreak(e)} name='random' firstBreakChoice={breakChoice.random}>Random</FirstBreakChoiceP>
        </FirstBreakChoice>
        <ButtonBox>
            <Button onClick={() => handleNewGame(CANCEL)} color={'red'}>Cancel</Button>
            <Button onClick={() => handleNewGame(RESET)}>New Game</Button>
        </ButtonBox>
    </MatchModalStyled>
)
}

export default MatchModal
