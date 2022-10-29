import React from 'react';
import about from "../images/aboutus.webp";

const About = () => {
  return (
    <> 
      <section id="header" className="d-flex about my-lg-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-11 col-lg-10 mx-auto py-2 py-lg-5 my-2 my-lg-5">
              <div className="row flex-row-reverse">
                <div className="col-md-6 order-1 order-lg-2 header-img text-center">
                  <img src={about} className="img-fluid animated w-100" alt="b-img" />
                </div>
                <div className="col-md-6 pt-4 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h2 className="brand-name ">About Us</h2>
                  <p className="">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Numquam maiores ab sunt commodi ipsa sint nostrum corporis voluptatibus ea perspiciatis eligendi assumenda modi est,
                    officia alias, odit possimus quaerat excepturi?
                  </p>
                  <p className="my-3">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Numquam maiores ab sunt commodi ipsa sint nostrum corporis voluptatibus ea perspiciatis eligendi assumenda modi est,
                    officia alias, odit possimus quaerat excepturi?
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Numquam maiores ab sunt commodi ipsa sint nostrum corporis voluptatibus ea perspiciatis eligendi assumenda modi est,
                    officia alias, odit possimus quaerat excepturi?
                  </p>
                  <p className="my-3">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About;
