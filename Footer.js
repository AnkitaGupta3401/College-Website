import React from 'react'
import logo from '../Assets/logo.jpg';

const Footer = () => {
  

  return (
    <>
      <footer>
  <div className="container pt-5">
    <div className="d-flex">
      <img src={logo} alt="logo" className="rounded-5" />
      <div className="align-content-center ms-2">
        <p className="fs-5 fw-bold text-warning heading-font">
          UIIT College of
          <br />
          IT &amp; Management
        </p>
      </div>
    </div>
    <div className="row text-start">
      <div className="col-lg-4 footer-dist">
        <table>
          <tbody>
            <tr>
              <td className="px-2 py-2">
                <i className="fa fa-map-marker" style={{ fontSize: 27 }} />
              </td>
              <td className="px-2 py-2">
                Near RAF Gate No.2, Shantipuram, Phaphamau, Allahabad - 211013,
                U.P., India.
              </td>
            </tr>
            <tr>
              <td className="px-2 py-2">
                <i className="fa fa-phone" style={{ fontSize: 27 }} />
              </td>
              <td className="px-2 py-2">
                +91 0532 2447144
                <br />
                +91 9451275631
              </td>
            </tr>
            <tr>
              <td className="px-2 py-2">
                <i className="fa fa-envelope" style={{ fontSize: 20 }} />
              </td>
              <td className="px-2 py-2">info@uiiteducation.in</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="col-lg-4 footer-dist align-content-">
        <div>QUICK LINKS</div>
        <hr className="w-50 py-0" style={{ margin: 0 }} />
        <div className="py-3">
          <div>
            <a
              href="/"
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              Home
            </a>
          </div>
          <div>
            <a
              href="/about"
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              About Us
            </a>
          </div>
          <div>
            <a
              href="/partners"
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              Our Partners
            </a>
          </div>
          <div>
            <a
              href="/contact"
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 footer-dist">
        <div>LOCATION</div>
        <hr className="w-60 py-0" />
        <div className='ratio ratio-16x9'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14400.332067503621!2d81.85327071164288!3d25.53561147635614!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399aca1d6373785d%3A0x4b5efebc6db59500!2sUIIT%20College%20Of%20IT%20%26%20Management!5e0!3m2!1sen!2sus!4v1751787441507!5m2!1sen!2sus"
          width={300}
          height={200}
          style={{ border: 0 }}
          
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        </div>
      </div>
    </div>
    <hr />
    <div className="pb-1">
      Copyright © 2025 K. C. Public School. Developed by <a href="https://dectwinservices.com/" target="_blank" rel="noopener noreferrer" id="link">
        Dectwin Services Private Limited
      </a>
    </div>
  </div>
</footer>

    </>

  )
}
export default Footer