import React, { Component } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

class Amenities extends Component {
    state = {  }
    render() { 
        return ( <div id="amenities">
                        <div className="amenitiesWrapper">
            <h1 data-aos="zoom-out" data-aos-duration="1000"className="amenitiesTitle">AMENITIES</h1>
            <p data-aos="zoom-in" data-aos-duration="1000"className="amenitiesP">Everything you need and more</p>
            <div style={{margin: 200+'px'}} />
             <div className ="container-fluid">
               <div className="row text-center rowThree">
                <div className="col-md-3" data-aos="fade-down" data-aos-duration="1000">
                  <img className="amenitiesImg" src={this.props.iconMeeting} alt="iconMeeting"/>
                  <p>MEETINGS</p>
               </div>
               <div className="col-md-3" data-aos="fade-up" data-aos-duration="1000">
               <img className="amenitiesImg" src={this.props.iconTent} alt="iconTent"/>
                  <p>UTILITY</p>
               </div>
               <div className="col-md-3" data-aos="fade-down" data-aos-duration="1000">
               <img className="amenitiesImg" src={this.props.iconGame} alt="iconGame"/>
                  <p>GAMES/SPORTS</p>
               </div>
               <div className="col-md-3" data-aos="fade-up" data-aos-duration="1000">
               <img className="amenitiesImg" src={this.props.iconBike} alt="iconBike"/>
                  <p>FITNESS</p>
               </div>
              </div>
              <div className="row text-center rowFour">
                <div className="col-md-3" data-aos="fade-up" data-aos-duration="1000">
                <img className="amenitiesImg" src={this.props.iconPaint} alt="iconPaint"/>
                  <p>WELLNESS</p>
               </div>
               <div className="col-md-3" data-aos="fade-down" data-aos-duration="1000">
               <img className="amenitiesImg" src={this.props.iconBaby} alt="iconBaby"/>
                  <p>CHILDREN ZONE</p>
               </div>
               <div className="col-md-3" data-aos="fade-up" data-aos-duration="1000">
               <img className="amenitiesImg" src={this.props.iconTree} alt="iconTree"/>
                  <p>LANDSCAPING</p>
               </div>
               <div className="col-md-3" data-aos="fade-down" data-aos-duration="1000">
               <img className="amenitiesImg" src={this.props.iconPaint} alt="iconPaint"/>
                  <p>RECREATION</p>
               </div>
             </div>
              </div>
            </div>
        </div> );
    }
}
 
export default Amenities;