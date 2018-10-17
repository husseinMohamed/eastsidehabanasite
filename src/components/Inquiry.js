import React, { Component } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

class Inquiry extends Component {
    
    render() { 
        return ( <div id="contact">
            <div className="inquiryWrapper">
              <div data-aos="fade-right" data-aos-duration="900"className="inquiryBanner">
               <h1 data-aos="fade-left" data-aos-duration="1300"className="inquiryTitle">It's family time.</h1>
              </div>
            </div>
            <div className="container" id="form">
             <div className="space"></div>
              <div className="row text-center">
               <div className="col-md-3"></div>
               <div className="col-md-6">
              
               <br />   
               <br />     
     
               <form>
                <div data-aos='fade'className="form-group">
                  <input type="text" className="form-control"  placeholder="Enter Name.." />
                    <br />
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email.." />
                    <br />
                  <input type="text" className="form-control" placeholder="Enter Phone Number.." />
                    <br />
                  <input type="text" className="form-control messageBox" placeholder="Enter Message.." />
                    <br />
                </div>
  
                <div className="form-check">
                 <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">I am not a robot</label>
                     </div><br />
                       <button data-aos='slide-down' type="submit" className="btn formSubmitBtn">Submit</button>
                </form>
                </div>
                 <div className="col-md-3"></div>
                </div>
                   <br />   
                   <br />     
                   <br />  
                   <hr />
                  <a  href="https://www.airbnb.com/rooms/349447?adults=1&children=0&infants=0&guests=1&s=7SsWnG0x"><button data-aos="slide-up" data-aos-duration="1100" className="btn btn-lg bookBtnTwo">Book Now</button></a>
                   <br />  
                   <br /> 
                   <br /> 
                   <br /> 
             </div>
            <div className="footerbanner">
              <p className="signature">by hussein mohamed</p>
            </div>
        </div> );
    }
}
 
export default Inquiry;