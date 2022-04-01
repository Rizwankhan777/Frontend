import React from 'react'
import b1 from './images/b1.png';
import b2 from './images/b2.png';
import b11 from './images/b11.jpg';
import b22 from './images/b22.jpg';
import { IoMdArrowDropdown } from "react-icons/io";



function NavBar() {
  return (
    <section style={{backgroundColor:"red"}}>
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-md-2">
          <ul>


           <li className="alldropdown">
            <a className="alldropbtn">ALL CATEGORIES <span className="icon"> <IoMdArrowDropdown/></span>  </a>
            <div className="alldropdown-content">
              <a href="#">
                Electronics and mobile
              
              </a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </li>
          </ul>
          </div>
        <div className="col-md-10">
       <ul className="mylist">
       <li className="mydropdown">
            <a className="mydropbtn">ELECTRONICS</a>
            <div className=" mydropdown-content mynewdropdown-content">

              <div className="container-fluid">
              <div className="row">
                <div className="col-md-2">
                  <ul>
                    <li>mobile</li>
                    <li>laptop</li>
                    <li>video</li>
                    <li>television</li>
                  </ul>

                </div>
                <div className="col-md-4">
                  <ul className="elctroImages">
                    <li>
                    <img src={b1} alt="not found"/>
                    </li>
                    <li>
                    <img src={b2} alt="not found"/>
                    </li>
                    <li>
                    <img src={b11} alt="not found"/>
                    </li>
                    <li>
                    <img src={b1} alt="not found"/>
                    </li>
                    <li>
                    <img src={b2} alt="not found"/>
                    </li>
                
                  </ul>
                
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-8">
                    <img src={b11} className="image2-large" alt="not found"/>
                    </div>
                    <div className="col-md-4">
                    <img src={b22} className="img2min" alt="not found"/>
                    </div>
                    </div>
                </div>
              </div>
              </div>
             
           
            </div>
          </li>
          <li className="mydropdown">
            <a className="mydropbtn">MEN</a>
            <div className="mydropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </li>
          <li className="mydropdown">
            <a className="mydropbtn">WOMEN</a>
            <div className="mydropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </li>
          <li className="mydropdown">
            <a className="mydropbtn">HOME</a>
            <div className="mydropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </li>
          <li className="mydropdown">
            <a className="mydropbtn">BEAUTY & FRAGRANCE</a>
            <div className="mydropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </li>
          <li className="mydropdown">
            <a className="mydropbtn">BABY & TOYS</a>
            <div className="mydropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </li>
          <li className="mydropdown">
            <a className="mydropbtn">GROCERY</a>
            <div className="mydropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </li>
          <li className="mydropdown">
            <a className="mydropbtn">SPORTS</a>
            <div className="mydropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </li>
          <li className="mydropdown">
            <a className="mydropbtn">BEST SELLERS</a>
            <div className="mydropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </li>
          <li className="mydropdown">
            <a className="mydropbtn">SELL ON NOON</a>
            <div className="mydropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
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