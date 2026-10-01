import React from 'react';

const teamMembers = [
  {
    id: 1,
    name: 'Christine Eve',
    role: 'Web Developer',
    image: '/assets/images/team-1.jpg',
    delay: '0ms',
  },
  {
    id: 2,
    name: 'Mike Hardson',
    role: 'UI/UX Designer',
    image: '/assets/images/team-2.jpg',
    delay: '300ms',
  },
  {
    id: 3,
    name: 'Jessica Brown',
    role: 'Web Designer',
    image: '/assets/images/team-3.jpg',
    delay: '600ms',
  },
];

const HomeTeam = () => {
  return (
    <section className="infetech-team-area">
      <div className="container">
        <div className="row align-items-center mb-50">
          <div className="col-lg-6">
            <div className="section-title">
              <span>Our Expert People</span>
              <h4 className="title">Meet Our Professional Team Members</h4>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="section-title pl-100">
              <p>
                From websites and software to digital marketing and AI solutions, we provide the technology and marketing services you need to build, reach, and grow your business.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {teamMembers.map((member) => (
            <div key={member.id} className="col-lg-4 col-md-6 mb-4">
              <div
                className="single-tema-item animated wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay={member.delay}
              >
                <div className="top-line"></div>
                <div className="thumb">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="content">
                  <h4 className="title">{member.name}</h4>
                  <span>{member.role}</span>
                  <div className="share-icon">
                    <i className="fas fa-share-alt"></i>
                    <ul>
                      <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                      <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                      <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                      <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeTeam;
