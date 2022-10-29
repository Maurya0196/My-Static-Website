import React from 'react';
import Banner from "../images/banner.svg";
import Sdata from "./serviceData";
import Card from "./Card";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-11 col-lg-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-4 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>Grow Your Business With <strong className="brand-name ">Moreyeah Teams</strong></h1>
                  <h2 className="my-3">
                    We are the team of telented developer making websites
                  </h2>
                  <div className="mt-3">
                    <NavLink to="/contact" className="btn-get-started">Contact Us</NavLink>
                  </div>
                </div>
                <div className="col-md-6 order-1 order-lg-2 header-img text-center">
                  <img src={Banner} className="img-fluid animated w-100" alt="b-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="h_service">
        <div className="container-fluid my-4 ly-lg-5 pt-0 pt-lg-3">
          <div className="col-11 col-lg-10 mx-auto">
            <div className="">
              <div className="my-4">
                <h2 className="text-center">Our Services</h2>
              </div>
              <div className="col-11 col-lg-10 mx-auto">
                <div className="row gy-3">
                  {Sdata.filter((val, index) => index < 3).map((val, ind) => {
                    return <Card key={ind}
                      imgsrc={val.imgsrc}
                      title={val.title}
                    />
                  })}
                </div>
                <div className="mt-3 text-center">
                    <NavLink to="/service" className="btn-get-started">See All</NavLink>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home;