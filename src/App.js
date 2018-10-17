import React, { Component } from 'react';
import bg from './img/bg1.png';
import FirstSection from './components/FirstSection';
import Overview from './components/Overview';
import Gallery from './components/Gallery';
import './Assets/css/style.css';
import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';
import img3 from './img/img3.jpg';
import img4 from './img/img4.jpg';
import img5 from './img/img5.jpg';
import img6 from './img/img6.jpg';
import img7 from './img/img7.jpg';
import img8 from './img/img8.jpg';
import img9 from './img/img9.jpg';
import Specifications from './components/Specifications';
import Amenities from './components/Amenities';
import iconBike from './img/iconBike.png';
import iconPaint from './img/iconPaint.png';
import iconTent from './img/iconTent.png';
import iconTree from './img/iconTree.png';
import iconBaby from './img/iconBaby.png';
import iconApple from './img/iconApple.png';
import iconMeeting from './img/iconMeeting.png';
import iconGame from './img/iconGame.png';
import Inquiry from './components/Inquiry';
import AOS from 'aos';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FirstSection bg ={bg}/>
        <div style={{margin: 217+'px'}} />
        <Overview />
        <div style={{margin: 50+'px'}} />
        <Gallery img1 ={img1}
                  img2 ={img2}
                  img3 ={img3}
                  img4 ={img4}
                  img5 ={img5}
                  img6 ={img6}
                  img7 ={img7}
                  img8 ={img8}
                  img9 ={img9}/>
        <div style={{margin: 150+'px'}} />
        <Specifications />
       
        <Amenities iconBike ={iconBike}
                    iconPaint={iconPaint}
                    iconTent={iconTent}
                    iconTree={iconTree}
                    iconGame={iconGame}
                    iconMeeting={iconMeeting}
                    iconApple={iconApple}
                    iconBaby={iconBaby}/>
        <div style={{margin: 100+'px'}} />
        <Inquiry />
      </div>
    );
  }
}

export default App;
