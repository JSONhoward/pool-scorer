import React, { useContext } from 'react'
import styled from 'styled-components'
import {FaBars, FaTimes} from 'react-icons/fa'
import { AppContext, CLOSE_MENU, OPEN_MENU } from '../../store'

const MenuStyled = styled.div`
position: absolute;
right: 0;
display: grid;
place-items: end;
padding: 10px;
color: white;
`

const Nav = styled.nav`

`

const Menu = () => {
const [appState, appDispatch] = useContext(AppContext)
const {menuOpen} = appState

    return (
        <MenuStyled>
        {
            menuOpen ? <FaTimes onClick={() => appDispatch({type: CLOSE_MENU})} size={'2rem'}/> : <FaBars onClick={() => appDispatch({type: OPEN_MENU})} size={'2rem'}/>
        }
        <Nav />
        </MenuStyled>
    )
}

export default Menu
