import React, { Component } from 'react';
import $ from 'jquery';
import AOS from 'aos';
import 'aos/dist/aos.css';

class FirstSection extends Component {

componentDidMount = () => {
    $('ul').hover(
        function(){
            $(this).animate({
                marginTop: "-=1%",
            },200);
        },
        function(){
            $(this).animate({
                marginTop: "0%"
            },200);
        }
      );
     }
    
 render() { 
      return ( 
            <div>
             <section>
                  <div className = "background">
                    <div className="bgSection">
                     <img data-aos='fade' className = "bg" src={this.props.bg} alt="background img"/>
                     <a href="https://www.airbnb.com/rooms/349447?adults=1&children=0&infants=0&guests=1&s=7SsWnG0x"><button className="btn btn-lg bookBtn">Book</button></a>
                      <div className="bgText">
                        <h1 data-aos='zoom-out-up' className="bgTitle">Eastside Cabana</h1>
                         <p data-aos='zoom-in'className ="bgP"><span>100+ </span> Families have booked</p>
                      </div>
         
                    <div className="container navContainer " >
                       <nav>
                          <ul>
                              <li data-aos='fade-down-right' data-aos-duration="1000"className="navLi1"><a href ="#overview">OVERVIEW</a></li>
                              <li data-aos='fade-up' data-aos-duration="1000"className="navLi"><a href ="#gallery">GALLERY</a></li>
                              <li data-aos='fade-down'data-aos-duration="1000"className="navLi"><a href ="#specifications">SPECIFICATION</a></li>
                              <li data-aos='fade-up'data-aos-duration="1000"className="navLi"><a href ="#amenities">AMENITIES</a></li>
                              <li data-aos='fade-down-left'data-aos-duration="1000"className="navLi"><a href ="#contact">CONTACT</a></li>
                          </ul>
                      </nav>
                    
                    </div>
                
                   
                  </div>
               
                </div>
             </section>
     
           </div>
         );
    }
}
 
export default FirstSection;