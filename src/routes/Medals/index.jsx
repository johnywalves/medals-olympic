import React, { useState, useEffect } from 'react'

import Header from './Header'
import Row from './Row'

import { Wrapper } from './styles'

const Medals = () => {
    const [medals, setMedals] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/medals')
            .then(response => response.json())
            .then(data => setMedals(data));
    }, [])

    return (
        <Wrapper>
            <Header/>
            {medals.map(team => <Row key={team.team} {...team}/>)}
        </Wrapper>
    )
}

export default Medals