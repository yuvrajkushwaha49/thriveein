import React from 'react';

const Breadcrumb = () => {
  return (
    <section className="breadcrumb-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb-item">
              <h2 className="title">About us</h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active" aria-current="page">About</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
