import React from 'react'

import { Wrapper, Team, Medals, Gold, Silver, Bronze, Total } from './styles'

const MedalsHeader = () => {
    return (
        <Wrapper>
            <Team>Time</Team>
            <Medals>
                <Gold/>
                <Silver/>
                <Bronze/>
                <Total/>
            </Medals>
        </Wrapper>
    )
}

export default MedalsHeader
