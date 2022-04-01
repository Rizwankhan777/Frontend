import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import image1 from './images/p1.webp';
import image2 from './images/p2.webp';
import image3 from './images/p3.webp';
import image4 from './images/p4.webp';
import image5 from './images/p5.webp';
import image6 from './images/p6.webp';
import image7 from './images/p7.webp';
import image8 from './images/p8.webp';
import image9 from './images/p9.webp';
import image10 from './images/p10.webp';
import image11 from './images/p11.webp';
import image12 from './images/p12.webp';
import { AiFillStar } from 'react-icons/ai';
import RecomendHeading from './recomendHeading';



function productSlider() {
  return (
   <div className='container' style={{minWidth:"1500px"}}>
       
        <div className="row">
            <div className="col-md-12">
                <RecomendHeading/>
            </div>
        </div>

<OwlCarousel className='owl-theme' loop={true} dots={false} margin={5} nav={false} items="7">
    <div class='item'>
        <p className='image-tag'>10% off up to 50 | Use code: SAV...</p>
     <div className='image'>
         <img src={image1} alt="" />
     </div>
     <div className="content">
     <p className='info'>
     T500 Bluetooth Full <br/>
     Touch Call Smartwatch …</p>
     <p className='aed-price'>AED <span>37.00</span></p>
     <p><span className='line-through'>AED 99</span> <span className='discount'>50% OFF</span></p>
     <p className='arrives'><span >Arrives </span> <span className='dates'>Mon, Apr 4</span></p>
     <div className="rating">
         <p className='express'>express</p>
         <p><span className='main-rating mb-2'><AiFillStar/> </span > <span className='main-rating'>4.1</span> <span className='people'>(406)</span></p>
     </div>
     </div>

    </div>
    <div class='item'>
    
    <div className='image'>
    <p className='image-tag'>10% off up to 50 | Use code: SAV...</p>
         <img src={image2} alt="" />
     </div>
     <div className="content">
     <p className='info'>
     Apple iPhone 13 Pro Max <br/> 256GB Sierra Blue 5G  </p>
     <p className='aed-price'>AED <span>3266.00</span></p>
     <p><span className='line-through'>AED 99</span> <span className='discount'>25% OFF</span></p>
     <p className='arrives'><span >Arrives </span> <span className='dates'>Mon, Apr 4</span></p>
     <div className="rating">
         <p className='express'>express</p>
         <p><span className='main-rating mb-2'><AiFillStar/> </span > <span className='main-rating'>4.1</span> <span className='people'>(406)</span></p>
     </div>
     </div>
  

    </div>
    <div class='item'>
    <p className='image-tag'>10% off up to 50 | Use code: SAV...</p>
     <div className='image'>
         <img src={image3} alt="" />
     </div>
     <div className="content">
     <p className='info'>
     Apple iPhone 13 Pro Max <br/> 256GB Sierra Blue 5G  </p>
     <p className='aed-price'>AED <span>266.00</span></p>
     <p><span className='line-through'>AED 99</span> <span className='discount'>15% OFF</span></p>
     <p className='arrives'><span >Arrives </span> <span className='dates'>Mon, Apr 4</span></p>
     <div className="rating">
         <p className='express'>express</p>
         <p><span className='main-rating mb-2'><AiFillStar/> </span > <span className='main-rating'>4.1</span> <span className='people'>(406)</span></p>
     </div>
     </div>

    </div>
    <div class='item'>
     <div className='image'>
         <img src={image4} alt="" />
     </div>
     <div className="content">
     <p className='info'>
     Apple iPhone 13 Pro Max <br/> 256GB Sierra Blue 5G  </p>
     <p className='aed-price'>AED <span>456.00</span></p>
     <p><span className='line-through'>AED 99</span> <span className='discount'>20% OFF</span></p>
     <p className='arrives'><span >Arrives </span> <span className='dates'>Mon, Apr 4</span></p>
     <div className="rating">
         <p className='express'>express</p>
         <p><span className='main-rating mb-2'><AiFillStar/> </span > <span className='main-rating'>4.1</span> <span className='people'>(406)</span></p>
     </div>
     </div>

    </div>
    <div class='item'>
    <p className='image-tag'>10% off up to 50 | Use code: SAV...</p>
     <div className='image'>
         <img src={image5} alt="" />
     </div>
     <div className="content">
     <p className='info'>
     Apple iPhone 13 Pro Max <br/> 256GB Sierra Blue 5G  </p>
     <p className='aed-price'>AED <span>643.00</span></p>
     <p><span className='line-through'>AED 99</span> <span className='discount'>22% OFF</span></p>
     <p className='arrives'><span >Arrives </span> <span className='dates'>Mon, Apr 4</span></p>
     <div className="rating">
         <p className='express'>express</p>
         <p><span className='main-rating mb-2'><AiFillStar/> </span > <span className='main-rating'>4.1</span> <span className='people'>(406)</span></p>
     </div>
     </div>

    </div>
    <div class='item'>
     <div className='image'>
         <img src={image6} alt="" />
     </div>
     <div className="content">
     <p className='info'>
     Apple iPhone 13 Pro Max <br/> 256GB Sierra Blue 5G  </p>
     <p className='aed-price'>AED <span>234.00</span></p>
     <p><span className='line-through'>AED 99</span> <span className='discount'>30% OFF</span></p>
     <p className='arrives'><span >Arrives </span> <span className='dates'>Mon, Apr 4</span></p>
     <div className="rating">
         <p className='express'>express</p>
         <p><span className='main-rating mb-2'><AiFillStar/> </span > <span className='main-rating'>4.1</span> <span className='people'>(406)</span></p>
     </div>
     </div>

    </div>
    <div class='item'>
     <div className='image'>
         <img src={image7} alt="" />
     </div>
     <div className="content">
     <p className='info'>
     Apple iPhone 13 Pro Max <br/> 256GB Sierra Blue 5G  </p>
     <p className='aed-price'>AED <span>37.00</span></p>
     <p><span className='line-through'>AED 99</span> <span className='discount'>40% OFF</span></p>
     <p className='arrives'><span >Arrives </span> <span className='dates'>Mon, Apr 4</span></p>
     <div className="rating">
         <p className='express'>express</p>
         <p><span className='main-rating mb-2'><AiFillStar/> </span > <span className='main-rating'>4.1</span> <span className='people'>(406)</span></p>
     </div>
     </div>

    </div>
    <div class='item'>
     <div className='image'>
     <p className='image-tag'>10% off up to 50 | Use code: SAV...</p>
         <img src={image8} alt="" />
     </div>
     <div className="content">
     <p className='info'>
     Apple iPhone 13 Pro Max <br/> 256GB Sierra Blue 5G  </p>
     <p className='aed-price'>AED <span>37.00</span></p>
     <p><span className='line-through'>AED 99</span> <span className='discount'>50% OFF</span></p>
     <p className='arrives'><span >Arrives </span> <span className='dates'>Mon, Apr 4</span></p>
     <div className="rating">
         <p className='express'>express</p>
         <p><span className='main-rating mb-2'><AiFillStar/> </span > <span className='main-rating'>4.1</span> <span className='people'>(406)</span></p>
     </div>
     </div>

    </div>
    <div class='item'>
    <p className='image-tag'>10% off up to 50 | Use code: SAV...</p>
     <div className='image'>
         <img src={image9} alt="" />
     </div>
     <div className="content">
     <p className='info'>
     Apple iPhone 13 Pro Max <br/> 256GB Sierra Blue 5G  </p>
     <p className='aed-price'>AED <span>37.00</span></p>
     <p><span className='line-through'>AED 99</span> <span className='discount'>40% OFF</span></p>
     <p className='arrives'><span >Arrives </span> <span className='dates'>Mon, Apr 4</span></p>
     <div className="rating">
         <p className='express'>express</p>
         <p><span className='main-rating mb-2'><AiFillStar/> </span > <span className='main-rating'>4.1</span> <span className='people'>(406)</span></p>
     </div>
     </div>

    </div>
    <div class='item'>
     <div className='image'>
         <img src={image10} alt="" />
     </div>
     <div className="content">
     <p className='info'>
     Apple iPhone 13 Pro Max <br/> 256GB Sierra Blue 5G  </p>
     <p className='aed-price'>AED <span>37.00</span></p>
     <p><span className='line-through'>AED 99</span> <span className='discount'>40% OFF</span></p>
     <p className='arrives'><span >Arrives </span> <span className='dates'>Mon, Apr 4</span></p>
     <div className="rating">
         <p className='express'>express</p>
         <p><span className='main-rating mb-2'><AiFillStar/> </span > <span className='main-rating'>4.1</span> <span className='people'>(406)</span></p>
     </div>
     </div>

    </div>
    <div class='item'>
     <div className='image'>
     <p className='image-tag'>10% off up to 50 | Use code: SAV...</p>
         <img src={image11} alt="" />
     </div>
     <div className="content">
     <p className='info'>
     Apple iPhone 13 Pro Max <br/> 256GB Sierra Blue 5G  </p>
     <p className='aed-price'>AED <span>37.00</span></p>
     <p><span className='line-through'>AED 99</span> <span className='discount'>40% OFF</span></p>
     <p className='arrives'><span >Arrives </span> <span className='dates'>Mon, Apr 4</span></p>
     <div className="rating">
         <p className='express'>express</p>
         <p><span className='main-rating mb-2'><AiFillStar/> </span > <span className='main-rating'>4.1</span> <span className='people'>(406)</span></p>
     </div>
     </div>

    </div>
    <div class='item'>
    <p className='image-tag'>10% off up to 50 | Use code: SAV...</p>
     <div className='image'>
         <img src={image12} alt="" />
     </div>
     <div className="content">
     <p className='info'>
     Apple iPhone 13 Pro Max <br/> 256GB Sierra Blue 5G  </p>
     <p className='aed-price'>AED <span>37.00</span></p>
     <p><span className='line-through'>AED 99</span> <span className='discount'>40% OFF</span></p>
     <p className='arrives'><span >Arrives </span> <span className='dates'>Mon, Apr 4</span></p>
     <div className="rating">
         <p className='express'>express</p>
         <p><span className='main-rating mb-2'><AiFillStar/> </span > <span className='main-rating'>4.1</span> <span className='people'>(406)</span></p>
     </div>
     </div>

    </div>
</OwlCarousel>;


</div>
  )
}

export default productSlider