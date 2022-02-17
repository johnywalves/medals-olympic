import styled from 'styled-components'

export const Wrapper = styled.header`
    height: 8rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding-left: calc((100vw - 98rem) / 2);
`

export const Logo = styled.img`
    height: 6rem;
`

export const Title = styled.h1`
    margin-left: 2rem;
    color: #444;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const Back = styled.img`
    height: 8rem;
`