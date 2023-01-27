import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import breederDao from '../img/PartnersLogos/PartnersLogo/breederDao.png'
import mooncase from '../img/PartnersLogos/PartnersLogo/mooncase.png'
import oneverse from '../img/PartnersLogos/PartnersLogo/oneverse.png'
import polygon from '../img/PartnersLogos/PartnersLogo/polygon.png'
import polygonStudios from '../img/PartnersLogos/PartnersLogo/polygonStudios.png'
import RegrobGroup from '../img/PartnersLogos/PartnersLogo/RegrobGroup.png'
import SupreaOracles from '../img/PartnersLogos/PartnersLogo/SupreaOracles.png'
import Timespro from '../img/PartnersLogos/PartnersLogo/Timespro.png'
import './logoSlider.css'

export default function LogoSlider() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      cssEase: 'linear',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return (
    
        <Slider {...settings} className='slideContainer'>
        <div className=" LogoStyle"><img src={breederDao} alt="" /></div>
        <div className=" LogoStyle"><img src={mooncase} alt="" /></div>
        <div className=" LogoStyle"><img src={oneverse} alt="" /></div>
        <div className=" LogoStyle"><img src={polygon} alt="" /></div>
        <div className=" LogoStyle"><img src={polygonStudios} alt="" /></div>
        <div className=" LogoStyle"><img src={RegrobGroup} alt="" /></div>
        <div className=" LogoStyle"><img src={SupreaOracles} alt="" /></div>
        <div className=" LogoStyle"><img src={Timespro} alt="" /></div>
        </Slider>
    
  )
}
