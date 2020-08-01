import React, { useContext } from 'react'
import styled from 'styled-components'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useLocation, Link } from 'react-router-dom'

import { AppContext } from '../../store'

const MenuStyled = styled.div`
position: absolute;
height: 3rem;
width: 100vw;
display: grid;
place-items: center;
padding: 10px;
color: white;
background-color: rgb(0,0,0,.9);
box-shadow: 0 1px 5px black;
z-index: 10;
`

const Title = styled.h1`
position: absolute;
font-size: 1.5rem;
text-transform: uppercase;
`

const Hamburger = styled.div`
position: absolute;
right: 20px;
border: none;

background-color: rgb(0,0,0,.9);
cursor: pointer;
`

const Nav = styled.nav`
position: absolute;
display: ${props => props.opacity !== 0 ? 'flex' : 'none'};
justify-content: center;
top: 3rem;
right: 0;
opacity: ${props => props.opacity};
height: 12rem;
width: 11rem;
background-color: rgb(0,0,0,.9);
border-bottom-left-radius: 10px;
box-shadow: 1px 1px 5px black;
z-index: 1;
`

const Ul = styled.ul`
color: white;
font-size: 1.5rem;
list-style-type: none;
text-align: center;

a, a:visited {
    color: white;
    text-decoration: none;
}
`

const Li = styled.li`
border-bottom: 1px solid white;
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
        name: 'Hopkins Q Skills',
        link: '/hopkins-q-skills'
    },
    {
        name: 'Equal Offense',
        link: '/equal-offense'
    },
    {
        name: 'VS.',
        link: '/vs'
    }
]

const Menu = ({ opacity, handleMenu }) => {
    // eslint-disable-next-line
    const [appState, appDispatch] = useContext(AppContext)
    const { menuOpen } = appState
    const location = useLocation()

    const handleKeys = e => {
        if(e.keyCode === 13 && !menuOpen) handleMenu('open') 
        if(e.keyCode === 13 && menuOpen) handleMenu('close') 
    }

    const navItems = navMenuItems.map((el, i) => {
        return (
            <Link key={i + 1} to={el.link}>
                <Li onKeyUp={e => menuOpen && e.keyCode === 13 && handleMenu('close')} onClick={() => handleMenu('close')} key={i + 2}>
                    {el.name}
                </Li>
            </Link>
        )
    })

    return (
        <>
            <MenuStyled>
                <Title>{location.pathname.slice(1) === '' ? 'Pool Scorer' : location.pathname.slice(1)}</Title>
                <Hamburger role='button'>
                    {
                        menuOpen ? <FaTimes tabIndex='0' color={'white'} onKeyUp={(e) => handleKeys(e)} onClick={() => handleMenu('close')} size={'2rem'} /> : <FaBars tabIndex='0' color={'white'} onKeyUp={(e) => handleKeys(e)} onClick={() => handleMenu('open')} size={'2rem'} />
                    }
                </Hamburger>
            </MenuStyled>
            <Nav name={'nav'} open={menuOpen} opacity={opacity} aria-hidden={!menuOpen}>
                <Ul name={'nav'}>
                    {navItems}
                </Ul>
            </Nav>
        </>
    )
}

export default Menu
