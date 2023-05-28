import styled from "styled-components";

export const HomeWrapper = styled.div`
    width: 80%;
    height: 100vh;
    padding: 20px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    div{
        span{
            color: ${({theme})=> theme.secondaryVariant};
        }
    }
`
export const HeadingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    position: absolute;
    top: 15%;
`
export const ContentWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    
`

export const CvContainer = styled.button`
    width: 200px;
    height: 30px;
    background: none;
    border: 2px solid ${({theme})=> theme.secondaryVariant};
    border-radius: 5px;
    color: white;
    cursor: pointer;
`
export const LetsTalkContainer = styled(CvContainer)`
    width: 35%;
    background: ${({theme})=> theme.primaryVariant};
    color: white;
    cursor: pointer;
`
export const ImageContainer = styled.div`
    width: 300px;
    height: 50%;
    position: absolute;
    bottom: 0;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    background: ${({theme})=> theme.primaryVariant};
`

export const SocialMediaWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 25px;
    gap: 10px;
    left: 0;
    font-size: 25px;
    .icon{
        cursor: pointer;
    }
`

export const ScrollDownWrapper = styled.div`
    position: absolute;
    bottom: 50px;
    right: 0;
    transform: rotate(90deg);
    color: ${({theme})=> theme.primaryVariant};
`