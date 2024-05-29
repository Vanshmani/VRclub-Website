import React from 'react'
import styled, { ThemeProvider } from 'styled-components'  
import Button from '../Button'
import Carousel from './Carousel' 
import {dark} from '../../styles/Themes' 

const Section=styled.section` 
min-height:100%; 
width:100%; 
background-color:${props=>props.theme.text}; 
display:flex; 
justify-content: center; 
align-items: center; 
position: relative; 
padding-top:1.5rem; 
padding-bottom: 1.5rem;
`  
const Title=styled.h2` 
font-size:${props=>props.theme.fontxxl} ; 
text-transform:capitalize;  
width:80%; 
color:${props=>props.theme.body};
align-self:flex-start;  
margin:0 auto; 
padding: 1.5rem;
` 
const SubText=styled.p` 
font-size:${props=>props.theme.fontlg} ; 
margin: 1.5rem auto; 
font-weight: 400;
width:80%; 
color:${props=>props.theme.body};
align-self:flex-start; 
` 
const SubTextLight=styled.p` 
font-size:${props=>props.theme.fontlg} ; 
margin: 1rem auto; 
font-weight: 400;
width:80%; 
color:white;
align-self:flex-start; 
`

const Container=styled.div` 
width:75%;  
margin:0 auto; 
display: flex; 
justify-content: center; 
align-items: center;
` 
const Box=styled.div` 
width:50%; 
height:100%; 
display:flex;
flex-direction:column; 
justify-content: center; 
align-items: center; 
`
const About = () => {
  return (
    <Section>
            <Container>
        <Box><Carousel/></Box>
        <Box>
          <Title>
          Why choose us
          </Title> 
          <SubText>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining. 
          </SubText> 
          <ThemeProvider theme={dark}>
          <Button text="REGISTER WITH US" link="#"/>
           
          </ThemeProvider>
          
          
        </Box>
       

      </Container> 
      
    </Section>
  )
}

export default About