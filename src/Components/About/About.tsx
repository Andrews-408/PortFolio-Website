import React from 'react'
import { AboutContent, AboutWrapper, BoxContainer, 
    Button, Description, Header, ImageBackground, ImageWrapper, LeftSection, 
    RightSection, TopWrapper } from './About.Styles'
import img from  "../Images/image1.jpg"

function About(){
    return (
        <AboutWrapper id='about'>
            <Header>
                <span>Get To Know</span>
                <h2>About Me</h2>
            </Header>
            <AboutContent>
                <LeftSection>
                    <ImageBackground>
                    </ImageBackground>
                    <ImageWrapper src={img} alt='view'/>
                </LeftSection>
                <RightSection>
                    <TopWrapper>
                        <BoxContainer>

                        </BoxContainer>
                        <BoxContainer>

                        </BoxContainer>
                        <BoxContainer>

                        </BoxContainer>
                    </TopWrapper>
                    <Description>
                        A final year computer engineering student passionate about SoftwareDev and technology. 
                        I am a fast learner, a collaborative team player and have good human relation. 
                        I'm always excited about the prospect of working with a team of professionals who share a common 
                        goal of leveraging technology to solve complex problems in the society.
                    </Description>
                    <Button>
                        Let's talk
                    </Button>
                </RightSection>
            </AboutContent>
        </AboutWrapper>
    )
}

export default About;