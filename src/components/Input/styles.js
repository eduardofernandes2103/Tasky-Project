import styled from 'styled-components';

export const Container = styled.div`
    text-align: left;
    background-color: var(--white);
    padding: 2px;
    width: 100%;
    transition: 0.5s;
    height: 30px;

    input{
        background: transparent;
    padding-left: 2px;
    color: var(--dark-grey);
    border: 0;
    height: 90%;
    width: 90%;
        &::placeholder{
            color: var(--grey)
        }
    }
    
`;


export const StyledInput = styled.input`
    background: var(--white);
    padding-left: 2px;
    color: var(--dark-grey);
    border: 0;
    height: 90%;
    width: 90%;
    &::placeholder{
        color: var(--grey)
    }

` 