import styled from "styled-components";

export const MainContainer = styled.div`
    width: 100vw;
    height: max-content;
    background : ${({theme})=> theme.background};
    color: white;
    overflow-x: hidden;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`