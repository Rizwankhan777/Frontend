
import React from 'react';
import imagen1 from './images/n1.jpg';
import imagen2 from './images/n2.png';
import imagen3 from './images/n3.png';
import imagen11 from './images/n11.png';
import imagen22 from './images/n22.png';
import imagen33 from './images/n33.png';
import imagen44 from './images/n44.png';
import imagen55 from './images/n55.png';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function NavSlider() {
  return (
    <div className='container-fluid ' >
        <div className="row">
            <div className="navs col-md-8 ">

<OwlCarousel className='nav-theme owl-theme' loop margin={5}  items={1} nav={false}>
    <div class='item'>
        <div className="navImage">
            <img src={imagen1} alt="" />
        </div>
    </div>
    <div class='item'>
        <div className="navImage">
            <img src={imagen2} alt="" />
        </div>
    </div>
    <div class='item'>
        <div className="navImage">
            <img src={imagen3} alt="" />
        </div>
    </div>
    <div class='item'>
        <div className="navImage">
            <img src={imagen33} alt="" />
        </div>
    </div>
    <div class='item'>
        <div className="navImage">
            <img src={imagen44} alt="" />
        </div>
    </div>
    <div class='item'>
        <div className="navImage">
            <img src={imagen55} alt="" />
        </div>
    </div>
</OwlCarousel>;

            </div>
            <div className="sideImg col-md-4">
                <div className="sideImage">
                    <div className="img1">
                        <img src={imagen11} alt="" />
                    </div>
                    <div className="img2">
                        <img src={imagen22} alt="" />
                    </div>
                    
                </div>

            </div>
        </div>

    </div>
  )
}

export default NavSlider