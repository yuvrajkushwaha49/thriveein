import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Rahul Sharma',
    role: 'Business Owner, Delhi NCRs',
    rating: 5,
    text: "Thrivee In helped us generate quality leads and improve our online reach. Great team to work with!",
  },
  {
    id: 2,
    name: 'Amit Verma',
    role: 'Founder, Noida',
    rating: 5,
    text: "They built a modern, professional website exactly as we wanted. Very smooth experience!",
  },
  {
    id: 3,
    name: 'Priya Mehta',
    role: 'Director, Ghaziabad',
    rating: 5,
    text: "Our new website looks great and works perfectly on mobile. Really happy with the work!",
  },
];

const HomeTestimonials = () => {
  return (
    <section className="infetech-testimonial-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center mb-55">
              <span>Client Testimonials</span>
              <h3 className="title">What They’re Talking?</h3>
            </div>
          </div>
        </div>
        <div className="row infetech-testimonial-slide">
          {testimonials.map((item) => (
            <div key={item.id} className="col-lg-4 mb-4">
              <div className="single-testimonial-box">
                <div className="single-testimonial-user">
                  <div className="user-content">
                    <h5 className="title">{item.name}</h5>
                    <span>{item.role}</span>
                  </div>
                </div>
                <div className="single-testimonial-item">
                  <ul>
                    {[...Array(item.rating)].map((_, i) => (
                      <li key={i}><i className="fas fa-star"></i></li>
                    ))}
                  </ul>
                  <p>{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonials;
