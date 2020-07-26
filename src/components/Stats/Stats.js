import React from 'react'
import styled from 'styled-components'

const StatDiv = styled.p`
display: grid;
place-items: center;
width: 90%;
font-size: 1.5rem;
margin: 0 auto;
`

const Stats = ({stat, statLabel}) => {
    return (
        <StatDiv>{statLabel}: {stat}</StatDiv>
    )
}

export default Stats
