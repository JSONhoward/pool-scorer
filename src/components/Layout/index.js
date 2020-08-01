import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import Menu from '../Menu/Menu'
import { AppContext, CLOSE_MENU, OPEN_MENU } from '../../store'
import anime from 'animejs/lib/anime.es.js'
import Footer from '../Footer/Footer'

const LayoutStyled = styled.div`
height: 100vh;
width: 100vw;
font-family: 'Cabin', sans-serif;
`

const Layout = ({ children }) => {
    const [opacity, setOpacity] = useState(0)
    const [appState, appDispatch] = useContext(AppContext)
    const { menuOpen, } = appState

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
        if(menuOpen && e.keyCode === 27) {
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

    return (
        <>
            <LayoutStyled onClick={e => closeMenu(e)} onKeyUp={(e) => handleKeys(e)}>
                <Menu opacity={opacity} handleMenu={handleMenu} />
                {children}
                <Footer />
            </LayoutStyled>
        </>
    )
}

export default Layout