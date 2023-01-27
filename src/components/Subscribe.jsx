import React from 'react'
import './subscribe.css'
import Arrow from '../img/svg/Arrow.svg'

export default function Subscribe() {
  return (
    <div className='subscribe row justify-content-around align-items-center '>
        <div className="subLeft col-6   p-0">
            <h3>Subscribe to our newsletter!</h3>
            <p>Stay updated on the changes we bring to Web3</p>
        </div>
        <div className="subRight col-6  p-0 ">
        <input type="email"  class="form-control " id="exampleFormControlInput1" placeholder="example@example.com" />
        <img src={Arrow} />
        </div>
    </div>
  )
}
