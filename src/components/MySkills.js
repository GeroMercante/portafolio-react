import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme } from './Themes'
import { Design, Develope } from './AllSvgs'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'
import ParticleComponent from '../subComponents/ParticleComponent'
import BigTitle from './BigTitle'

const Box =  styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height: 100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;
`

const Main =  styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 30vw;
height: 60vh;
z-index: 3;
line-height: 1.5;
cursor: pointer;

font-family: 'Ubuntu Mono', monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

&:hover{
    color:${props => props.theme.body};
    background:${props => props.theme.text};
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);

${Main}:hover &{
    &>*{
        fill:${props => props.theme.body}
    }
}

&>*:first-child{
    margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;
transition: .5s ease;

${Main}:hover &{
    color:${props => props.theme.body}
}

strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul,p{
    margin-left: 2rem;
}
`

const MySkills = () => {
    return (
    <ThemeProvider theme={lightTheme}>
        <Box>


            <LogoComponent />
            <SocialIcons theme='light'/>
            <PowerButton />
            <ParticleComponent theme='light' />
            <Main>
                <Title>
                    <Design width={40} height={40}/> Diseño.
                </Title>
                <Description>
                    Me encanta crear un diseño que hable, mantenerlo intacto.
                </Description>
                <Description>
                    <strong>Me gusta diseñar</strong>
                    <ul>
                        <li>
                            Diseño Web
                        </li>
                        <li>
                            App Mobiles
                        </li>
                    </ul>
                </Description>
                <Description>
                    <strong>Herramientas</strong>
                    <ul>
                        <li>
                            Figma
                        </li>
                        <li>
                            Adobe InDesign
                        </li>
                    </ul>
                </Description>
            </Main>
            <Main>
                <Title>
                    <Develope width={40} height={40}/> Frontend Developer.
                </Title>
                <Description>
                    Valoro el negocio o la marca para la que estoy creando, por lo que disfruto dando vida a nuevas ideas
                </Description>
                <Description>
                    <strong>Skills</strong>
                    <p>
                    Html, Css, Js, React, Redux, Sass, Bootstrap, Tailwind, Firebase etc.
                    </p>
                </Description>
                <Description>
                    <strong>Herramientas</strong>
                    <p>
                        VsCode, GitHub, Eclipse, etc.
                    </p>
                </Description>
            </Main>
            <BigTitle text="SKILLS" top='5rem' left='5rem' />
        </Box>
    </ThemeProvider>

    )
}

export default MySkills