import React from 'react';

const projects = [
  {
    id: 1,
    image: '/assets/images/project-1.jpg',
    title: 'Tech Solutions',
    category: 'DESIGN / IDEAS',
  },
  {
    id: 2,
    image: '/assets/images/project-2.jpg',
    title: 'Smart Visions',
    category: 'DESIGN / IDEAS',
  },
  {
    id: 3,
    image: '/assets/images/project-3.jpg',
    title: 'Platform Integration',
    category: 'DESIGN / IDEAS',
  },
  {
    id: 4,
    image: '/assets/images/project-4.jpg',
    title: 'Web Development',
    category: 'DESIGN / IDEAS',
  },
];

const HomeProjects = () => {
  return (
    <section className="infetech-project-area pt-115">
      <div className="container">
        <div className="row align-items-center mb-55">
          <div className="col-lg-6">
            <div className="section-title">
              <span>Our Completed Projects</span>
              <h4 className="title">TECHNOLOGY THAT TURNS IDEAS INTO RESULTS</h4>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="section-title pl-100">
              <p>
                Explore some of the websites, software solutions, digital campaigns, and AI-powered projects we’ve built to help businesses improve, connect with customers, and grow online.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid pl-160 pr-160">
        <div className="row infetech-project-slide">
          {projects.map((item) => (
            <div key={item.id} className="col-lg-3 col-md-6 mb-4">
              <div className="single-project-item">
                <img src={item.image} alt={item.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
                <div className="single-project-overlay">
                  <h4 className="title">{item.title}</h4>
                  <span>{item.category}</span>
                  <a href="#"><i className="fal fa-long-arrow-right"></i></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeProjects;
