import React from 'react'
import LogoChampagne from '../img/Logo-20230103T103348Z-001/Logo/LogoChampagne.png'
import LogoBlack1 from '../img/Logo-20230103T103348Z-001/Logo/LogoBlack1.png'
import HeroBlackGif from "../img/UI-20230103T103630Z-001/UI/HeroGif/finalsGifs/web/HeroBlackGif.gif"
import mobileHero from "../img/UI-20230103T103630Z-001/UI/HeroGif/finalsGifs/mobile/mobileHero.gif"
import mobileLight from "../img/UI-20230103T103630Z-001/UI/HeroGif/finalsGifs/mobile/mobileLight.gif"

import HeroCreamgif from "../img/UI-20230103T103630Z-001/UI/HeroGif/finalsGifs/web/HeroCreamgif.gif"
import sun from '../img/svg/sun.png'
import moon from '../img/svg/moon.png'
import './home.css'
import LogoSlider from './LogoSlider'
import Subscribe from './Subscribe'
import { Link } from 'react-router-dom'


export default function Home() {
    
let toggelTopbtn=()=>{
    let topbtn= document.getElementById('topbtnimg')
   let imgdiv= document.getElementById('imgdiv')
   let herogif= document.getElementById('herogif')
   let logoimg=document.getElementById('logoimg')
   let mobilegif= document.getElementById("mobilegif")

    if(topbtn.src==sun)
   {
    topbtn.src=moon
    imgdiv.style.backgroundColor="black"
    herogif.src=HeroCreamgif
    logoimg.src=LogoBlack1
    document.getElementsByClassName('changeColor')[0].style.color="black"
    document.getElementsByClassName('changeColor')[1].style.color="black"
    document.getElementsByClassName('changeColor')[2].style.color="black"
    document.getElementsByClassName('changeColor')[3].style.color="black"
    document.getElementsByClassName('changeBtnColor')[0].style.backgroundColor="black"
    document.getElementsByClassName('changeBtnColor')[0].style.color="#F8E4D4"
    
}
else{
    topbtn.src=sun
    imgdiv.style.backgroundColor="#F8E4D4"
    herogif.src=HeroBlackGif
    logoimg.src=LogoChampagne
    document.getElementsByClassName('changeColor')[0].style.color="#F8E4D4"
    document.getElementsByClassName('changeColor')[1].style.color="#F8E4D4"
    document.getElementsByClassName('changeColor')[2].style.color="white"
    document.getElementsByClassName('changeColor')[3].style.color="#F8E4D4"
    document.getElementsByClassName('changeBtnColor')[0].style.backgroundColor="#F8E4D4"
    document.getElementsByClassName('changeBtnColor')[0].style.color="#1b1b1ba0"
   }

   
}

  return (
    <>
    <div className="hero">

      <picture>
      <source id='mobilegif' media='(max-width: 391px)' srcSet={mobileHero}/>
      <img className="heroimg" id='herogif' src={HeroBlackGif} alt="logo" />
      </picture>

      <div className="container">

        <div className="homeNav container row justify-content-between align-items-center mt-3 ">
          <img className="logo col-8" id='logoimg' src={LogoChampagne} alt="Logo" />
          <div className="navLinks col-4 ">
            <Link className='navLink changeColor' to='#'><span >DOCS</span></Link>
            <Link className='navLink changeColor' to='#'><span>COMMUNITY</span></Link>
            <div className="topbtn " id='imgdiv' onClick={toggelTopbtn}><img id='topbtnimg' src={sun} alt="" /></div>
          </div>
        </div>

        <div className="heroTitle ">
          <h1 className='changeColor'><span className='subTitle'>One api that makes NFTs</span> <br /> Affordable & liquid.</h1>
          <p className='changeColor'>Become a bull not a bear, Increase your dapp adoption with dayfi's trailblazingnon-custodial buy now pay later & renting infrastructure.</p>
          <button className='btn btn-light changeBtnColor'>Get early access</button>
        </div>
      </div>
    </div>
    <section className='partners'>
        <div className='container inner'>
            <div className="title">
                <h2 className='text-center'>Dayfi ecosystem partners</h2>
            </div>
            <div className="partnersLogo mt-5 mt-sm-0 mt-md-0">
               <LogoSlider/>
            </div>
        </div>
    </section>
    <footer>
    <div className='subscribeBox'>
    <Subscribe />
    </div>
       
        <div className="fooretTitlebox">
        <h4 className='text-center footerTitle text-light'>Creed : Decentralization : Privacy : Freedom : Sovereignty</h4>
        </div>
        <div className="links">
            <span className="link">Partner with us</span>
            <span className="link">For developers</span>
            <span className="link">Docs & Roadmap</span>
            <span className="link">Brand guidelines / Media kit</span>
            <span className="link lastChild">FAQ</span>
        </div>
        <div className="socilLinks">
        <div className='socialBox'><i class="fa-brands fa-twitter"></i></div>
        <div className='socialBox'><i class="fa-brands fa-linkedin"></i></div>
        <div className='socialBox'><i class="fa-solid fa-comment-dots"></i></div>
        </div>
    </footer>
    </>
  );
}
