import React, { useContext } from 'react'
import styled from 'styled-components'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useLocation, Link } from 'react-router-dom'

import { AppContext } from '../../store'

const MenuStyled = styled.div`
position: relative;
height: 3rem;
width: 100vw;
display: grid;
place-items: center;
padding: 10px;
color: white;
background-color: rgb(0,0,0,.9);
border-bottom: 2px solid white;
z-index: 10;
`

const Title = styled.h1`
position: absolute;
text-transform: uppercase;
`

const Hamburger = styled.div`
position: absolute;
right: 25px;
cursor: pointer;
`

const Nav = styled.nav`
position: absolute;
display: ${props => props.right !== -7 ? 'flex' : 'none'};
justify-content: center;
top: 3rem;
right: ${props => props.right + 'rem'};
height: 10rem;
width: 7rem;
background-color: rgb(0,0,0,.9);
border-bottom: 2px solid white;
border-left: 2px solid white;
border-bottom-left-radius: 10px;
z-index: 1;
`

const Ul = styled.ul`
color: white;
font-size: 2rem;
list-style-type: none;

a, a:visited {
    color: white;
    text-decoration: none;
}
`

const Li = styled.li`

`

const navMenuItems = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: '14.1',
        link: '/14.1'
    },
    {
        name: 'Fargo',
        link: '/fargo'
    },
    {
        name: 'Match',
        link: '/match'
    }
]

const Menu = ({ right, handleMenu }) => {
    // eslint-disable-next-line
    const [appState, appDispatch] = useContext(AppContext)
    const { menuOpen } = appState
    const location = useLocation()

    const navItems = navMenuItems.map((el, i) => {
        return (
            <Link key={i + 1} to={el.link}>
                <Li key={i + 2}>
                    {el.name}
                </Li>
            </Link>
        )
    })

    return (
        <>
            <MenuStyled>
                <Title>{location.pathname.slice(1)}</Title>
                <Hamburger>
                    {
                        menuOpen ? <FaTimes onClick={() => handleMenu('close')} size={'2rem'} /> : <FaBars onClick={() => handleMenu('open')} size={'2rem'} />
                    }
                </Hamburger>
            </MenuStyled>
            <Nav name={'nav'} open={menuOpen} right={right}>
                <Ul name={'nav'}>
                    {navItems}
                </Ul>
            </Nav>
        </>
    )
}

export default Menu
