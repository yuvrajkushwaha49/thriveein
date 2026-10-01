import React from 'react';

const services = [
  {
    id: 1,
    image: '/assets/images/service-1.jpg',
    icon: '/assets/images/icon/service-icon-1.png',
    title: 'Perfect solutions that business demands',
    delay: '0ms',
  },
  {
    id: 2,
    image: '/assets/images/service-2.jpg',
    icon: '/assets/images/icon/service-icon-2.png',
    title: 'Reduced Spending with IT Talent Sourcing',
    delay: '300ms',
  },
  {
    id: 3,
    image: '/assets/images/service-3.jpg',
    icon: '/assets/images/icon/service-icon-3.png',
    title: 'Access to Experts and the Latest Technology',
    delay: '600ms',
  },
];

const HomeServices = () => {
  return (
    <section className="infetech-service-area">
      <div className="container">
        <div className="row">
          {services.map((item) => (
            <div key={item.id} className="col-lg-4 col-md-6">
              <div 
                className="single-infetech-serice-item animated wow fadeInUp" 
                data-wow-duration="1000ms" 
                data-wow-delay={item.delay}
              >
                <div className="thumb">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="content">
                  <div className="icon">
                    <img src={item.icon} alt="Service Icon" />
                  </div>
                  <h3 className="title">
                    <a href="#">{item.title}</a>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
