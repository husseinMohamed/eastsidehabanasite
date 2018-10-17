import React, { Component } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

class Overview extends Component {
    state = {  }
    render() { 
        return ( <div>
            <section id="overview">
                <div className="wrapperOverview">
                  <h1 className = "overviewText">OVERVIEW</h1> 
                  
                  <div className= "container text-center containerP">
                  <p data-aos="fade" data-aos-duration="1000"className="overviewP">Welcome to the very hip, unique and beautiful Eastside Cabana located in the heart of East Austin. Be close to everything this city has to offer while staying in a modern and airy home with many amenities and unique features.</p>               
                  <p data-aos="fade" data-aos-duration="1000"className="overviewP">Eastside Cabana is located 4 blocks from the northeast corner of lively downtown Austin, 1/4 mile from the University of Texas, 2 blocks from the UT baseball stadium, just across the highway from the UT football stadium, steps from the Frank Erwin Center, a walk or bike ride away from Red River, East 6th St., the "drag", and right in the heart of Austin's vibrant and dynamic east side. Be close to everything this energetic city has to offer - live music, delicious food, tasty drinks, green parks, sunny festivals, historic cemeteries and all longhorn sports. Experience Austin as a local would in one of its oldest neighborhoods but with all the creature comforts of a hotel.</p>
                  </div>
                </div>
            </section>
        </div> );
    }
}
 
export default Overview;