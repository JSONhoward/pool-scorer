import React from 'react'
import styled from 'styled-components'
import Menu from '../Menu/Menu'

const LayoutStyled = styled.div`
height: 100vh;
width: 100vw;
font-family: 'Cabin', sans-serif;
`

const Layout = ({ children }) => {
    return (
        <LayoutStyled>
            <Menu />
            {children}
        </LayoutStyled>
    )
}

export default Layout