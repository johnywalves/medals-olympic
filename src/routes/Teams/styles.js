import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 88rem;
    padding-top: 2rem;
`

export const Name = styled.h1`
    font-size: 3rem;
    margin: 1rem 0;
`

export const Flag = styled.div`
    background-image: url(${({ id }) => "https://www.countryflags.com/wp-content/uploads/" + id + "-flag-png-large.png"});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    height: 18rem;
    width: 30rem;
    margin: 1rem 0;
`

export const Description = styled.p`
    font-size: 2rem;
    margin: 2rem 0 0;
`