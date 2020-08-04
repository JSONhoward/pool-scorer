import React, { createRef, useContext } from 'react'
import styled from 'styled-components'
import { FaEnvelope } from 'react-icons/fa'
import ContactModal from '../Modal/ContactModal'
import { AppContext, OPEN_MAIL } from '../../store'
import { Link } from 'react-router-dom'

const FooterStyled = styled.footer`
position: fixed;
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

const LegalStuff = styled.div`
display: flex;
line-height: 80%;

a {
    color: white;
}

@media screen and (max-width: 500px) {
    flex-direction: column;
}
`

const Footer = () => {
    const [appState, appDispatch] = useContext(AppContext)
    const { mailOpen } = appState
    const closeRef = createRef()

    const handleMailModal = type => appDispatch({ type: type })

    const handleKeys = e => {
        if (e.keyCode === 13) {
            appDispatch({ type: OPEN_MAIL })
        }
    }

    return (
        <>
            <ContactModal reference={closeRef} open={mailOpen} handle={handleMailModal} />
            <FooterStyled>
                <FooterSection flex={2}>
                <p>&copy; 2020 Pool Scorer</p>
                <LegalStuff>
                <p><Link to='/terms'>Terms</Link></p>
                <p><Link to='/privacy-policy'>Privacy</Link></p>
                </LegalStuff>
                </FooterSection>
                <FooterSection>
                    <FaEnvelope onKeyUp={e => handleKeys(e)} tabIndex='0' style={{ cursor: 'pointer' }} onClick={() => handleMailModal(OPEN_MAIL)} size={'1.5rem'} />
                    <p style={{ cursor: 'pointer' }} onClick={() => handleMailModal(OPEN_MAIL)}>Contact </p>
                </FooterSection>
            </FooterStyled>
        </>
    )
}

export default Footer
