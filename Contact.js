import React from 'react';
import banner from '../Assets/UUIT COLLEGE BANNER.png';



class contact extends React.Component {
  render() {
    return (
          <>

      {/* Slider starts */}
<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner" id="carousel">
    <div className="carousel-item active">
      <div id="carousel-img-contact">
        <img
          src={banner}
          className="d-block w-100 img-fluid"
          style={{ maxHeight: '350px', objectFit: 'cover' }}
          alt="Contact Banner"
        />
      </div>
      <div className="carousel-content position-absolute top-50 start-50 translate-middle text-center w-100 px-3">
        <div
          className="carousel-inner2 animate__animated animate__fadeInUp"
          id="text-top-contact"
        >
          <h1 className="carousel-heading display-5 fw-bold text-dark">Contact Us</h1>
          <div className="fs-6 mt-2">
            <a
              href="/"
              className="text-dark"
              style={{ textDecoration: "none" }}
            >
              Home ⯈
            </a>
            <a
              href="/contact"
              className="text-dark ms-1"
              style={{ textDecoration: "none" }}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Carousel controls */}
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="prev"
  >
    <span className="" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="next"
  >
    <span className="" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
{/* Slider ends */}



      {/*  contact details starts */}
      <div id="contactbg">
        <section>
          <div className="row justify-content-center ">
            <div className="col-lg-4 col-sm-12 col-md-12 px-5 shadow p-3 mb-5 contact-box">
              <div className="d-flex py-5">
                <i
                  className="fa fa-envelope"
                  style={{ fontSize: 36, color: "rgb(186, 99, 212)" }}
                />
                <div className="mx-3 ">
                  <div className="fw-bold">Mail Address</div>
                  <div>info@uiiteducation.in</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 col-md-12 px-5 shadow p-3 mb-5 contact-box">
              <div className="d-flex">
                <i
                  className="fa fa-map-marker py-5"
                  style={{ fontSize: 36, color: "rgb(186, 99, 212)" }}
                />
                <div className="mx-3 py-1">
                  <div className="fw-bold">Office Address</div>
                  <div>
                    Near RAF Gate No.2, Shantipuram, Phaphamau, Allahabad - 211013,
                    U.P., India.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 col-md-12 px-5 shadow p-3 mb-5 contact-box">
              <div className="d-flex">
                <i
                  className="fa fa-phone py-5"
                  style={{ fontSize: 36, color: "rgb(186, 99, 212)" }}
                />
                <div className="mx-3 py-4">
                  <div className="fw-bold">Phone Number</div>
                  <div>+91 0532 2447144</div>
                  <div>+91 9451275631</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* contact details ends */}

        {/* map starts */}
        <div className='container'>
        <div className='text-center ratio ratio-16x9'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14400.332067503621!2d81.85327071164288!3d25.53561147635614!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399aca1d6373785d%3A0x4b5efebc6db59500!2sUIIT%20College%20Of%20IT%20%26%20Management!5e0!3m2!1sen!2sus!4v1751787441507!5m2!1sen!2sus"
  
          height={300}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        </div>
        </div>
        {/* map ends */}
        {/* form starts */}
        <section className="py-5 mx-3">
  <div className="container px-3 shadow p-3 mb-5" id="contact-form-contact">
    <form>
      <p className="display-5 fw-bold text-center mb-4 my-3 heading-font blue-heading">Drop us a Line</p>
      <div className="row g-4">
        <div className="col-12 col-lg-6">
          <label htmlFor="name" className="form-label">Your Name</label>
          <input type="text" className="form-control border border-dark" id="name" placeholder="Enter your name" />

          <label htmlFor="email" className="form-label mt-3">Email Address</label>
          <input type="email" className="form-control border border-dark" id="email" placeholder="Enter your email" />

          <label htmlFor="phone" className="form-label mt-3">Your Contact Number</label>
          <input type="tel" className="form-control border border-dark" id="phone" placeholder="Enter your number" />
        </div>

        <div className="col-12 col-lg-6">
          <label htmlFor="message" className="form-label">Your Message</label>
          <textarea className="form-control border border-dark" id="message" rows={9} placeholder="Type your message here"></textarea>
        </div>
      </div>
    </form>

    <div className="text-center mt-4">
      <button type="submit" className="btn btn-success px-5 py-2 my-3">Submit</button>
    </div>
  </div>
</section>

      </div>
      {/* form ends */}
    </>
    )
  }
}

export default contact;