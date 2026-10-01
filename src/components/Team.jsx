import React from 'react';

const teamMembers = [
  {
    name: 'Christine Eve',
    role: 'Web Developer',
    image: '/assets/images/team-1.jpg',
    delay: '0ms'
  },
  {
    name: 'Mike Hardson',
    role: 'UI/UX Designer',
    image: '/assets/images/team-2.jpg',
    delay: '300ms'
  },
  {
    name: 'Jessica Brown',
    role: 'Web Designer',
    image: '/assets/images/team-3.jpg',
    delay: '600ms'
  }
];

const Team = () => {
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
                There are many variations of passages of available but majority have
                suffered alteration in some form, by humou or randomised words which
                don't look even slightly believable.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="single-tema-item">
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

export default Team;
