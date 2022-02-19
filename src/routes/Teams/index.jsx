import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

import { Wrapper, Flag, Name, Description } from './styles'

const Teams = () => {
    const { team } = useParams();

    const [current, setCurrent] = useState()

    useEffect(() => {
        fetch(`http://localhost:8000/teams?id=${team}`)
            .then(response => response.json())
            .then(data => data && data.length > 0 && setCurrent(data[0]));
    }, [team])

    if (!current) {
        return (
            <Wrapper>
                <Name>Time não encontrado</Name>
            </Wrapper>
        )
    }

    return (
        <Wrapper>
            <Name>{current.name}</Name>
            <Flag id={current.id}/>
            <Description>{current.description}</Description>
        </Wrapper>
    )
}

export default Teams