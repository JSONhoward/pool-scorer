import React, { useContext,useState } from 'react'
import styled from 'styled-components'
import Menu from '../Menu/Menu'
import { AppContext, CLOSE_MENU, OPEN_MENU } from '../../store'
import anime from 'animejs/lib/anime.es.js'

const LayoutStyled = styled.div`
height: 100vh;
width: 100vw;
font-family: 'Cabin', sans-serif;
`

const Layout = ({ children }) => {
    const [right, setRight] = useState(-10)
    const [appState, appDispatch] = useContext(AppContext)
    const {menuOpen, } = appState

    const closeMenu = event => {
        if(menuOpen && event.target.getAttribute('name') !== 'nav') {
            appDispatch({ type: CLOSE_MENU })

            let obj = {
                val: 0
            }
    
            anime({
                targets: obj,
                val: -10,
                autoplay: false,
                loop: false,
                easing: 'linear',
                duration: 250,
                update: () => setRight(obj.val)
            }).play()
        }
    }

    const handleMenu = action => {
        if(action === 'close') {
            appDispatch({ type: CLOSE_MENU })
        }else {
            appDispatch({ type: OPEN_MENU })
        }

        let obj = {
            val: menuOpen ? 0 : -10
        }

        anime({
            targets: obj,
            val: menuOpen ? -10 : 0,
            autoplay: false,
            loop: false,
            easing: 'linear',
            duration: 250,
            update: () => setRight(obj.val)
        }).play()
    }

    return (
        <LayoutStyled onClick={e => closeMenu(e)}>
            <Menu right={right} handleMenu={handleMenu} />
            {children}
        </LayoutStyled>
    )
}

export default Layout