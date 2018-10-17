import React, { Component } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

class Specifications extends Component {
    state = {  }
    render() { 
        return ( <div id="specifications">

            <div className="specsWrapper">
            <h1 data-aos="zoom-out" data-aos-duration="1000" className="specTitle">SPECIFICATIONS</h1>
            <p data-aos="fade" data-aos-duration="1000" className="specP">Perfection lies in the details</p>
              <div className="grayBox"></div>
              <div className="container specsBox">
               <div className="row text-center rowOne">
                <div className="col-md-3" data-aos="fade-left" data-aos-duration="1000">
                  <h3>01</h3>
                  <p>LIVING ROOM</p>
               </div>
               <div className="col-md-3" data-aos="fade-left" data-aos-duration="1000">
                  <h3>02</h3>
                  <p>MASTER BEDROOM</p>
               </div>
               <div className="col-md-3" data-aos="fade-right" data-aos-duration="1000">
                  <h3>03</h3>
                  <p>OTHER BEDROOM</p>
               </div>
               <div className="col-md-3" data-aos="fade-right" data-aos-duration="1000">
                  <h3>04</h3>
                  <p>KITCHEN</p>
               </div>
             </div>
             <div className="row text-center rowTwo">
                <div className="col-md-3" data-aos="fade-up-right" data-aos-duration="1000">
                  <h3>05</h3>
                  <p>UTILITY</p>
               </div>
               <div className="col-md-3" data-aos="fade-up" data-aos-duration="1000">
                  <h3>06</h3>
                  <p>BASEMENT</p>
               </div>
               <div className="col-md-3" data-aos="fade-up" data-aos-duration="1000">
                  <h3>07</h3>
                  <p>BALCONY</p>
               </div>
               <div className="col-md-3" data-aos="fade-up-left" data-aos-duration="1000">
                  <h3>08</h3>
                  <p>TOILET</p>
               </div>
             </div>
              </div>
            </div>
        </div> );
    }
}
 
export default Specifications;