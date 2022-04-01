import React from 'react'
import imagec1 from './images/c1.png';
import imagec2 from './images/c2.png';

function CreditCard() {
  return (
    <div className='container card-img' style={{minWidth:"1500px"}}>
        <div className="row">
           <div className="col-md-12">
           <img src={imagec1} className="img-fluid" alt="" />
                <img src={imagec2} className="img-fluid" alt="" />
           </div>
       </div>
                
        
    </div>
  )
}

export default CreditCard