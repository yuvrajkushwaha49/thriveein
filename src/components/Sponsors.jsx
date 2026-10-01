import React from 'react';

const Sponsors = () => {
  const brands = [1, 2, 3, 4, 5, 6];

  return (
    <div className="infetech-sponser-area infetech-sponser-about-area">
      <div className="container">
        <div className="row infetech-sponser-slide align-items-center justify-content-center">
          {brands.map((_, index) => (
            <div key={index} className="col-lg-2 col-md-4 col-6">
              <div className="infetech-sponser-item text-center">
                <img src="/assets/images/brand-logo.png" alt={`Brand Logo ${index + 1}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
