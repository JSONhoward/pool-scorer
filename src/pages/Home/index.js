import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {Helmet} from 'react-helmet'

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
width: 20rem;
padding: 0px;
flex-wrap: wrap;

`

const Home = () => {
    return (
        <HomeStyled>
        <Helmet>
        <title>Pool Scorer | Home</title>
        </Helmet>
            <ButtonDiv>
                <Link to={'14.1'}><Button font={'2rem'} height={'4rem'} width={'15rem'} handler={null} text={'14.1'} /></Link>
                <Link to={'fargo'}><Button font={'2rem'} height={'4rem'} width={'15rem'} handler={null} text={'Fargo'} /></Link>
                <Link to={'equal-offense'}><Button font={'2rem'} height={'4rem'} width={'15rem'} handler={null} text={'Equal Offense'} /></Link>
                <Link to={'vs'}><Button font={'2rem'} height={'4rem'} width={'15rem'} handler={null} text={'VS.'} /></Link>
            </ButtonDiv>
        </HomeStyled>
    )
}

export default Home
