import React, { useRef } from 'react' 
import styled from 'styled-components'  
import img2 from '../../assets/Nfts/1.png'; 
import img3 from '../../assets/Nfts/2.png'; 
import img4 from '../../assets/Nfts/3.png';
import img5 from '../../assets/Nfts/4.png'; 
import img6 from '../../assets/Nfts/5.png'; 
import img7 from '../../assets/Nfts/6.png'; 

import { keyframes } from 'styled-components' 
// import { useRef } from 'react';
const Section=styled.section` 
min-height: 100vh; 
width:100vw; 
background-color: ${props=>props.theme.text};  
display: flex; 
flex-direction: column; 
justify-content: center; 
align-items: center;
position:relative;  

` 
const Title=styled.h1` 
font-size: ${(props)=>props.theme.fontxxl}; 
text-transform: capitalize; 
color:${(props)=>props.theme.body}; 
justify-content:center; 
align-items: center;  
margin:1rem auto;  
padding-top:0.5rem;
border-bottom:2px solid ${(props)=>props.theme.body};  
width:fit-content;  

 
// `    
const move=keyframes`  


0%{
  margin-left:0%;
} 
100%{
  margin-left: 100%;
}
`
const Row=styled.div`  
position:relative;
white-space: nowrap; 
box-sizing: content-box;
margin:2rem 0;  
display: flex;   
animation: ${move} 5s ease-in-out infinite ${props=>props.direction};

`  
const ImgContainer=styled.div` 
width:15rem; 
margin:0 1rem; 
/* border-radius:20px;   */
/* background-color: ${props=>props.theme.body};  */
cursor:pointer; 
img{ 
  width:100%;  
  height: auto; 

} 
`  


const NftItem=({img,passRef})=>{  
  let play=(e)=>{
    passRef.current.style.animationPlayState="running"
  } 
  let pause=(e)=>{
    passRef.current.style.animationPlayState="paused"
  }

  return(
    <ImgContainer onMouseOver={e=>pause(e)} onMouseOut={e=>play(e)}> 
    <img src={img} alt="The Wierdos" />
    </ImgContainer>
  )
}
const Showcase = () => { 
  const Row1Ref=useRef(null);
  const Row2Ref=useRef(null);
  return (
    <Section>
      <Title>
      Our Projects
      </Title> 
      <Row direction="none" ref={Row1Ref}>
        <NftItem img={img7} passRef={Row1Ref}/> 
        <NftItem img={img2} passRef={Row1Ref}/> 
        <NftItem img={img3} passRef={Row1Ref}/>
        <NftItem img={img4} passRef={Row1Ref}/> 
        <NftItem img={img5} passRef={Row1Ref}/> 
        <NftItem img={img6} passRef={Row1Ref}/>
      </Row> 
      <Row direction="reverse" ref={Row2Ref}>
        <NftItem img={img7} passRef={Row2Ref}/>
        <NftItem img={img2} passRef={Row2Ref}/>
        <NftItem img={img3} passRef={Row2Ref}/>
        <NftItem img={img4} passRef={Row2Ref}/> 
        <NftItem img={img5} passRef={Row2Ref}/> 
        <NftItem img={img6} passRef={Row2Ref}/>
      </Row>
     
     
      </Section>
  )
}

export default Showcase