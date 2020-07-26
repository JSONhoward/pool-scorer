import React, { useContext } from 'react'
import styled from 'styled-components'
import { FaBars, FaTimes } from 'react-icons/fa'
import {useLocation} from 'react-router-dom'

import { AppContext, CLOSE_MENU, OPEN_MENU } from '../../store'

const MenuStyled = styled.div`
position: fixed;
height: 3rem;
width: 100%;
display: grid;
place-items: center;
padding: 10px;
color: white;
background-color: rgb(0,0,0,.9);
border-bottom: 2px solid white;
`

const Title = styled.h1`
position: absolute;
text-transform: uppercase;
`

const Hamburger = styled.div`
position: absolute;
right: 10px;
cursor: pointer;
`

const Nav = styled.nav`

`

const Menu = (props) => {
    const [appState, appDispatch] = useContext(AppContext)
    const { menuOpen } = appState
    const location = useLocation()

    return (
        <MenuStyled>
            <Title>{location.pathname.slice(1)}</Title>
            <Hamburger>
                {
                    menuOpen ? <FaTimes onClick={() => appDispatch({ type: CLOSE_MENU })} size={'2rem'} /> : <FaBars onClick={() => appDispatch({ type: OPEN_MENU })} size={'2rem'} />
                }
            </Hamburger>
            <Nav />
        </MenuStyled>
    )
}

export default Menu
