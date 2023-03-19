import React from "react";
import { NavLink } from 'react-router-dom'
import image from "../images/service-shape.png";
import image1 from "../images/service-shape1.png";
// import image from "../images/Oytie.png";

import styled from "styled-components";
function Dummy() {
  return (
    <Container>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-6 col-lg-3">
            <div className="service-item">
              <i className="flaticon-cloud-storage"></i>
              <h3>
                <span><NavLink to="/Admission">Admission Management</NavLink></span> 
              </h3>
              <p>
                Lorem ipsum dolor sit ametaut odiut perspiciatis unde omnis iste
                quuntur alquam quaerat rsit amet
              </p>
              <img className="img-one" src={image} alt="Shape" />
              <img className="img-two" src={image1} alt="Shape" />
            </div>
          </div>

          <div className="col-sm-6 col-lg-3">
            <div className="service-item">
              <i className="flaticon-clock"></i>
              <h3>
              <span><NavLink to="/Course">Course Management</NavLink></span> 
              </h3>
              <p>
                Lorem ipsum dolor sit ametaut odiut perspiciatis unde omnis iste
                quuntur alquam quaerat rsit amet
              </p>
              <img className="img-one" src={image} alt="Shape" />
              <img className="img-two" src={image1} alt="Shape" />
            </div>
          </div>

          <div className="col-sm-6 col-lg-3">
            <div className="service-item">
              <i className="flaticon-save-time"></i>
              <h3>
              <span><NavLink to="/Student">Student Management</NavLink></span> 
              </h3>
              <p>
                Lorem ipsum dolor sit ametaut odiut perspiciatis unde omnis iste
                quuntur alquam quaerat rsit amet
              </p>
              <img className="img-one" src={image} alt="Shape" />
              <img className="img-two" src={image1} alt="Shape" />
            </div>
          </div>

          <div className="col-sm-6 col-lg-3">
            <div className="service-item">
              <i className="flaticon-administration"></i>
              <h3>
              <span><NavLink to="/Reports">Reports</NavLink></span> 
              </h3>
              <p>
                Lorem ipsum dolor sit ametaut odiut perspiciatis unde omnis iste
                quuntur alquam quaerat rsit amet
              </p>
              <img className="img-one" src={image} alt="Shape" />
              <img className="img-two" src={image1} alt="Shape" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
export default Dummy;
const Container = styled.div`
  .container {
    padding: 10px;
  }
  .service-item {
    margin-bottom: 30px;
    position: relative;
    border-radius: 5px;
    padding: 30px 30px 26px;
    -webkit-box-shadow: 0px 0px 20px 0px #dddddd7a;
    box-shadow: 0px 0px 20px 0px #dddddd7a;
    z-index: 1;
    -webkit-transition: 0.5s all ease;
    transition: 0.5s all ease;
    overflow: hidden;
  }

  .service-item:hover {
    -webkit-transform: translate(0, -10px);
    transform: translate(0, -10px);
  }

  .service-item:hover:before {
    height: 100%;
    opacity: 1;
  }

  .service-item:hover i {
    color: #fff;
  }

  .service-item:hover i:after {
    background-color: #fff;
  }

  .service-item:hover h3 a {
    color: #fff;
  }

  .service-item:hover p {
    color: #fff;
  }

  .service-item:hover .img-one {
    bottom: 0;
    opacity: 0;
  }

  .service-item:hover .img-two {
    opacity: 1;
  }

  .service-item:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 0%;
    bottom: 0;
    left: 0;
    background-color: #2948ff;
    border-radius: 5px;
    -webkit-transition: 0.5s all ease;
    transition: 0.5s all ease;
    z-index: -1;
    opacity: 0;
  }

  .service-item i {
    color: #2948ff;
    font-size: 50px;
    line-height: 50px;
    margin-bottom: 15px;
    display: inline-block;
    -webkit-transition: 0.5s all ease;
    transition: 0.5s all ease;
    position: relative;
    padding-bottom: 18px;
  }

  .service-item i:after {
    position: absolute;
    content: "";
    width: 50px;
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: #2948ff;
    -webkit-transition: 0.5s all ease;
    transition: 0.5s all ease;
  }

  .service-item h3 {
    font-size: 20px;
    margin-bottom: 12px;
  }

  .service-item h3 a {
    color: #221668;
  }

  .service-item h3 a:hover {
    letter-spacing: 1px;
  }

  .service-item p {
    color: #565353;
    -webkit-transition: 0.5s all ease;
    transition: 0.5s all ease;
    margin-bottom: 0;
  }

  .service-item .img-one {
    bottom: -100px;
    right: 0;
    position: absolute;
    z-index: -1;
    -webkit-transition: 0.5s all ease;
    transition: 0.5s all ease;
  }

  .service-item .img-two {
    bottom: -145px;
    right: 0;
    opacity: 0;
    position: absolute;
    z-index: -1;
    -webkit-transition: 0.5s all ease;
    transition: 0.5s all ease;
  }
`;
