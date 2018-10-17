import React, { Component } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

class Gallery extends Component {
    state = {  }
    render() { 
        return ( <div id="gallery">
            <div className="container-fluid containerGallery">
             <div className="row">
              <div className="col-md-4 col-sm-12 align-self-start gallery1" data-aos="fade-right" data-aos-duration="1000">
               <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                 <div className="carousel-item active">
                  <img className="d-block w-100" src={this.props.img1} alt="First slide" />
                 </div>
               <div className="carousel-item">
                 <img className="d-block w-100" src={this.props.img2} alt="Second slide" />
               </div>
               <div className="carousel-item">
                <img className="d-block w-100" src={this.props.img3} alt="Third slide" />
              </div>
             </div>
            </div>
         </div>

         <div className="col-md-4 col-sm-12 align-self-center gallery2" data-aos="fade-up" data-aos-duration="1000">
           <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
             <div className="carousel-inner">
               <div className="carousel-item active">
                 <img className="d-block w-100" src={this.props.img4} alt="First slide" />
               </div>
               <div className="carousel-item">
                 <img className="d-block w-100" src={this.props.img5} alt="Second slide" />
               </div>
               <div className="carousel-item">
                 <img className="d-block w-100" src={this.props.img6} alt="Third slide" />
               </div>
             </div>
            </div>
         </div>


         <div className="col-md-4 col-sm-12 align-self-end gallery3" data-aos="fade-left" data-aos-duration="1000">
           <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
             <div className="carousel-inner">
               <div className="carousel-item active">
                 <img className="d-block w-100" src={this.props.img7} alt="First slide" />
               </div>
               <div className="carousel-item">
                 <img className="d-block w-100" src={this.props.img8} alt="Second slide" />
               </div>
               <div className="carousel-item">
                 <img className="d-block w-100" src={this.props.img9} alt="Third slide" />
               </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</div>
 );
    }
}
 
export default Gallery;