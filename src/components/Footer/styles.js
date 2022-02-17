import styled from 'styled-components'

export const Wrapper = styled.footer`
    height: 8rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: linear-gradient(90deg, #e8edf5 0, #fff 100%);
`

export const Credits = styled.h1`
    text-align: center;
    color: #444;

    & a {
        color: #1c50a1 !important;

        &:hover {
            text-decoration: underline;
        }
    }
`
