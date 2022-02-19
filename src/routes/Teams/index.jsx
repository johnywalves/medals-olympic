import React, { useMemo } from 'react'
import { useParams } from "react-router-dom";

import { Wrapper, Flag, Name, Description } from './styles'

const teams = [  
    {
        id: 'norway',
        name: 'Norway',
        description: 'The Norwegian flag is a white-fimbriated blue Nordic cross on a red field. The used colors in the flag are blue, red, white. The proportion of the Norwegian flag is 8:11. The Flag of Norway was adopted in 1821. The first use of the current flag design was in 1821. The last change to the current Norwegian flag design was in 1899.'
    },
    {
        id: 'germany',
        name: 'Germany',
        description: 'The German flag is a horizontal triband. The used colors in the flag are red, yellow, black. The proportion of the German flag is 3:5. The Flag of Germany was adopted in 1918. The first use of the current flag design was in 1848. The last change to the current German flag design was in 1949.'
    },
    {
        id: 'united-states-of-america',
        name: 'United States of America',
        description: 'The United States flag – USA flag – American flag is a flag with thirteen horizontal stripes with 50 white stars in a blue field. The used colors in the flag are blue, red, white. The proportion of the United States flag – USA flag – American flag is 10:19. The Flag of the United States was adopted in 1960. The first use of the current flag design was in 1818. The last change to the current United States flag design was in 1960.'
    },
    {
        id: 'sweden',
        name: 'Sweden',
        description: 'The Swedish flag is a one coloured field with a cross. The used colors in the flag are blue, yellow. The proportion of the Swedish flag is 5:8. The Flag of Sweden was adopted in 1906. The first use of the current flag design was in 1562. The last change to the current Swedish flag design was in 1906.'
    },
    {
        id: 'china',
        name: 'People`s Republic of China',
        description: 'The Chinese flag is a solid flag with four small stars and one bigger star in the upper left corner. The used colors in the flag are red, yellow. The proportion of the Chinese flag is 2:3. The Flag of China was adopted in 1949. The first use of the current flag design was in 1949.'
    }                
]

const Teams = () => {
    const { team } = useParams();

    const { id, name, description } = useMemo(() =>  {
        const current = teams.find(({ id: id_team }) => id_team === team)

        if (current) { 
            return current
        }

        return ({ id: '', name: '', description: '' })
    }, [team])

    return (
        <Wrapper>
            <Name>{name}</Name>
            <Flag id={id}/>
            <Description>{description}</Description>
        </Wrapper>
    )
}

export default Teams