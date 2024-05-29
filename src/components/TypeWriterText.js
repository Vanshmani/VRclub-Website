import React from 'react'; 
import styled from 'styled-components'; 
import Typewriter from 'typewriter-effect'; 
import Button from './Button';  
import "@fontsource/open-sans"; 
 
const Title=styled.h2` 
font-size:6rem ; 
text-transform:capitalize;  
width:80%; 
color:white;
align-self:flex-start; 
.text-1{
  color:red; 
  font-family: "Open Sans";
  font-weight: 800;
} 
.text-2{
  color:pink; 
  font-family: "Open Sans";
font-weight:800;
} 
.text-3{
  color:orange; 
  font-family: 'Open Sans';
font-weight:800;
}

`  
const SubTitle=styled.h3` 
font-size:${(props)=>props.theme.fontlg}; 
text-transform: capitalize; 
color:white;
font-weight:600; 
margin-bottom:1rem; 
width:80%; 
align-self:flex-start;
` 
const ButtonContainer=styled.div`  
width:80%; 
align-self:flex-start;
 
`


const TypeWriterText = () => {
  return ( 
    <div style={{marginLeft:"10rem"}}>
    <Title>Welcome to the
        <Typewriter 
        options={{
            autoStart:true, 
            loop:true,
        }}
  onInit={(typewriter) => {
    typewriter
    .typeString(`<span class="text-1">VR Club</span>`)
      .pauseFor(2000)
      .deleteAll()
      .typeString(`<span class="text-2">Virtual Reality</span>`)
      .pauseFor(2000) 
      .deleteAll()
      .typeString(`<span class="text-3">Metaverse</span>`)  
      .pauseFor(2000) 
      .deleteAll()
      .start()


  }} 
  
/>  


    </Title> 
    <SubTitle>Come join us</SubTitle> 
    <ButtonContainer>
    <Button text="Register Now" link="#about" /> 
      </ButtonContainer> 

    </div>
  )
}

export default TypeWriterText 