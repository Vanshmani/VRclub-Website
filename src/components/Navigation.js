import React from 'react' 
import styled from 'styled-components' 
import Logo from './Logo'  
import hamburger from "./hamburger_icon.png"
const Section =styled.section`  
width:100vw; 
background-color: black;
` 
const Navbar = styled.nav` 
display:flex; 
justify-content:space-between; 
align-items:center; 
width: 85%; 
height:${(props)=>props.theme.navHeight} ;  
margin: 0 auto; 

` 
const Menu=styled.ul` 
display:flex; 
justify-content: space-between; 
align-items: center; 
list-style: none;
` 
const MenuItem=styled.li`  
margin: 0 1rem;  
color:${props=>props.theme.body}; 
cursor: pointer; 
font-size:1.5rem;
/* & here refers to the current parent selector,i.e. meuitem here */
&::after{
  content:'';  
  display: block; 
  width:100%; 
  font-size:1.5rem;



}
&:hover::after{
  width:100%; 
  background:${props=>props.theme.body}; 
  height: 2px; 
  transition:width 0.5s ease; 
}
`
const Navigation = () => {
  return (
    <Section>
  <Navbar>
  <Logo/> 
    {/* the hamburger menu */} 
    <Menu>
      <MenuItem>Home</MenuItem> 
      <MenuItem>Why us</MenuItem> 
      <MenuItem>Club Activities</MenuItem> 
      <MenuItem>Projects</MenuItem> 
     
    </Menu> 
        <img src={hamburger} style={{height:"65px",width:"65px",cursor:"pointer"}}/>
   
  </Navbar>
    </Section>
  )
}

export default Navigation