import styled from "styled-components";
import { LetsTalkContainer } from "../Home/Home.styles";

export const AboutWrapper = styled.div`
    width: 80%;
    height: 100vh;
    padding: 20px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
`

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    position: absolute;
    top: 15%;

    h2{
        color: ${({theme})=> theme.primaryVariant};
        letter-spacing: 3px;
    }
    span{
        color : ${({theme})=> theme.secondaryVariant};
    }
`

export const AboutContent = styled.div`
    margin-top: 30px;
    display: grid;
    grid-template-columns: 2fr 3fr;
    grid-column-gap: 9%;
    width: 95%;
    height: 50%;
    align-items: center;
    
`

export const LeftSection = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`
export const ImageBackground = styled.div`
    height: 97%;
    width: 81%;
    border-radius: 10px;
    background: ${({theme})=> theme.primaryVariant};
    position: absolute;
    z-index: 10;
`
export const ImageWrapper = styled.img`
    width: 81%;
    height: 97%;
    border-radius: 10px;
    position: absolute;
    z-index: 100;
    transform: rotate(8deg);
`

export const RightSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const TopWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 3%;
`

export const BoxContainer = styled.div`
    width: 100%;
    height: 120px;
    border-radius: 5px;
    background: ${({theme})=> theme.backgroundVariant};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`
export const Description = styled.p`
    width: 100%;
    
`

export const Button = styled(LetsTalkContainer)`
    width: 120px;
`