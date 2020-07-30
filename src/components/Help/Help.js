import React, { useState } from 'react'
import styled from 'styled-components'
import HelpModal from './HelpModal/HelpModal'

const HelpStyled = styled.div`
position: fixed;
bottom: 1rem;
right: 1rem;
display: grid;
place-items: center;
height: 3rem;
width: 3rem;
border-radius: 50%;
font-size: 1.5rem;
color: white;
background-color: rgb(0,0,0,.9);
box-shadow: 1px 1px 5px black;
cursor: pointer;
`

const Help = () => {
    const [helpOpen, setHelpOpen] = useState(true)

    return (
        <>
            <HelpModal open={helpOpen} />
            <HelpStyled onClick={() => setHelpOpen(!helpOpen)}>
                <p>?</p>
            </HelpStyled>
        </>
    )
}

export default Help
