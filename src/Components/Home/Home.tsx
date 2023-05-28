import React from "react"
import { ContentWrapper, CvContainer, HeadingWrapper, HomeWrapper, ImageContainer, LetsTalkContainer, ScrollDownWrapper, SocialMediaWrapper } from "./Home.styles";
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";

function Home(){
    return (
        <HomeWrapper id="home">
            <HeadingWrapper>
                <div>
                    <span>Hello, I'm</span>
                    <h1>Yeboah Andrews</h1>
                    <span>Full Stack Developer</span>
                </div>
                <ContentWrapper>
                    <CvContainer>Download CV</CvContainer>
                    <LetsTalkContainer>Let's Talk</LetsTalkContainer>
                </ContentWrapper>
            </HeadingWrapper>

            
            <ImageContainer>
                
            </ImageContainer>
            <SocialMediaWrapper>
                <AiFillGithub className="icon"/>
                <AiFillLinkedin className="icon"/>
                <AiFillTwitterCircle className="icon"/>
            </SocialMediaWrapper>
            <ScrollDownWrapper>
                Scroll Down
            </ScrollDownWrapper>
        </HomeWrapper>
    )
}

export default Home;