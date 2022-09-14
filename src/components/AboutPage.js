import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import LogoComponent from '../subComponents/LogoComponent'
import ParticleComponent from '../subComponents/ParticleComponent'
import PowerButton from '../subComponents/PowerButton'
import SocialIcons from '../subComponents/SocialIcons'
import { DarkTheme } from './Themes'

import astronaut from '../assets/Images/spaceman.png'
import BigTitle from './BigTitle'

const Box =  styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height: 100vh;
position: relative;
overflow: hidden;
`
const float = keyframes`
0%{transform: translateY(-10px)}
50%{transform: translateY(15px) translateX(15px)}
100%{transform: translateY(-10px)}
`

const Spaceman = styled.div`
position: absolute;
top: 10%;
right: 5%;
width: 20vw;
animation: ${float} 4s ease infinite;
img{
    width: 100%;
    height: auto;
}
`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
padding: 2rem;
width: 50vw;
height: 60vh;
z-index: 3;
line-height: 1.5;

display: flex;
justify-content: center;
align-items: center;
font-size: calc(0.6rem + 1vw);
backdrop-filter: blur(4px);

position: absolute;
left: calc(5rem + 5vw);
top: 10rem;

font-family: 'Ubutntu Mono',monospace;
font-style: italic;
padding-bottom: 5rem;

a{
    position: absolute;
    bottom: calc(1rem + 0.8vw);
    text-decoration: none;
    border-radius: 50%;
    padding: .8rem;
    color:${props => props.theme.body};
    background-color:${props => props.theme.text};
    transition: 0.5s ease;
    border: 1px solid ${props => props.theme.body};
}

a:hover{
    color:${props => props.theme.text};
    background-color:${props => props.theme.body};
    border: 1px solid ${props => props.theme.text}
}
`


const AboutPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
            <Box>

            <LogoComponent theme='dark'/>
            <SocialIcons theme='dark'/>
            <PowerButton />
            <ParticleComponent theme='dark'/>

            <Spaceman>
                <img src={astronaut} alt='spaceeman'/>
            </Spaceman>
            <Main>
            Soy un desarrollador front-end ubicado en Argentina. Me encanta crear sitios web simples pero hermosos con una gran experiencia de usuario.
            <br/> <br/>
            Estoy interesado en toda la pila de frontend. Me gusta probar cosas nuevas y construir grandes proyectos. Soy un freelancer independiente y blogger. Me encanta tomar mate y jugar al football.
            <br/> <br/>
            Creo que todo esto es un Arte cuando pones tu mente en esto. Puedes conectarte conmigo a través de enlaces sociales.
            <a href='gerocv.pdf' target='_blank'>Descargar CV</a>
            </Main>
            </Box>
            <BigTitle text="SOBRE MÍ" top='5rem' left='5rem' />
        </ThemeProvider>
    )
}

export default AboutPage