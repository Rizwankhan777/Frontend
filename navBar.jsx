import React from 'react'
import b1 from './images/b1.png';
import b2 from './images/b2.png';
import b3 from './images/b3.png';
import m1 from './images/m1.png';
import m2 from './images/m2.png';
import m3 from './images/m3.png';
import h3 from './images/h3.png';
import h2 from './images/h2.png';
import h1 from './images/h1.png';
import home from './images/home.jpg';
import home2 from './images/home2.jpg';


import b11 from './images/b11.jpg';
import b22 from './images/b22.jpg';
import men from './images/men.png';
import beauty from './images/beauty.png';
import beauty2 from './images/beauty2.png';
import men2 from './images/men2.jpg';
import b4 from './images/b4.png';
import be1 from './images/be1.png';
import be2 from './images/be2.png';
import { IoMdArrowDropdown } from "react-icons/io";



function NavBar() {
  return (
    <section >
    <div className="container-fluid">
      <div className="row">
        <div className="nav col-md-2 ">
          <ul className='all-list'>
           <li className="alldropdown">
            <a className="alldropbtn">ALL CATEGORIES <span className="icon"> <IoMdArrowDropdown/></span>  </a>
            <div className="alldropdown-content">
              <a href="#">
                Electronics and mobile
              </a>
              <a href="#">Beauty & Fragrance </a>
              <a href="#">Fashion</a>
              <a href="#">Home & Kitchen </a>
              <a href="#">Sports & Outdorr</a>
              <a href="#">Toys & Games </a>
              <a href="#">Baby Products</a>
              <a href="#">Health & Nutrition</a>
              <a href="#">Grocery</a>
              <a href="#">Automotive</a>
              <a href="#">Tools & Hoem Imporovement</a>
              <a href="#">Books </a>
              <a href="#">Baby Products</a>
              <a href="#">Pet Supplies</a>
              <a href="#">Stationaery & Office Supplies</a>
              <a href="#">Music Movies & Tv Shows</a>
            </div>
          </li>
          </ul>
          </div>
        <div className="col-md-10">
       <ul className="mylist">
       <li className="mydropdown">
            <a className="mydropbtn">ELECTRONICS</a>
            <div className=" mydropdown-content mynewdropdown-content">
              <div className="row">
                <div className="col-md-2 p-0 " style={{borderTop:"1px solid #d9d9d9"}}>
                    <h5 className='mycontentheading'>Categories</h5>
                  <ul className='elctro-list'>
                    <li>mobile & accessories</li>
                    <li>laptop & computers</li>
                    <li>video & games</li>
                    <li>televisions </li>
                    <li>home appliances </li>
                    <li>speakers </li>
                    <li>ear phones & headhones</li>
                    <li>poer banks </li>
                    <li>wearable devices</li>
                    <li>camera photo & video</li>
                    <li>Tablets & accessories  </li>
                  </ul>

                </div>
                <div className="col-md-4" style={{borderTop:"1px solid #d9d9d9"}}>
                    <h5 className='mycontentheading'>Top Brands</h5>
                  <ul className="elctroImages">
                    <li>
                    <img src={b1} alt="not found"/>
                    </li>
                    <li>
                    <img src={b2} alt="not found"/>
                    </li>
                    <li>
                    <img src={b1} alt="not found"/>
                    </li>
                    <li>
                    <img src={b1} alt="not found"/>
                    </li>
                    <li>
                    <img src={b2} alt="not found"/>
                    </li>
                    <li>
                    <img src={b3} alt="not found"/>
                    </li>
                    <li>
                    <img src={b1} alt="not found"/>
                    </li>
                    <li>
                    <img src={b4} alt="not found"/>
                    </li>
                    <li>
                    <img src={b3} alt="not found"/>
                    </li>
                
                  </ul>
                
                </div>
                <div className="col-md-6" style={{borderTop:"1px solid #d9d9d9"}}>
                <div className='inercontent-main'>
                    <div>
                    <img src={b11} className="image2-large" alt="not found"/>
                    </div>
                  <div>
                  <img src={b22} className="img2min" alt="not found"/>
                  </div>
                    </div>
                  
            
                    </div>
                </div>
              </div>
          
             
           
          
          </li>
          <li className="mydropdown">
            <a className="mydropbtn">MEN</a>
            <div className="men mydropdown-content mynewdropdown-content">
              <div className="row">
                <div className="col-md-2 p-0 " style={{borderTop:"1px solid #d9d9d9"}}>
                    <h5 className='mycontentheading'>Categories</h5>
                  <ul className='elctro-list'>
                    <li>mobile & accessories</li>
                    <li>laptop & computers</li>
                    <li>video & games</li>
                    <li>televisions </li>
                    <li>home appliances </li>
                    <li>speakers </li>
                    <li>ear phones & headhones</li>
                    <li>poer banks </li>
                    <li>wearable devices</li>
                    <li>camera photo & video</li>
                    <li>Tablets & accessories  </li>
                  </ul>

                </div>
                <div className="col-md-4" style={{borderTop:"1px solid #d9d9d9"}}>
                    <h5 className='mycontentheading'>Top Brands</h5>
                  <ul className="elctroImages">
                    <li>
                    <img src={m1} alt="not found"/>
                    </li>
                    <li>
                    <img src={m2} alt="not found"/>
                    </li>
                    <li>
                    <img src={m3} alt="not found"/>
                    </li>
                    <li>
                    <img src={m1} alt="not found"/>
                    </li>
                    <li>
                    <img src={m2} alt="not found"/>
                    </li>
                    <li>
                    <img src={m3} alt="not found"/>
                    </li>
                    <li>
                    <img src={m1} alt="not found"/>
                    </li>
                    <li>
                    <img src={m2} alt="not found"/>
                    </li>
                    <li>
                    <img src={m3} alt="not found"/>
                    </li>
                
                  </ul>
                
                </div>
                <div className="col-md-6" style={{borderTop:"1px solid #d9d9d9"}}>
                <div className='inercontent-main'>
                    <div>
                    <img src={men} className="image2-large" alt="not found"/>
                    </div>
                  <div>
                  <img src={men2} className="img2min" alt="not found"/>
                  </div>
                    </div>
                  
            
                    </div>
                </div>
              </div>
          </li>
          <li className="mydropdown">
            <a className="mydropbtn">WOMEN</a>
            <div className="women mydropdown-content mynewdropdown-content">
              <div className="row">
                <div className="col-md-2 p-0 " style={{borderTop:"1px solid #d9d9d9"}}>
                    <h5 className='mycontentheading'>Categories</h5>
                  <ul className='elctro-list'>
                    <li>mobile & accessories</li>
                    <li>laptop & computers</li>
                    <li>video & games</li>
                    <li>televisions </li>
                    <li>home appliances </li>
                    <li>speakers </li>
                    <li>ear phones & headhones</li>
                    <li>poer banks </li>
                    <li>wearable devices</li>
                    <li>camera photo & video</li>
                    <li>Tablets & accessories  </li>
                  </ul>

                </div>
                <div className="col-md-4" style={{borderTop:"1px solid #d9d9d9"}}>
                    <h5 className='mycontentheading'>Top Brands</h5>
                  <ul className="elctroImages">
                    <li>
                    <img src={b1} alt="not found"/>
                    </li>
                    <li>
                    <img src={b2} alt="not found"/>
                    </li>
                    <li>
                    <img src={b1} alt="not found"/>
                    </li>
                    <li>
                    <img src={b1} alt="not found"/>
                    </li>
                    <li>
                    <img src={b2} alt="not found"/>
                    </li>
                    <li>
                    <img src={b3} alt="not found"/>
                    </li>
                    <li>
                    <img src={b1} alt="not found"/>
                    </li>
                    <li>
                    <img src={b4} alt="not found"/>
                    </li>
                    <li>
                    <img src={b3} alt="not found"/>
                    </li>
                
                  </ul>
                
                </div>
                <div className="col-md-6" style={{borderTop:"1px solid #d9d9d9"}}>
                <div className='inercontent-main'>
                    <div>
                    <img src={b11} className="image2-large" alt="not found"/>
                    </div>
                  <div>
                  <img src={b22} className="img2min" alt="not found"/>
                  </div>
                    </div>
                  
            
                    </div>
                </div>
              </div>
          </li>
          <li className="mydropdown">
            <a className="mydropbtn">HOME</a>
            <div className="home mydropdown-content mynewdropdown-content">
              <div className="row">
                <div className="col-md-2 p-0 " style={{borderTop:"1px solid #d9d9d9"}}>
                    <h5 className='mycontentheading'>Categories</h5>
                  <ul className='elctro-list'>
                    <li>mobile & accessories</li>
                    <li>laptop & computers</li>
                    <li>video & games</li>
                    <li>televisions </li>
                    <li>home appliances </li>
                    <li>speakers </li>
                    <li>ear phones & headhones</li>
                    <li>poer banks </li>
                    <li>wearable devices</li>
                    <li>camera photo & video</li>
                    <li>Tablets & accessories  </li>
                  </ul>

                </div>
                <div className="col-md-4" style={{borderTop:"1px solid #d9d9d9"}}>
                    <h5 className='mycontentheading'>Top Brands</h5>
                  <ul className="elctroImages">
                    <li>
                    <img src={h1} alt="not found"/>
                    </li>
                    <li>
                    <img src={h2} alt="not found"/>
                    </li>
                    <li>
                    <img src={h1} alt="not found"/>
                    </li>
                    <li>
                    <img src={h1} alt="not found"/>
                    </li>
                    <li>
                    <img src={h2} alt="not found"/>
                    </li>
                    <li>
                    <img src={h3} alt="not found"/>
                    </li>
                    <li>
                    <img src={h1} alt="not found"/>
                    </li>
                    <li>
                    <img src={h2} alt="not found"/>
                    </li>
                    <li>
                    <img src={h3} alt="not found"/>
                    </li>
                
                  </ul>
                
                </div>
                <div className="col-md-6" style={{borderTop:"1px solid #d9d9d9"}}>
                <div className='inercontent-main'>
                    <div>
                    <img src={home} className="image2-large" alt="not found"/>
                    </div>
                  <div>
                  <img src={home2} className="img2min" alt="not found"/>
                  </div>
                    </div>
                  
            
                    </div>
                </div>
              </div>
          </li>
          <li className="mydropdown">
            <a className="mydropbtn">BEAUTY & FRAGRANCE</a>
            <div className="beauty mydropdown-content mynewdropdown-content">
              <div className="row">
                <div className="col-md-2 p-0 " style={{borderTop:"1px solid #d9d9d9"}}>
                    <h5 className='mycontentheading'>Categories</h5>
                  <ul className='elctro-list'>
                    <li>mobile & accessories</li>
                    <li>laptop & computers</li>
                    <li>video & games</li>
                    <li>televisions </li>
                    <li>home appliances </li>
                    <li>speakers </li>
                    <li>ear phones & headhones</li>
                    <li>poer banks </li>
                    <li>wearable devices</li>
                    <li>camera photo & video</li>
                    <li>Tablets & accessories  </li>
                  </ul>

                </div>
                <div className="col-md-4" style={{borderTop:"1px solid #d9d9d9"}}>
                    <h5 className='mycontentheading'>Top Brands</h5>
                  <ul className="elctroImages">
                    <li>
                    <img src={be1} alt="not found"/>
                    </li>
                    <li>
                    <img src={be2} alt="not found"/>
                    </li>
                    <li>
                    <img src={be1} alt="not found"/>
                    </li>
                    <li>
                    <img src={be1} alt="not found"/>
                    </li>
                    <li>
                    <img src={be2} alt="not found"/>
                    </li>
                    <li>
                    <img src={be1} alt="not found"/>
                    </li>
                    <li>
                    <img src={be1} alt="not found"/>
                    </li>
                    <li>
                    <img src={be2} alt="not found"/>
                    </li>
                    <li>
                    <img src={be1} alt="not found"/>
                    </li>
                
                  </ul>
                
                </div>
                <div className="col-md-6" style={{borderTop:"1px solid #d9d9d9"}}>
                <div className='inercontent-main'>
                    <div>
                    <img src={beauty} className="image2-large" alt="not found"/>
                    </div>
                  <div>
                  <img src={beauty2} className="img2min" alt="not found"/>
                  </div>
                    </div>
                  
            
                    </div>
                </div>
              </div>
          </li>
          <li className="mydropdown">
            <a className="mydropbtn">BABY & TOYS</a>
            <div className="baby mydropdown-content mynewdropdown-content">
              <div className="row">
                <div className="col-md-2 p-0 " style={{borderTop:"1px solid #d9d9d9"}}>
                    <h5 className='mycontentheading'>Categories</h5>
                  <ul className='elctro-list'>
                    <li>mobile & accessories</li>
                    <li>laptop & computers</li>
                    <li>video & games</li>
                    <li>televisions </li>
                    <li>home appliances </li>
                    <li>speakers </li>
                    <li>ear phones & headhones</li>
                    <li>poer banks </li>
                    <li>wearable devices</li>
                    <li>camera photo & video</li>
                    <li>Tablets & accessories  </li>
                  </ul>

                </div>
                <div className="col-md-4" style={{borderTop:"1px solid #d9d9d9"}}>
                    <h5 className='mycontentheading'>Top Brands</h5>
                  <ul className="elctroImages">
                    <li>
                    <img src={b1} alt="not found"/>
                    </li>
                    <li>
                    <img src={b2} alt="not found"/>
                    </li>
                    <li>
                    <img src={b1} alt="not found"/>
                    </li>
                    <li>
                    <img src={b1} alt="not found"/>
                    </li>
                    <li>
                    <img src={b2} alt="not found"/>
                    </li>
                    <li>
                    <img src={b3} alt="not found"/>
                    </li>
                    <li>
                    <img src={b1} alt="not found"/>
                    </li>
                    <li>
                    <img src={b4} alt="not found"/>
                    </li>
                    <li>
                    <img src={b3} alt="not found"/>
                    </li>
                
                  </ul>
                
                </div>
                <div className="col-md-6" style={{borderTop:"1px solid #d9d9d9"}}>
                <div className='inercontent-main'>
                    <div>
                    <img src={b11} className="image2-large" alt="not found"/>
                    </div>
                  <div>
                  <img src={b22} className="img2min" alt="not found"/>
                  </div>
                    </div>
                  
            
                    </div>
                </div>
              </div>
          </li>
          <li className="mydropdown">
            <a className="mydropbtn">GROCERY</a>
            <div className="grocery mydropdown-content mynewdropdown-content">
              <div className="row">
                <div className="col-md-2 p-0 " style={{borderTop:"1px solid #d9d9d9"}}>
                    <h5 className='mycontentheading'>Categories</h5>
                  <ul className='elctro-list'>
                    <li>mobile & accessories</li>
                    <li>laptop & computers</li>
                    <li>video & games</li>
                    <li>televisions </li>
                    <li>home appliances </li>
                    <li>speakers </li>
                    <li>ear phones & headhones</li>
                    <li>poer banks </li>
                    <li>wearable devices</li>
                    <li>camera photo & video</li>
                    <li>Tablets & accessories  </li>
                  </ul>

                </div>
                <div className="col-md-4" style={{borderTop:"1px solid #d9d9d9"}}>
                    <h5 className='mycontentheading'>Top Brands</h5>
                  <ul className="elctroImages">
                    <li>
                    <img src={b1} alt="not found"/>
                    </li>
                    <li>
                    <img src={b2} alt="not found"/>
                    </li>
                    <li>
                    <img src={b1} alt="not found"/>
                    </li>
                    <li>
                    <img src={b1} alt="not found"/>
                    </li>
                    <li>
                    <img src={b2} alt="not found"/>
                    </li>
                    <li>
                    <img src={b3} alt="not found"/>
                    </li>
                    <li>
                    <img src={b1} alt="not found"/>
                    </li>
                    <li>
                    <img src={b4} alt="not found"/>
                    </li>
                    <li>
                    <img src={b3} alt="not found"/>
                    </li>
                
                  </ul>
                
                </div>
                <div className="col-md-6" style={{borderTop:"1px solid #d9d9d9"}}>
                <div className='inercontent-main'>
                    <div>
                    <img src={b11} className="image2-large" alt="not found"/>
                    </div>
                  <div>
                  <img src={b22} className="img2min" alt="not found"/>
                  </div>
                    </div>
                  
            
                    </div>
                </div>
              </div>
          </li>
          <li className="mydropdown">
            <a className="mydropbtn">SPORTS</a>
            <div className="sports mydropdown-content mynewdropdown-content">
              <div className="row">
                <div className="col-md-2 p-0 " style={{borderTop:"1px solid #d9d9d9"}}>
                    <h5 className='mycontentheading'>Categories</h5>
                  <ul className='elctro-list'>
                    <li>mobile & accessories</li>
                    <li>laptop & computers</li>
                    <li>video & games</li>
                    <li>televisions </li>
                    <li>home appliances </li>
                    <li>speakers </li>
                    <li>ear phones & headhones</li>
                    <li>poer banks </li>
                    <li>wearable devices</li>
                    <li>camera photo & video</li>
                    <li>Tablets & accessories  </li>
                  </ul>

                </div>
                <div className="col-md-4" style={{borderTop:"1px solid #d9d9d9"}}>
                    <h5 className='mycontentheading'>Top Brands</h5>
                  <ul className="elctroImages">
                    <li>
                    <img src={b1} alt="not found"/>
                    </li>
                    <li>
                    <img src={b2} alt="not found"/>
                    </li>
                    <li>
                    <img src={b1} alt="not found"/>
                    </li>
                    <li>
                    <img src={b1} alt="not found"/>
                    </li>
                    <li>
                    <img src={b2} alt="not found"/>
                    </li>
                    <li>
                    <img src={b3} alt="not found"/>
                    </li>
                    <li>
                    <img src={b1} alt="not found"/>
                    </li>
                    <li>
                    <img src={b4} alt="not found"/>
                    </li>
                    <li>
                    <img src={b3} alt="not found"/>
                    </li>
                
                  </ul>
                
                </div>
                <div className="col-md-6" style={{borderTop:"1px solid #d9d9d9"}}>
                <div className='inercontent-main'>
                    <div>
                    <img src={b11} className="image2-large" alt="not found"/>
                    </div>
                  <div>
                  <img src={b22} className="img2min" alt="not found"/>
                  </div>
                    </div>
                  
            
                    </div>
                </div>
              </div>
          </li>
          <li className="seller mydropdown">
            <a className="mydropbtn">BEST SELLERS</a>
            <div className="sellers mydropdown-content">
           
            </div>
          </li>
          <li className="sell mydropdown">
            <a className="mydropbtn">SELL ON NOON</a>
            <div className="sells mydropdown-content">
            
            </div>
          </li>
       </ul>
        </div>
      </div>
    </div>

   
  </section>
  )
}

export default NavBar