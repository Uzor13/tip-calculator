import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: #798989;
    font-weight: 700;
    box-sizing: border-box;
`

export const LogoImg = styled.img`
  margin: auto;
  padding: 2rem 0;
`

export const Container = styled.div`
    background: hsl(0, 0%, 100%);
    height: 80%;
    border-radius: 1.3rem 1.3rem 0 0;
    padding: 2rem;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    @media (min-width: 1024px) {
      width: 50%;
      height: 40%;
      border-radius: 1.3rem;
      grid-gap: 1.5rem;
      grid-template-rows: repeat(1, 1fr);
      grid-template-columns: repeat(2, 1fr);
    }
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;
`

export const InputForm = styled.input`
    border: 0;
    outline: 0;
    background: #F3F8FB;
    border-radius: .4rem;
    padding-right: .5rem;
    height: 40px;
    text-align: right;
    color: #074141;
    font-weight: 700;
    font-size: 1.2rem;
    font-family: 'Space Mono', sans-serif;
    &:focus {
      border: 2px solid hsl(172, 67%, 45%);
    }
`

export const CustomInputForm = styled(InputForm)`
  width: 90%;
`

export const ButtonContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: .8rem;
    margin-bottom: 1.5rem;
`

export const Button = styled.button`
    border: 0;
    outline: 0;
    border-radius: .5rem;
    font-family: 'Space Mono', sans-serif;
    font-weight: 700;
    background: ${props => props.color ? props.color : "white"};
    color: ${props => props.textColor ? props.textColor : 'white'};
    height: 40px;
    font-size: 1.2rem;
    &:active {
      background: hsl(172, 67%, 45%);
    }
`

export const TotalContainer = styled.div`
    background: hsl(183, 100%, 15%);
    margin-top: 1.5rem;
    padding: 1rem;
    border-radius: .8rem;
    @media (min-width: 1024px) {
      height: 80%;
    }
`

export const ResetButton = styled(Button) `
    width: 100%;
    margin-top: .8rem;
    height: 35px;
    text-transform: uppercase;
    cursor: pointer;
    transition: .2s ease-out;
    &:hover {
      background: hsl(172, 67%, 45%);
    }
`

export const TipContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Total = styled(TipContainer)`
  
`
