import styled from "styled-components";

export const NavBarWrapper = styled.nav`
    width: 300px;
    position: fixed;
    bottom: 20px;
    border: 2px solid ${({theme})=> theme.secondaryVariant};
    background: rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    height: 35px;
    display: flex;  
    align-items: center;
    justify-content: center;
    gap: 30px;
    z-index: 10;

    .active{
        background: ${({theme})=> theme.secondaryVariant};
        border-radius: 50%;
        width: 25px;
        height: 25px;
    }
`

export const LinkWrapper = styled.a`
    color: white;
    font-size: 20px;
`