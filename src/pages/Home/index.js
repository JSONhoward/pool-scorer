import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {Helmet} from 'react-helmet'

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

a {
    text-decoration: none;
}
`

const GameButton = styled.div`
display: grid;
place-items: center;
height: ${props => props.height || '1.5rem'};
margin: 5px;
width: ${props => props.width || '6.25rem'};
font-family: 'Cabin', sans-serif;
font-size: ${props => props.font || '1rem'};
border-radius: 5px;
box-shadow: 1px 1px 5px black;
border: none;
background-color: white;
cursor: pointer;
color: black;
`

const Home = () => {
    return (
        <HomeStyled>
        <Helmet>
        <title>Pool Scorer | Home</title>
        </Helmet>
            <ButtonDiv>
                <Link to={'/14.1'}><GameButton font={'2rem'} height={'4rem'} width={'15rem'}>14.1</GameButton></Link>
                <Link to={'/fargo'}><GameButton font={'2rem'} height={'4rem'} width={'15rem'}>Fargo</GameButton></Link>
                <Link to={'/hopkins-q-skills'}><GameButton font={'2rem'} height={'4rem'} width={'15rem'}>Hopkins Q Skills</GameButton></Link>
                <Link to={'/equal-offense'}><GameButton font={'2rem'} height={'4rem'} width={'15rem'}>Equal Offense</GameButton></Link>
                <Link to={'/vs'}><GameButton font={'2rem'} height={'4rem'} width={'15rem'}>VS.</GameButton></Link>
            </ButtonDiv>
        </HomeStyled>
    )
}

export default Home
