import React, { useState } from 'react'
import styled from 'styled-components'
import HelpModal from './HelpModal/HelpModal'

const HelpStyled = styled.button`
position: fixed;
bottom: 3.5rem;
left: .5rem;
display: grid;
place-items: center;
height: 3rem;
width: 3rem;
border-radius: 50%;
font-size: 1.5rem;
color: white;
background-color: rgb(0,0,0,.9);
box-shadow: 1px 1px 5px black;
border: none;
cursor: pointer;
`

const Help = ({page}) => {
    const [helpOpen, setHelpOpen] = useState(false)

    const handleModal = () => setHelpOpen(!helpOpen)

    return (
        <>
            <HelpModal handler={handleModal} page={page} open={helpOpen} />
            <HelpStyled data-testid='helpButton' onClick={handleModal}>
                <p>?</p>
            </HelpStyled>
        </>
    )
}

export default Help
