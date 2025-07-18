import React from 'react';
import banner from '../Assets/UUIT COLLEGE BANNER.png';

const About = () => {
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
          <h1 className="carousel-heading display-5 fw-bold text-dark">About Us</h1>
          <div className="fs-6 mt-2">
            <a
              href="/"
              className="text-dark"
              style={{ textDecoration: "none" }}
            >
              Home ⯈
            </a>
            <a
              href="/about"
              className="text-dark ms-1"
              style={{ textDecoration: "none" }}
            >
              About
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

  {/* about starts */}
  <section id="contactbg">
    <div className="container py-5">
      <h1 className='blue-heading heading-font'>
        <b>About Us</b>
      </h1>
      <p>
        UIIT College of IT and Management is a reputed institution committed to
        delivering quality education in the fields of Information Technology and
        Management. Located in a conducive learning environment, the college
        focuses on academic excellence, practical skills, and overall
        personality development of its students. UIIT offers a range of
        undergraduate and postgraduate programs that are designed to meet the
        evolving demands of the industry. With a team of experienced faculty
        members, modern infrastructure, and well-equipped computer labs, the
        college ensures that students receive hands-on experience along with
        theoretical knowledge. The institution also emphasizes industry exposure
        through internships, workshops, and guest lectures, preparing students
        for successful careers in IT and business sectors. UIIT College aims to
        nurture responsible professionals who can contribute meaningfully to the
        digital and corporate world.
      </p>
    </div>
  </section>
  {/* about ends */}
  
</>

    )
}

export default About