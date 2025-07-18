import React from 'react';

import banner1 from '../Assets/UUIT COLLEGE BANNER 2.png';
import banner2 from '../Assets/banner1.jpg';
import icon1 from '../Assets/business.png';
import icon2 from '../Assets/ML.png';
import icon3 from '../Assets/programming.png';
import icon4 from '../Assets/health&fitness.png';
import icon5 from '../Assets/art.png';
import icon6 from '../Assets/health&fitness.png';
import tssc from '../Assets/tssc.gif';
import nielit from '../Assets/nielit.jpg';
import blog1 from '../Assets/blog1.jpg';
import blog2 from '../Assets/blog2.jpg';
import blog3 from '../Assets/blog3.jpg';

const Home = () => {
  return (
    <>

      {/* Carousel */}
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {[banner1, banner2, banner2].map((banner, i) => (
            <div key={i} className={`carousel-item ${i === 0 ? 'active' : ''}`}>
              <div id="banner-size"><img src={banner} className="d-block w-100 h-100 home-slider-img" alt="Slide" /></div>
              <div className="carousel-content container position-absolute top-50 start-50 translate-middle">
                <p className="text-light" id="banner-text1">EDUCATION SOLUTION</p>
                <h1 className="display-5 fw-bold text-warning heading-font" id="banner-text2">UIIT College of<br/> IT & Management</h1>
                <p className="mt-2 text-light" id="banner-text3">Empowering minds, shaping futures — where knowledge meets innovation.</p>
                <div className="d-flex  gap-3 mt-3">
                  <button className="btn btn-primary px-4 banner-btn">View Courses</button>
                  <button className="btn btn-danger px-4 banner-btn">Explore More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
         
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          
        </button>
      </div>

      {/* Courses Section */}
      <section className="container-fluid mb-5 " id="courses">
        <div className="row text-center">
          {[{ icon: icon1, title: "Business Studies", desc: "Business is success" },
          { icon: icon2, title: "Machine Learning", desc: "Science is power" },
          { icon: icon3, title: "Programming Tech", desc: "Update your skill" },
          { icon: icon4, title: "Health & Fitness", desc: "Health is wealth" },
          { icon: icon5, title: "Art & Design", desc: "Show creativity" },
          { icon: icon6, title: "Health & Fitness", desc: "Health is wealth" }].map((course, i) => (
            <div className="col-lg-4 col-md-6 mb-4 mt-4" key={i}>
              <div className="p-4 border rounded shadow-sm h-100 blue-heading " id="courses-home">
                <img src={course.icon} alt="" height="60" className="mb-3" />
                <h5>{course.title}</h5>
                <p>{course.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Partners Section */}
      <section className="container my-5 " id="our-partners">
        <h2 className="text-center fw-bold display-6 mb-4 heading-font blue-heading">Our Partners</h2>
        <div className="row justify-content-center">
          {[{ img: tssc, title: "TSSC", desc: "The Telecom Sector Skill Council (TSSC) is a Non-Profit Organization, registered under ..." },
          { img: nielit, title: "NIELIT", desc: "National Institute of Electronics & Information Technology (NIELIT), (erstwhile DOEACC Society)...." }].map((partner, i) => (
            <div className="col-md-5 col-sm-12 mb-4" key={i}>
              <div className="card h-100  border border-dark p-4">
                <img src={partner.img} className="card-img-top mx-auto" height="200" alt="Partner" />
                <div className="card-body">
                  <hr/>
                  <h5 className="card-title fw-bold">{partner.title}</h5>
                  <p className="card-text">{partner.desc}</p>
                  <a href="#" className="btn btn-outline-success">Read more</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="container-fluid my-5" id="contact-us">
        <div className="row g-5">
          <div className="col-lg-6" id="contact-details">
            <h2 className="fw-bold display-6 heading-font blue-heading">Office Information</h2>
            <p className=' pt-5'><div className="fw-bold blue-heading">Office Address</div>
            <div>Near RAF Gate No.2, Shantipuram, Phaphamau,<br />Allahabad - 211013, U.P., India.</div></p>

            <p> <div className="fw-bold blue-heading ">Email</div>
            <div>info@uiiteducation.in</div></p>

            <p><div className="fw-bold blue-heading">Phone Numbers</div>
            <div>+91 0532 2447144<br />+91 9451275631</div></p>
          </div>
          <div className="col-lg-6 my-4">
            <div className="p-4 border rounded shadow-sm bg-white">
              <h3 className="text-center mb-4 display-6 fw-bold heading-font blue-heading">Contact Us</h3>
              <form> 
                <div className="mb-3">
                  <label className="form-label">Your Name</label>
                  <input type="text" className="form-control border border-dark" placeholder="Enter your name" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Your Email</label>
                  <input type="email" className="form-control border border-dark" placeholder="Enter your email" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Subject</label>
                  <input type="text" className="form-control border border-dark" placeholder="Subject" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Your Message</label>
                  <textarea className="form-control border border-dark" rows="4" placeholder="Write your message here..." />
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-success px-5">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Blogs Section */}
      <section className="container my-5">
        <h2 className="text-center fw-bold mb-4 display-6 heading-font blue-heading">Latest Blogs</h2>
        <div className="row g-4">
          {[{ img: blog1, title: "TSSS", date: "13/06/2025", desc: "The Telecom Sector Skill Council (TSSC) is a Non-Profit Organization..." },
          { img: blog2, title: "Teachers Day", date: "05/09/2024", desc: "Students express their gratitude by organizing cultural programs..." },
          { img: blog3, title: "Teachers Day", date: "05/09/2014", desc: "Students express their gratitude by organizing cultural programs..." }].map((blog, i) => (
            <div className="col-lg-4 col-md-6" key={i}>
              <div className="card h-100">
                <img src={blog.img} className="card-img-top" height="200" alt="Blog" />
                <div className="card-body">
                  <hr />
                  <h5 className="card-title fw-bold">{blog.title}</h5>
                  <p className="text-muted">Date: {blog.date}</p>
                  <p className="card-text">{blog.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
