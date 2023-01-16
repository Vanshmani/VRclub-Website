import React from 'react' 
import styled from 'styled-components'  
import img1 from '../../assets/Nfts/bighead-7.svg';
import img2 from '../../assets/Nfts/bighead-1.svg'; 
import img3 from '../../assets/Nfts/bighead-2.svg'; 
import img4 from '../../assets/Nfts/bighead-3.svg';
import img5 from '../../assets/Nfts/bighead-4.svg'; 
import img6 from '../../assets/Nfts/bighead-5.svg'; 
import img7 from '../../assets/Nfts/bighead-6.svg'; 
import img8 from '../../assets/Nfts/bighead-8.svg'; 
import img9 from '../../assets/Nfts/bighead-9.svg'; 
const Section=styled.section` 
min-height: 100vh; 
width:100vw; 
background-color: ${props=>props.theme.body};  

position:relative;  

` 
const Title=styled.h1` 
font-size: ${(props)=>props.theme.fontxxl}; 
text-transform: capitalize; 
color:${(props)=>props.theme.text}; 
justify-content:center; 
align-items: center;  
margin:1rem auto; 
border-bottom:2px solid ${(props)=>props.theme.text};  
width:fit-content;  
padding-top:1.5rem; 
`   
const Container=styled.div` 
width: 75%; 
margin:2rem auto; 
justify-content:space-around ;  
align-items: center;  
flex-wrap: wrap; 

`  
const ImgContainer=styled.div` 
width:15rem; 
margin:0 auto; 
border-radius:20px;  
background-color: ${props=>props.theme.body};
cursor:pointer; 
img{ 
  width:100%;  
  height: auto;
}
` 
const Item=styled.div` 
width:calc(20rem- 4vw); 
padding:1rem 0; 
color:${props=>props.theme.body}; 
margin:2rem 1rem; 
position:relative; 
`
const MemberComponent=({img, Name="",position=" "})=>{
  return(
    <Item>
      <ImgContainer>
        <img src={img} alt={Name}/>
      </ImgContainer>
    </Item>
  )
}


const Team = () => {
  return ( 
    <>
    <Section>
      <Title>Team</Title>
      </Section> 
      <Container>
        <MemberComponent img={img1}/> 
        <MemberComponent img={img1}/> 
        <MemberComponent img={img1}/> 
        <MemberComponent img={img1}/> 
        <MemberComponent img={img1}/>  
        <MemberComponent img={img1}/>  
        <MemberComponent img={img1}/>  
        <MemberComponent img={img1}/> 
      </Container> 
      </>
  )
}

export default Team