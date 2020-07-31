import React, { useState } from 'react'
import styled from 'styled-components'
import { CHANGE_NAME } from '../../store'

const Name = styled.input`
width: 10rem;
text-align: center;
font-size: 2rem;
font-weight: bold;
text-transform: uppercase;
text-shadow: 2px 2px 5px black;
color: ${props => props.edit ? 'black' : 'white'};
opacity: ${props => props.turn ? '1' : '.25'};
border: none;
background-color: ${props => props.edit ? 'white' : 'rgb(0,0,0,0)'};
`

const NamesStyled = styled.div`
position: relative;
display: flex;
justify-content: center;
height: 2.5rem;
width: 95%;
font-size: 1.5rem;
color: white;
margin-bottom: 1rem;

${Name}:hover {
    cursor: text;
}
`

const Names = ({ state, dispatch, gameOver }) => {
    const [editName1, setEditName1] = useState(false)
    const [editName2, setEditName2] = useState(false)
    const [names, setNames] = useState({ name1: '', name2: '' })

    const { players, playerName1, playerName2, player1 } = state

    const saveName = e => {
        dispatch({ type: CHANGE_NAME, payload: { player: e.target.name, name: names[e.target.name] } })
        e.target.name === 'name1' ? setEditName1(false) : setEditName2(false)

    }

    const handleName = e => {
        setNames({ [e.target.name]: e.target.value })
    }

    return (
        <NamesStyled>
            {
                players === 1 ?
                    (
                        <Name autoComplete='off' turn={true} maxLength={10} name='name1' edit={editName1} onFocus={() => setEditName1(true)} onBlur={e => saveName(e)} type='text' defaultValue={playerName1 === '' ? 'Player 1' : playerName1} onChange={e => handleName(e)} title='Edit' />
                    )
                    : !gameOver ?
                        (
                            <>
                                <Name autoComplete='off' turn={player1} maxLength={10} name='name1' edit={editName1} onFocus={() => setEditName1(true)} onBlur={e => saveName(e)} type='text' defaultValue={playerName1 === '' ? 'Player 1' : playerName1} onChange={e => handleName(e)} title='Edit' />
                                <Name autoComplete='off' turn={!player1} maxLength={10} name='name2' edit={editName2} onFocus={() => setEditName2(true)} onBlur={e => saveName(e)} type='text' defaultValue={playerName2 === '' ? 'Player 2' : playerName2} onChange={e => handleName(e)} title='Edit' />
                            </>
                        )
                        :
                        (
                            <>
                                <Name autoComplete='off' turn={true} maxLength={10} name='name1' edit={editName1} onFocus={() => setEditName1(true)} onBlur={e => saveName(e)} type='text' defaultValue={playerName1 === '' ? 'Player 1' : playerName1} onChange={e => handleName(e)} title='Edit' />
                                <Name autoComplete='off' turn={true} maxLength={10} name='name2' edit={editName2} onFocus={() => setEditName2(true)} onBlur={e => saveName(e)} type='text' defaultValue={playerName2 === '' ? 'Player 2' : playerName2} onChange={e => handleName(e)} title='Edit' />
                            </>
                        )
            }
        </NamesStyled>
    )
}

export default Names
