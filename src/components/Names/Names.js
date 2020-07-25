import React, {useState, useContext} from 'react'
import styled from 'styled-components'
import { StraightPoolContext, CHANGE_NAME } from '../../store'

const Name = styled.input`
width: 10rem;
text-align: center;
font-size: 2rem;
color: ${props => props.edit ? 'black' : 'white'};
border: none;
background-color: ${props => props.edit ? 'white' : 'rgb(30,30,30)'};
`

const NamesStyled = styled.div`
position: relative;
top: -20px;
display: flex;
justify-content: center;
height: 2.5rem;
width: 95%;
font-size: 1.5rem;
color: white;
margin-top: 3rem;

${Name}:hover {
    cursor: text;
}
`

const Names = () => {
    const [editName1, setEditName1] = useState(false)
    const [editName2, setEditName2] = useState(false)
    const [names, setNames] = useState({name1: 'Player 1', name2: 'Player 2'})
    const [straightPoolState, straightPoolDispatch] = useContext(StraightPoolContext)

    const {players} = straightPoolState

    const saveName = e => {
        straightPoolDispatch({type: CHANGE_NAME, payload: {player: e.target.name, name: names[e.target.name]}})
        setEditName1(false)
    }

    const handleName = e => {
        setNames({[e.target.name]: e.target.value})
    }

    return (
        <NamesStyled>
            {
                players === 1 ?
                    (
                        <Name name='name1' edit={editName1} onFocus={() => setEditName1(true)} onBlur={e => saveName(e)} type='text' value={names.name1} onChange={e => handleName(e)} title='Edit' />
                    ) :
                    (
                        <>
                            <Name name='name1' edit={editName1} onFocus={() => setEditName1(true)} onBlur={e => saveName(e)} type='text' value={names.name1} onChange={e => handleName(e)} title='Edit' />
                            <Name name='name2' edit={editName2} onFocus={() => setEditName2(true)} onBlur={e => saveName(e)} type='text' value={names.name2} onChange={e => handleName(e)} title='Edit' />
                        </>
                    )
            }
        </NamesStyled>
    )
}

export default Names
