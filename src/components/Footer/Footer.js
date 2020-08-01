import React, { useState } from 'react'
import styled from 'styled-components'
import { FaEnvelope } from 'react-icons/fa'
import ContactModal from '../Modal/ContactModal'

const FooterStyled = styled.footer`
position: absolute;
bottom: 0;
display: flex;
height: 3rem;
width: 100vw;
color: white;
background-color: rgb(0,0,0,.9);
`

const FooterSection = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex: ${props => props.flex || 1};

p {
    font-size: 1rem;
    margin: 5px;
}
`

const Footer = () => {
    const [mailOpen, setMailOpen] = useState(false)

    const handleMailModal = () => setMailOpen(!mailOpen)

    return (
        <>
        <ContactModal open={mailOpen} handle={handleMailModal} />
        <FooterStyled>
            <FooterSection flex={1.5}><p>&copy; 2020 Pool Scorer</p></FooterSection>
            <FooterSection>
            <FaEnvelope style={{cursor: 'pointer'}} onClick={handleMailModal} size={'1.5rem'} />
            <p style={{cursor: 'pointer'}} onClick={handleMailModal}>Contact </p>
            </FooterSection>
        </FooterStyled>
        </>
    )
}

export default Footer
