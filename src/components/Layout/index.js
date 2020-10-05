import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import CookieConsent from 'react-cookie-consent'
import {Link} from 'react-router-dom'

import Menu from '../Menu/Menu'
import { AppContext, CLOSE_MENU, OPEN_MENU, NO_COOKIES, YES_COOKIES } from '../../store'
import anime from 'animejs'
import Footer from '../Footer/Footer'

const LayoutStyled = styled.div`
height: 100vh;
width: 100vw;
font-family: 'Cabin', sans-serif;
`

const Layout = ({ children }) => {
    const [opacity, setOpacity] = useState(0)
    const [appState, appDispatch] = useContext(AppContext)
    const { menuOpen, showConsentBar, disableCookies } = appState

    const closeMenu = event => {
        if (menuOpen && event.target.getAttribute('name') !== 'nav') {
            appDispatch({ type: CLOSE_MENU })

            let obj = {
                val: 1
            }

            anime({
                targets: obj,
                val: 0,
                autoplay: false,
                loop: false,
                easing: 'linear',
                duration: 250,
                update: () => setOpacity(obj.val)
            }).play()
        }
    }

    const handleMenu = action => {
        if (action === 'close') {
            appDispatch({ type: CLOSE_MENU })
        } else {
            appDispatch({ type: OPEN_MENU })
        }

        let obj = {
            val: menuOpen ? 1 : 0
        }

        anime({
            targets: obj,
            val: menuOpen ? 0 : 1,
            autoplay: false,
            loop: false,
            easing: 'linear',
            duration: 250,
            update: () => setOpacity(obj.val)
        }).play()
    }

    const handleKeys = e => {
        if (menuOpen && e.keyCode === 27) {
            appDispatch({ type: CLOSE_MENU })

            let obj = {
                val: 1
            }

            anime({
                targets: obj,
                val: 0,
                autoplay: false,
                loop: false,
                easing: 'linear',
                duration: 250,
                update: () => setOpacity(obj.val)
            }).play()
        }
    }

    const handleConsent = choice => {
        if (choice) {
            appDispatch({ type: YES_COOKIES })
        } else {
            appDispatch({ type: NO_COOKIES })
        }
    }

    return (
        <>
            <LayoutStyled onClick={e => closeMenu(e)} onKeyUp={(e) => handleKeys(e)}>
                <Menu opacity={opacity} handleMenu={handleMenu} />
                    {children}
                {
                    showConsentBar && <CookieConsent cookieName={'ga-disable-G-6DYPVSGFG4'} cookieValue={disableCookies} declineCookieValue={disableCookies} sameSite='none' cookieSecurity={true} buttonText={'Accept'} declineButtonText={'Decline'} onAccept={() => handleConsent(true)} onDecline={() => handleConsent(false)} location={'bottom'} enableDeclineButton>This website uses cookies to enhance user experience. <Link to='/cookie-policy'>Cookie Policy</Link></CookieConsent>
                }
                <Footer />
            </LayoutStyled>
        </>
    )
}

export default Layout