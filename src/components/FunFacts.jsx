import React from 'react';

const stats = [
  { count: '330', label: 'Active Clients' },
  { count: '920', label: 'Projects Completed' },
  { count: '20', label: 'Glorious Years' },
  { count: '112', label: 'Professional Team' }
];

const FunFacts = () => {
  return (
    <section className="infetech-fun-facts-area infetech-fun-facts-about-area pb-120">
      <div className="container">
        <div className="row">
          {stats.map((item, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div className="fun-facts-item">
                <h4 className="title">
                  <span className="counter">{item.count}</span> <sup>+</sup>
                </h4>
                <div className="content-box">
                  <span>{item.label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunFacts;
