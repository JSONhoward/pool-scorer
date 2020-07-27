import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { FaPlus, FaMinus } from 'react-icons/fa'
import anime from 'animejs/lib/anime.es.js'

const InningBoxStyledLeft = styled.div`
position: fixed;
top: 4rem;
left: ${props => props.px + 'px'};
height: 250px;
width: 100px;
background-color: white;
border-bottom-right-radius: 10px;
border: 1px solid black;
margin: auto 0;
`

const InningBoxStyledRight = styled.div`
position: fixed;
top: 4rem;
right: ${props => props.px + 'px'};
height: 250px;
width: 100px;
background-color: white;
border-bottom-left-radius: 10px;
border: 1px solid black;
margin: auto 0;
`

const TabLeft = styled.div`
position: relative;
display: grid;
place-items: center;
right: -99px;
height: 50px;
width: 50px;
color: black;
background-color: white;
border-top-right-radius: 10px;
border-bottom-right-radius: 10px;
cursor: pointer;

p {
position: absolute;
top: 0;
font-size: small;
}
`

const TabRight = styled.div`
position: relative;
display: grid;
place-items: center;
left: -50px;
height: 50px;
width: 50px;
color: black;
background-color: white;
border-top-left-radius: 10px;
border-bottom-left-radius: 10px;
cursor: pointer;

p {
position: absolute;
top: 0;
font-size: small;
}
`

const Table = styled.table`
position: relative;
top: 75px;
left: 50%;
height: 250px;
width: 100px;
transform: translate(-50%, -50%);
color: black;
font-size: 1rem;
border: 1px solid black;
border-spacing: 0px;
text-align: center;
border-Bottom-Right-Radius: ${props => props.left ? '10px' : '0px'};
border-Bottom-Left-Radius: ${props => props.left ? '0px' : '10px'};

th, tr, td {
    border: 1px solid black;
    border-collapse: collapse;
}
`

const InningBox = ({ players, scores }) => {
    const [isOpenLeft, setIsOpenLeft] = useState(false)
    const [isOpenRight, setIsOpenRight] = useState(false)
    const [pixelsLeft, setPixelsLeft] = useState(-100)
    const [pixelsRight, setPixelsRight] = useState(-100)

    const inningsTab = useRef()

    const openLeft = () => {
        let obj = {
            px: -100
        }

        setIsOpenLeft(true)
        anime({
            targets: obj,
            px: 0,
            autoplay: false,
            loop: false,
            duration: 1000,
            easing: 'easeInOutSine',
            update: () => setPixelsLeft(obj.px)
        }).play()
    }

    const closeLeft = () => {
        let obj = {
            px: 0
        }

        setIsOpenLeft(false)
        anime({
            targets: obj,
            px: -100,
            autoplay: false,
            loop: false,
            duration: 1000,
            easing: 'easeInOutSine',
            update: () => setPixelsLeft(obj.px)
        }).play()
    }

    const openRight = () => {
        let obj = {
            px: -100
        }

        setIsOpenRight(true)
        anime({
            targets: obj,
            px: 0,
            autoplay: false,
            loop: false,
            duration: 1000,
            easing: 'easeInOutSine',
            update: () => setPixelsRight(obj.px)
        }).play()
    }

    const closeRight = () => {
        let obj = {
            px: 0
        }

        setIsOpenRight(false)
        anime({
            targets: obj,
            px: -100,
            autoplay: false,
            loop: false,
            duration: 1000,
            easing: 'easeInOutSine',
            update: () => setPixelsRight(obj.px)
        }).play()
    }

    const inningList1 = scores[0].map((el, i) => {
        return (
            <tr key={i + 1}>
                <td key={i + 2}>{el}</td>
                <td key={i + 3} style={(i === 9) ? { borderBottomRightRadius: '10px' } : {}}>{i + 1}</td>
            </tr>
        )
    })

    const inningList2 = scores[1].map((el, i) => {
        return (
            <tr key={i + 1}>
                <td key={i + 2} style={(i === 9) ? { borderBottomLeftRadius: '10px' } : {}}>{i + 1}</td>
                <td key={i + 3}>{el}</td>
            </tr>
        )
    })

    return (
        <>
            {
                players === 1 ? (
                    <InningBoxStyledLeft px={pixelsLeft} ref={inningsTab}>
                        <TabLeft onClick={isOpenLeft ? closeLeft : openLeft}>
                            <p>Innings</p>
                            {
                                isOpenLeft ? <FaMinus /> : <FaPlus />
                            }
                        </TabLeft>
                        <Table left={true}>
                            <tbody>
                                <tr>
                                    <th>Score</th>
                                    <th>Inning</th>
                                </tr>
                                {inningList1}
                            </tbody>
                        </Table>
                    </InningBoxStyledLeft>
                )
                    :
                    (
                        <>
                            <InningBoxStyledLeft px={pixelsLeft} ref={inningsTab}>
                                <TabLeft onClick={isOpenLeft ? closeLeft : openLeft}>
                                    <p>Innings</p>
                                    {
                                        isOpenLeft ? <FaMinus /> : <FaPlus />
                                    }
                                </TabLeft>
                                <Table left={true}>
                                    <tbody>
                                        <tr>
                                            <th>Score</th>
                                            <th>Inning</th>
                                        </tr>
                                        {inningList1}
                                    </tbody>
                                </Table>
                            </InningBoxStyledLeft>
                            <InningBoxStyledRight px={pixelsRight} ref={inningsTab}>
                                <TabRight onClick={isOpenRight ? closeRight : openRight}>
                                    <p>Innings</p>
                                    {
                                        isOpenRight ? <FaMinus /> : <FaPlus />
                                    }
                                </TabRight>
                                <Table left={false}>
                                    <tbody>
                                        <tr>
                                            <th>Inning</th>
                                            <th>Score</th>
                                        </tr>
                                        {inningList2}
                                    </tbody>
                                </Table>
                            </InningBoxStyledRight>
                        </>
                    )
            }
        </>
    )
}

export default InningBox
