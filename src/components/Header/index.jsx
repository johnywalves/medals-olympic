import React from 'react'
import { Link } from "react-router-dom";

import { Wrapper, Content, Logo, Title, Back } from './styles'

const Header = () => {
    return (
        <Link to="/">
            <Wrapper>
                <Content>
                    <Logo src='https://olympics.com/en/images/static/beijing-images/header/b2022-logo.svg'/>
                    <Title>Medalhas Olimpiadas de Inverno 2022</Title>
                </Content>
                <Back src='https://olympics.com/images/static/beijing-images/header/b2022-mountains-right-v2.svg'/>
            </Wrapper>
        </Link>
    )
}

export default Header