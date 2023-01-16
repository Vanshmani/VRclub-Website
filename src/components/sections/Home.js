import React from 'react'; 
import styled, { keyframes } from 'styled-components'; 
import TypeWriterText from '../TypeWriterText'; 
import Navigation from '../Navigation'; 
import main_img from "../../assets/homepage_img.png" 
const Wrapper=styled.div` 


`
const Section=styled.section` 
min-height:${props=>`calc(100vh-${props.theme.navHeight})`}; 
width:100vw; 
position:relative; 
/* background-color:${props=>props.theme.body}; */  
background-image:url("./bg_home.png.jpg"); 
background-repeat: no-repeat;
   background-size: cover; 
   

`  
const Container=styled.div` 
width:75%; 
min-height: 80vh; 
margin:0 auto; 
/* background-color: lightblue;  */
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
const rotate=keyframes` 
100%{
  transform:rotate(1turn);
}
`


const Home = () => {
  return (  
    <Wrapper className='wrapper'>
    <Navigation/>
    <Section>
      <Container> 
        
        <Box><img src={main_img} style={{height:"975px",width:"975px",marginRight:"15rem"}}/></Box>  
        <Box><TypeWriterText /></Box>
    

      </Container> 
      
    </Section> 
    </Wrapper>
  )
}

export default Home