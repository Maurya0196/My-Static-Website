import React, { useState } from 'react'

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `
      My Name is ${ data.fullname }. 
      My Mobile number is ${ data.phone }
      My Email address is ${ data.email } 
      Here is what I want to say ${data.msg} `);
   };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_hold">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto mb-5">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter Your Name"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent} required />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input type="text" className="form-control" id="phone" placeholder="Enter Mobile Number"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent} required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="Enter Your Email"
                  name="email"
                  value={data.email}
                  onChange={InputEvent} required />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                  placeholder="Message"></textarea>
              </div>
              <div className="col-12 mb-3">
                <button className="btn btn-outline-primary" type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;