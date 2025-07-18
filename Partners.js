import React from 'react'
import banner from '../Assets/UUIT COLLEGE BANNER.png';

export const Partners = () => {
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
          <h1 className="carousel-heading display-5 fw-bold text-dark">Our Partners</h1>
          <div className="fs-6 mt-2">
            <a
              href="/"
              className="text-dark"
              style={{ textDecoration: "none" }}
            >
              Home ⯈
            </a>
            <a
              href="/partners"
              className="text-dark ms-1"
              style={{ textDecoration: "none" }}
            >
              Our Partners
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
  {/* tssc start */}
  <section id="contactbg">
    <div className="container py-5">
      <h2 className="fw-bold blue-heading heading-font">Telecom Sector Skill Council(TSSC)</h2>
      <p>
        The Telecom Sector Skill Council (TSSC) is a Non-Profit Organization,
        registered under the Societies Registration Act, 1860. We are an
        industry led apex body, jointly set up by The Cellular Operators
        Association of India (COAI), Indian Cellular Association (ICA) &amp;
        Telecom Centres of Excellence (TCOE) to ensure adequate availability of
        skilled manpower to boost growth and productivity in the Telecom Sector.
        Set up under the aegis of the National Skill Development Corporation,
        TSSC has members from the various Telecom industries, Academia, Industry
        associations (such as COAI, ICA, AUSPI &amp; TAIPA) and representation
        from the Government (DeitY) as well.
      </p>
      <p>
        Indian Telecom sector has emerged as one of the greatest economic
        success stories, registering a consistent overall growth rate of more
        than 35% over the past decade in terms of subscribers. India is the
        second largest &amp; fastest growing Telecom market in the world with
        939 million subscribers as on 31st August, 2012, with overall
        Tele-density of 77% (TRAI). Further, the annual mobile handset sales are
        expected to cross 200 million units mark this year and India is fast
        becoming a manufacturing hub for the Telecom infrastructure equipment.
      </p>
      <p>
        With m-governance, m-commerce, m-education, m-health, online shopping,
        m-gaming, m2m communications &amp; many such new innovations, Telecom is
        set to increasingly permeate the lives of common Indians in coming
        years. The Indian Telecom success story would continue with 3G networks
        and smartphones, besides focussing on the under-penetrated rural
        markets.
      </p>
      <p>
        This dynamic sector, employs close to 2.8 million people directly and
        almost another 7 million indirectly, making it one of the largest
        employment generating sectors in the country. At the current rate of
        growth, it has the potential to generate almost an equal number of job
        opportunities over the next ten years. This gave rise to the need for an
        organization that would lead skill development in a Public Private
        Partnership mode and would be responsible for charting the human
        resource requirement in the value chain of the telecom sector. As a
        result, TSSC will endeavour to create a human resource pool of the right
        size and quality to meet the evolving demands of the Telecom industry.
      </p>
      <button
        className="btn btn-success"
        onclick="window.location.href='https://www.tsscindia.com/'"
      >
        More Details
      </button>
    </div>
    <div className="container py-5">
      <h2 className="fw-bold blue-heading heading-font">
        National Institute of Electronics &amp; Information Technology(NIELIT)
      </h2>
      <p>
        National Institute of Electronics &amp; Information Technology
        (NIELIT),(erstwhile DOEACC Society), an Autonomous Scientific Society
        under the administrative control of Ministry of Electronics &amp;
        Information Technology (MoE&amp;IT), Government of India, was set up to
        carry out Human Resource Development and related activities in the area
        of Information, Electronics &amp; Communications Technology (IECT).
        NIELIT is engaged both in Formal &amp; Non-Formal Education in the area
        of IECT besides development of industry oriented quality education and
        training programmes in the state-of-the-art areas. NIELIT has
        endeavoured to establish standards to be the country’s premier
        institution for Examination and Certification in the field of IECT. It
        is also one of the National Examination Body, which accredits
        institutes/organizations for conducting courses in IT in the non-formal
        sector.
      </p>
      <p>
        At present, NIELIT has thirty five(35) offices located at Agartala,
        Aizawl, Ajmer, Aurangabad, Calicut, Chandigarh, Chennai, Chuchuyimlang,
        Churachandpur, Delhi, Gangtok, Gorakhpur, Guwahati, Imphal, Itanagar,
        Jammu, Jorhat, Kohima, Kolkata, Kokrajhar, Leh, Lucknow, Lunglei,
        Pasighat, Patna, Ranchi, Ropar (Rupnagar City Centre), Senapati,
        Shillong, Shimla, Silchar, Srinagar, Srikakulam, Tezpur, Tura with its
        Head quarters at New Delhi. It is also well networked throughout India
        with the presence of about 800 institutes.
      </p>
      <p>
        Over the last two decades, NIELIT has acquired very good expertise in IT
        training, through its wide repertoire of causes, ranging from ‘O’ Level
        (Foundation), ‘A’ Level (Advance Diploma), ‘B’ Level (MCA equivalent),
        ‘C’ Level (M-Tech level), IT literacy courses such as CCC (Course on
        Computer Concept), BCC (Basic Computer Course) and other such long term
        and short term course in the non formal sector like courses on
        Information Security, ITeS-BPO(Customer Care/Banking), Computer Hardware
        Maintenance (CHM-O/A level), Bio-Informatics(BI-O/A/B level), ESDM etc,
        besides, high end courses offered by NIELIT Centres at Post-Graduate
        level (M.Tech) in Electronics Design &amp; Technology, Embedded Systems
        etc. which are not normally offered by Universities/Institutions in the
        formal sector, in association with the respective state Universities.
      </p>
      <p>
        The basket of activities of NIELIT is further augmented by the wide
        range of projects that it undertakes. NIELIT has demonstrated its
        capability and capacity to undertake R&amp;D projects, consultancy
        services, turnkey projects in office automation, software development,
        website development etc. NIELIT is also the nodal implementing agency on
        behalf of DeitY for Data Digitization of the population of 15 assigned
        States and 2 Union Territories for the creation of National Population
        Register (NPR) project of Registrar General of India (RGI).
      </p>
      <p>
        NIELIT is also successfully executing the Agriculture Census and Input
        Survey project under which tabulation of about 10 crore data records
        have to be done. NIELIT has planned a road map for adopting appropriate
        pedagogy for metamorphosing NIELIT into an Institute of National
        Importance.
      </p>
      <button
        className="btn btn-success"
        onclick="window.location.href='https://www.nielit.gov.in/'"
      >
        More Details
      </button>
    </div>
  </section>
  {/* tssc ends */}
 
</>

  )
}

export default Partners;
