import React, { useState } from 'react';

const testimonialsData = [
  {
    name: 'Mike Hardson',
    role: 'Senior Designer',
    image: '/assets/images/testimonial-slide-thumb.png',
    rating: 5,
    text: "This is due to their excellent service, competitive pricing and customer support. It's refreshing to get such a personal touch. Duis aute lorem ipsum is simply free text available in the market reprehen."
  },
  {
    name: 'Elisabeth Shue',
    role: 'Senior Developer',
    image: '/assets/images/testimonial-slide-thumb-2.png',
    rating: 5,
    text: "This is due to their excellent service, competitive pricing and customer support. It's refreshing to get such a personal touch. Duis aute lorem ipsum is simply free text available in the market reprehen."
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="testimonial-area-5 testimonial-area-about">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-title pr-70 pb-45">
              <span>Client Testimonials</span>
              <h3 className="title">Check What They’re Talking About</h3>
            </div>
            
            <div className="testimonial-slide-active-5" style={{ position: 'relative' }}>
              {testimonialsData.map((item, index) => (
                <div 
                  key={index}
                  className="testimonial-slide-item"
                  style={{ 
                    display: index === activeIndex ? 'block' : 'none',
                    transition: 'all 0.4s ease-in-out'
                  }}
                >
                  <div className="box">
                    <div className="thumb">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="content">
                      <h5 className="title">{item.name}</h5>
                      <span>{item.role}</span>
                      <ul>
                        {[...Array(item.rating)].map((_, i) => (
                          <li key={i}><i className="fas fa-star"></i></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="text">
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}

              {/* Slick-like interactive navigation dots */}
              <ul className="slick-dots" style={{ display: 'flex', gap: '8px', marginTop: '30px', padding: 0 }}>
                {testimonialsData.map((_, i) => (
                  <li 
                    key={i} 
                    className={i === activeIndex ? 'slick-active' : ''}
                    style={{ listStyle: 'none' }}
                  >
                    <button 
                      type="button" 
                      onClick={() => setActiveIndex(i)}
                      style={{
                        cursor: 'pointer',
                        width: '16px',
                        height: '4px',
                        border: 'none',
                        background: i === activeIndex ? '#5f2dee' : '#bbb9be',
                        padding: 0,
                        transition: 'background 0.3s'
                      }}
                      aria-label={`Slide ${i + 1}`}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="testimonial-thumb-5">
              <img src="/assets/images/testimonial-bg-shape.png" alt="Testimonial Shape" />
              <div className="item-1">
                <img src="/assets/images/testimonial-thumb-7.png" alt="Client 1" />
              </div>
              <div className="item-2">
                <img src="/assets/images/testimonial-thumb-8.png" alt="Client 2" />
              </div>
              <div className="item-3">
                <img src="/assets/images/testimonial-thumb-9.png" alt="Client 3" />
              </div>
              <div className="item-4">
                <img src="/assets/images/testimonial-thumb-10.png" alt="Client 4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
