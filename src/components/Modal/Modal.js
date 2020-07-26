import React, { useState } from 'react'
import styled from 'styled-components'
import { CANCEL, NEW_GAME, RESET } from '../../store'

const ModalStyled = styled.div`
position: absolute;
display: ${props => props.open ? 'grid' : 'none'};
justify-items: center;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
height: ${props => props.modalHeight ? '35vw' : '25vw'};
max-height: 100px;
max-width: 300px;
width: 50vw;
border-radius: 5px;
color: white;
backdrop-filter: blur(5px);
background-color: rgba(0,0,0,.9);
box-shadow: 1px 1px 5px black;
`

const Text = styled.p`
margin: 15px auto;
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

const Modal = ({ open, dispatch }) => {
    const [choosePlayers, setChoosePlayers] = useState(false)

    const handleNewGame = (type, payload = null) => {
        setChoosePlayers(false)
        dispatch({ type })
        if (type === NEW_GAME) {
            dispatch({ type: RESET, payload })
        }
    }

    return (
        <ModalStyled modalHeight={choosePlayers} open={open}>
            {
                choosePlayers ? (<Text>Players?</Text>) : (<Text>Start New Game?</Text>)
            }
            <ButtonBox buttonBoxHeight={choosePlayers}>
                {
                    choosePlayers ? (
                        <>
                            <Button buttonHeight={choosePlayers} onClick={() => handleNewGame(NEW_GAME, 1)}>1</Button>
                            <Button buttonHeight={choosePlayers} onClick={() => handleNewGame(NEW_GAME, 2)}>2</Button>
                            <Button color={'red'} playerCancel={true} buttonHeight={choosePlayers} buttonWidth={'100%'} onClick={() => handleNewGame(CANCEL)}>Cancel</Button>
                        </>
                    ) : (
                            <>
                                <Button onClick={() => handleNewGame(CANCEL)} color={'red'}>Cancel</Button>
                                <Button onClick={() => setChoosePlayers(true)}>Yes</Button>
                            </>
                        )
                }
            </ButtonBox>
        </ModalStyled>
    )
}

export default Modal
