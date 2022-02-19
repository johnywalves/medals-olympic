import styled from 'styled-components'

export const Wrapper = styled.div`
    height: 5rem;
    font-size: 2rem;
    display: flex;
    flex-direction: row;
    margin: 0.5rem 0;
`

export const Flag = styled.div`
    background-image: url(${({ team }) => "https://www.countryflags.com/wp-content/uploads/" + team + "-flag-png-large.png"});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    height: 5rem;
    width: 18rem;
`

export const Description = styled.p`
    display: flex;
    align-items: center;
    text-align: left;
    height: 5rem;
    width: 50rem;

    &:hover {
        text-decoration: underline;
    }
`

export const Medal = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5rem;
    width: 5rem;
`