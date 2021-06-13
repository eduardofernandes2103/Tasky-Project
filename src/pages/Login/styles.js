import { Grid, Typography } from '@material-ui/core';
import { styled as materialStyled } from '@material-ui/core';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledGrid = materialStyled(Grid) ( ({ theme }) => ({
  width: '100%',
  height: '100vh',
  background: 'white',

  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row-reverse',
  }
}))

export const HeaderGrid = materialStyled(Grid) ( ({ theme }) => ({
  width: '100%',
  height: '30%',
  [theme.breakpoints.up('sm')]: {
    height: '100%',
  }
}))

export const BodyForm = styled.form`
  width: 100%;
  height: 70%;
  background-image: var(--gradient-blue);
  @media (min-width: 600px) {
    height: 100%;  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center
  }
`


export const FirstDiv = styled.div `
  width: 100%;
  height: 25%;
`

export const SecondDiv = styled.div `
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;

  @media (min-width: 600px) {
    flex-direction: column;
    justify-content: center;
  }
`

export const H1 = styled.h1 `
  font-size: 150%;
  padding: 2%;

  @media (min-width: 600px) {
    display: none;
  }
`

export const H1Title = styled.h1 `
  font-family: unset;
  font-size: 280%;

  @media (min-width: 600px) {
    font-size: 380%;
  }
`

export const H1text = styled.p `
  color: var(--dark-red);

  @media (min-width: 600px) {
    display: none;
  }
`

export const StyledLink = styled(Link) `
  color: var(--blue);
  font-weight: 600;
`

export const ThirdDiv = styled.div `
  width: 100%;
  height: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const DivsInputs = styled.div `
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 600px) {
    height: 30%;
    margin-top: 15%;
    justify-content: space-evenly;
  }
`

export const EachDivInput = styled.div `
  width: 80%;
  margin-top: 20%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 600px) {
    width: 60%;
    margin-top: 0%;
  }
`

export const DivButton = styled.div `
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
`

export const BottomH1 = styled.h1 `
  display: none;

  @media (min-width: 600px) {
    font-size: 250%;
    display: unset;
  }
`

export const H1DesktopText = styled.p `
  display: none;

@media (min-width: 600px) {
  color: var(--dark-red);
  margin-top: 3%;
  display: unset;
}
`