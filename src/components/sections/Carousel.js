import React from 'react';  
import styled from 'styled-components';
import { Swiper, SwiperSlide } from "swiper/react"; 
import "swiper/css";
import "swiper/css/effect-cards"; 
import "swiper/css/pagination"; 
import "swiper/css/navigation";

import { Pagination,Navigation,Autoplay,EffectCards } from "swiper"; 
import img2 from '../../assets/Nfts/1.png'; 
import img3 from '../../assets/Nfts/2.png'; 
import img4 from '../../assets/Nfts/3.png';
import img5 from '../../assets/Nfts/4.png'; 
import img6 from '../../assets/Nfts/5.png'; 
import img7 from '../../assets/Nfts/6.png'; 



const Container=styled.div` 
width:25vw; 
height:70vh; 
.swiper{
    width:100%; 
    height: 100%; 

} 
.swiper-slide{
    background-color:${props=>props.theme.carouselColor};  

    border-radius:20px  ; 
    display:flex; 
    justify-content: center; 
    align-items: center; 
  img{ 
    width:500px; 
    height:500px;
  }

} 
.swiper-button-next{ 
    color:black; 


} 
&::after{
    display: none;
} 
.swiper-button-prev{ 
    color:black; 


} 
&::after{
    display: none;
}
`

const Carousel = () => {
  return (
    <Container> 
         <Swiper 
         autoplay={{
            delay:2000,
            disableOnInteraction:false,
         }} 
         pagination={{
            type:'fraction', 

         }} 
         scrollbar={{
            draggable:true,
         }}
         navigation={true}
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards,Pagination,Navigation,Autoplay]}
        className="mySwiper"
      >
        
        <SwiperSlide><img src={img2}/></SwiperSlide>
        <SwiperSlide><img src={img3}/></SwiperSlide>
        <SwiperSlide><img src={img4}/></SwiperSlide>
        <SwiperSlide><img src={img5}/></SwiperSlide>
        <SwiperSlide><img src={img6}/></SwiperSlide>
        <SwiperSlide><img src={img7}/></SwiperSlide>

      </Swiper>
    </Container>
  )
}

export default Carousel