import React from 'react'
import { Link } from "react-router-dom";

import { Wrapper, Flag, Description, Medal } from './styles'

const MedalsRow = ({ team, description, gold, silver, bronze }) => {
    return (
        <Wrapper>
            <Flag team={team} />
            <Description><Link to={"/" + team}>{description}</Link></Description>
            <Medal>{gold}</Medal>
            <Medal>{silver}</Medal>
            <Medal>{bronze}</Medal>
            <Medal>{gold + silver + bronze}</Medal>
        </Wrapper>
    )
}

export default MedalsRow