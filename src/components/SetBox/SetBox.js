import React from 'react'
import styled from 'styled-components'
import { FaCheck, FaTimes } from 'react-icons/fa'

const SetBoxStyled = styled.div`
position: relative;
display: flex;
justify-content: space-evenly;
height: fit-content;
max-height: 200px;
width: 200px;
font-size: 2rem;
color: black;
background-color: white;
margin: .5rem;
border-radius: 10px;
box-shadow: 1px 1px 5px black;
overflow-y: auto;
`

const WinListDiv = styled.div`
display: flex;
width: 100%;
flex-direction: column;
margin-top: 1rem;

div {
    display: grid;
    place-items: center;
    font-size: 2rem;
    min-height: 41px;
    width: 100%;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
}
`

const NumDiv = styled.div`
display: flex;
width: 50px;
flex-direction: column;
align-items: center;
margin-top: 1rem;

p {
    font-size: 2rem;
    text-align: center;
    width: 100%;
    border: 1px solid black;
}
`

const WinListHeader = styled.div`
position: absolute;
display: flex;
justify-content: space-evenly;
width: 100%;
font-size: 1rem;

p {
    text-align: center;
    flex: 1;
}
`

const SetBox = ({ state }) => {
    const { scores1, scores2, rackNumber } = state

    const numArr = Array.from(Array(rackNumber), (_, i) => {
        return (
            <p key={i + 1}>{i + 1}</p>
        )
    })

    const winList1 = scores1.map((el, i) => {
        return (
            <div key={i + 1}>
                {
                    el === null ? '' : el === 1 ? (<FaCheck key={i + 2} />) : ('')
                }
            </div>
        )
    })

    const winList2 = scores2.map((el, i) => {
        return (
            <div key={i + 1}>
                {
                    el === null ? '' : el === 1 ? (<FaCheck key={i + 2} />) : ('')
                }
            </div>
        )
    })

    return (
        <SetBoxStyled>
            <WinListHeader>
                <p>Rack</p>
            </WinListHeader>
            <WinListDiv>
                {winList1}
            </WinListDiv>
            <NumDiv>
                {numArr}
            </NumDiv>
            <WinListDiv>
                {winList2}
            </WinListDiv>
        </SetBoxStyled>
    )
}

export default SetBox
