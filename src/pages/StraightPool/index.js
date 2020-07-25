import React, { useContext } from 'react'
import styled from 'styled-components'

import { INCREMENT, DECREMENT, FOUL, OPEN_MODAL, NEXT } from '../../store'
import { StraightPoolContext, AppContext } from '../../store'
import Modal from '../../components/Modal/Modal'
import Names from '../../components/Names/Names'
import Scores from '../../components/Scores/Scores'
import Stats from '../../components/Stats/Stats'

const StraightPoolStyled = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100%;
width: 100%;
place-items: center;
color: white;
text-shadow: 1px 1px 5px black;
`

const Button = styled.button`
height: 3rem;
margin: 5px;
width: ${props => props.width || '12.5rem'};
font-size: 2rem;
border-radius: 5px;
box-shadow: 1px 1px 5px black;
border: none;
background-color: white;
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
    // eslint-disable-next-line
    const [appState, appDispatch] = useContext(AppContext)

    const { players } = straightPoolState

    const handleButton = (e, type) => {
        e.preventDefault()
        straightPoolDispatch({ type })
    }

    return (
        <>
            <Modal />
            <StraightPoolStyled>
                <Names />
                <Scores />
                <Stats />
                <ButtonDiv>
                    <Button width={'6rem'} onClick={(e) => handleButton(e, DECREMENT)}>-</Button>
                    <Button width={'6rem'} onClick={(e) => handleButton(e, INCREMENT)}>+</Button>
                    <Button onClick={(e) => handleButton(e, NEXT)}>
                        {players === 1 ? 'Missed' : 'Next Player'}
                    </Button>
                    <Button onClick={(e) => handleButton(e, FOUL)}>Foul</Button>
                    <Button onClick={() => appDispatch({ type: OPEN_MODAL })}>New Game</Button>
                </ButtonDiv>
            </StraightPoolStyled>
        </>
    )
}

export default StraightPool
