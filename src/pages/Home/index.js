import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import Button from '../../components/Button/Button'

const HomeStyled = styled.div`
display: flex;
height: 100%;
width: 100%;
align-items: center;
justify-content: center;
`

const ButtonDiv = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 15rem;
padding: 0px;
flex-wrap: wrap;

`

const Home = () => {
    return (
        <HomeStyled>
            <ButtonDiv>
                <Link to={'14.1'}><Button handler={null} text={'14.1'} /></Link>
                <Link to={'fargo'}><Button handler={null} text={'Fargo'} /></Link>
                <Link to={'equal-offense'}><Button handler={null} font={'1.5rem'} text={'Equal Offense'} /></Link>
                <Link to={'match'}><Button handler={null} text={'VS.'} /></Link>
            </ButtonDiv>
        </HomeStyled>
    )
}

export default Home
