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
height: 200px;
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
font-weight: bold;
margin: 15px auto;
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
width: 25%;
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



const MatchModal = ({ open, dispatch }) => {
    const [alternate, setAlternate] = useState(true)
    const [racks, setRacks] = useState(7)

    const handleNewGame = type => {
        if(type === CANCEL) {
            dispatch({type})
        }else {
            dispatch({type, payload: {race: Number(racks), break: alternate ? 'alternate' : 'winner'}})
        }
    }

    

return (
    <MatchModalStyled open={open}>
        <Text>Race To?</Text>
        <RaceInput onChange={(e) => setRacks(e.target.value) } defaultValue={7} type={'number'} />
        <Text>Break?</Text>
        <BreakChoiceDiv >
            <BreakChoiceP onClick={() => setAlternate(true)} breakChoice={alternate}>Alternate</BreakChoiceP>
            <BreakChoiceP onClick={() => setAlternate(false)} breakChoice={!alternate}>Winner</BreakChoiceP>
        </BreakChoiceDiv>
        <ButtonBox>
            <Button onClick={() => handleNewGame(CANCEL)} color={'red'}>Cancel</Button>
            <Button onClick={() => handleNewGame(RESET)}>New Game</Button>
        </ButtonBox>
    </MatchModalStyled>
)
}

export default MatchModal
