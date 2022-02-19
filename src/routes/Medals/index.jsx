import React from 'react'

import Header from './Header'
import Row from './Row'

import { Wrapper } from './styles'

const teams = [  
    {
        team: 'norway',
        description: 'Norway',
        gold: 14,
        silver: 7,
        bronze: 8
    },
    {
        team: 'germany',
        description: 'Germany',
        gold: 10,
        silver: 7,
        bronze: 5
    },
    {
        team: 'united-states-of-america',
        description: 'United States of America',
        gold: 8,
        silver: 8,
        bronze: 5
    },
    {
        team: 'sweden',
        description: 'Sweden',
        gold: 7,
        silver: 4,
        bronze: 4
    },
    {
        team: 'china',
        description: 'People`s Republic of China',
        gold: 7,
        silver: 4,
        bronze: 2
    }                
]

const Medals = () => {
    return (
        <Wrapper>
            <Header/>
            {teams.map(team => <Row key={team.team} {...team}/>)}
        </Wrapper>
    )
}

export default Medals