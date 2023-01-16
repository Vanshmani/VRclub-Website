import React from 'react'
import styled from 'styled-components'  
import DrawSvg from '../DrawSvg' 
import { useRef } from 'react'  
import { useLayoutEffect } from 'react' 
import gsap from 'gsap' 
import ScrollTrigger from 'gsap/ScrollTrigger' 

const Section=styled.section` 
min-height: 100vh; 
width:100vw; 
background-image:url("./roadmap_bg.png"); 
background-repeat: no-repeat;
background-size: cover; 
position:relative;   
background-position : center;

` 
const Title=styled.h1` 
font-size: ${(props)=>props.theme.fontxxl}; 
text-transform: capitalize; 
color:${(props)=>props.theme.text}; 
justify-content:center; 
align-items: center;  
margin:0rem auto; 
width:fit-content;  
padding-top:1.5rem; 



 
`  
const Container=styled.div` 
width:70%; 
height:200vh; 
/* background-color:  ${(props)=>props.theme.body};   */

margin:0 auto; 
display: flex; 
justify-content: center; 
align-items: center; 
position:relative;
` 
const SvgContainer=styled.div` 
display: flex; 
justify-content: center; 
align-items: center;
` 
const Items=styled.ul`  
list-style:none; 
width:100%; 
height:100%; 
display:flex;
flex-direction: column; 
justify-content: center; 
align-items: center;  
/* //place odd and even elements accordingly */ 
/* &>*refers to all direct children of the item component */
&>*:nth-of-type(2n+1){
  justify-content: start;  
  text-align: right;  
  
  
}  
&>*:nth-of-type(2n){
  justify-content: end; 
  text-align: left;
}

` 
const Item=styled.li` 
width:100%;  
height: 100%; 
display: flex; 
`  
const ItemContainer=styled.div` 
width:40%; 
height:fit-content; 
padding:1rem; 
border:2px solid ${props=>props.theme.text};  
border-radius: 30px; 
backdrop-filter: blur(3rem);

`  
const Box=styled.p` 
height: fit-content;  

background-color:black;
color:white; 
padding:1rem; 
position: relative; 
border:1px solid ${props=>props.theme.text}; 
border-radius: 30px;
`  
const Subtitle=styled.span`  
display:inline-block; 
font-size: ${props=>props.theme.fontxl}; 
text-transform: capitalize; 
color:white;  
padding:2rem;


` ;
const Text=styled.span` 
display:inline-block; 
font-size: ${props=>props.theme.fontsm}; 
text-transform: capitalize; 
color:white; 
font-weight: 400; 
margin:0.5rem 0;
` 

//creating a function and destructuring
const  RoadMapItem=({title,subtext,id})=>{ 
  const revealRefs=useRef([]); 
  revealRefs.current=[]; 
  gsap.registerPlugin(ScrollTrigger);
  const addToRefs=(el)=>{
    if(el&&!revealRefs.current.includes(el)){
      revealRefs.current.push(el);
    }
  } 
  useLayoutEffect(() => {  
    let t1=gsap.timeline();
    revealRefs.current.forEach((el,index)=>{
        t1.fromTo(
          el.childNodes[0],
          {
            y:'0'
          },{
            y:"-30%",
            scrollTrigger:{
              id:`section-${index+1}`, 
              trigger:el, 
              start:"top center+=200px",
              end:"bottom center",
              scrub:true, 
              // markers:true,


            }
          }
        )
    })
    console.log(revealRefs)
  
    return () => {
      
    };
  }, [])
  return( 
    // the elememts inside the list
    <Item ref={addToRefs}>
      <ItemContainer>
      <Box> 
      <Subtitle> 
      {title}
      </Subtitle> 
      <Text> 
      {subtext}
      </Text>
      </Box>

      </ItemContainer>
    </Item>
  )
}
const Roadmap = () => {
  return (
   <Section>
    <Title>
      Club Activities
    </Title> 
    <Container>
<SvgContainer>
<DrawSvg/>
</SvgContainer> 
<Items>   
{/* //susbstitute for app margin and padding,empty container */}
<Item>&nbsp;</Item> 
<RoadMapItem  title="This is title" subtext="this is sub dummy text" id={1}  /> 
<RoadMapItem title="This is title" subtext="this is sub text" id={2} /> 
<RoadMapItem  title="This is title" subtext="this is sub text" id={3} /> 
<RoadMapItem  title="This is title" subtext="this is sub text" id={4}/> 
<RoadMapItem title="This is title" subtext="this is sub text" id={5} /> 
<RoadMapItem title="This is title" subtext="this is sub text" id={6} />

</Items>
    </Container>
   </Section>
  )
}

export default Roadmap