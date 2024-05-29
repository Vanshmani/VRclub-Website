import React from 'react' 
import styled from 'styled-components' 
import Vector from '../Icons/Vector' ;  
import gsap from 'gsap'; 
import ScrollTrigger from 'gsap/ScrollTrigger'; 
import { useLayoutEffect } from 'react'; 
import { useRef } from 'react'; 
import { Timeline } from 'gsap/gsap-core'; 
import { Keyframes } from 'styled-components';
const VectorContainer=styled.div` 
position:absolute;  
top:0.5rem; 
left:50%; 
transform:translateX(-50%); 
width:100%; 
height: 100%; 
overflow:hidden;
svg{
width:100%; 
height: 100%; 

}
    


`   
const Ball=styled.div` 
position: absolute; 
top:0rem; 
left:50%; 
transform: translateX(-50%); 
width: 1.5rem; 
height:1.5rem; 
border-radius: 50%;
overflow:hidden; 
background-color: ${props=>props.theme.text};   
`


const DrawSvg = () => { 
    const ref=useRef(null); 
    const ballRef=useRef(null);
    gsap.registerPlugin(ScrollTrigger); 
    useLayoutEffect(() => {
      let element=ref.current; 
      let svg=document.getElementsByClassName("svg-path")[0];  
    //  const length=svg.getBoundingClientRect() 
    const length=svg.getTotalLength(); 
    console.log(length);
//start positioning of the svg drawing 
svg.style.strokeDasharray=length;
//hide svg before scrolling starts 
svg.style.strokeDashoffset=length; 
let t1=gsap.timeline({
    scrollTrigger:{
        trigger:element,
        start:"top center", 
        end:"bottom bottom",
        onUpdate:(self)=>{
            const draw=length*self.progress; 
            //reverse the drwaing when scroll goes up  
            svg.style.strokeDashoffset=length-draw;

        },
        onToggle:self=>{
          if(self.isActive){
            console.log("Scrolling is active"); 
            ballRef.current.style.display="none;"
          } 
          else{
            console.log("Scrolling is not active"); 
            ballRef.current.style.display="inline-block;"
          }
        }
    }
})

    
      return () => { 
        if(t1) t1.kill();
        
      };
    }, [])
  return (  
    <>
    <Ball ref={ballRef}/>
    <VectorContainer ref={ref}>
        <Vector/>
    </VectorContainer> 
    </>
  )
}

export default DrawSvg
