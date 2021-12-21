import React, { Component } from "react";
import Footer from "./footer";
import slide1 from '../images/slide1.jpg';
import slide2 from '../images/slide2.jpg';
import slide3 from '../images/slide3.jpg';
class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class="container my-5"  class="bg-light text-dark">
        <h1 class="text-center" >Welcome to Online Customer Service Center</h1> 
        <section>
          <div class="container-fluid">
          <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div className="carousel-item active"  >
      <img src="assets/image30.jpg" width={1300} height={450}  alt="..."></img>
    </div>
    <div className="carousel-item">
      <img src="assets/slide2.jpg" width={1300} height={450}alt="..."></img>
    </div>
    <div className="carousel-item">
      <img src="assets/slide5.jpg" width={1300} height={450} alt="..."></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

          </div>
        </section>
   <Footer/>
      </div>
    

     
    );
  }
}

export default Home;