import React from 'react';

const blogs = [
  {
    id: 1,
    image: '/assets/images/blog-1.jpg',
    date: '18 mar',
    author: 'Admin',
    comments: '2 Comments',
    title: 'Let’s understand the different types of data backups',
    delay: '0ms',
  },
  {
    id: 2,
    image: '/assets/images/blog-2.jpg',
    date: '18 mar',
    author: 'Admin',
    comments: '2 Comments',
    title: 'Mauris are diam cursus, maximus ante at, blandit risus.',
    delay: '300ms',
  },
  {
    id: 3,
    image: '/assets/images/blog-3.jpg',
    date: '18 mar',
    author: 'Admin',
    comments: '2 Comments',
    title: 'Contrary to popular belief, Lorem Ipsum from 45 BC.',
    delay: '600ms',
  },
];

const HomeBlog = () => {
  return (
    <section className="infetech-blog-area pt-115 pb-120">
      <div className="container">
        <div className="row align-items-center mb-50">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <span>What’s Happening</span>
              <h4 className="title">News & Articles</h4>
            </div>
          </div>
        </div>
        <div className="row">
          {blogs.map((item) => (
            <div key={item.id} className="col-lg-4 col-md-6 mb-4">
              <div 
                className="single-blog-item animated wow fadeInUp" 
                data-wow-duration="1500ms" 
                data-wow-delay={item.delay}
              >
                <div className="thumb">
                  <a href="#"><img src={item.image} alt={item.title} /></a>
                  <span>{item.date}</span>
                </div>
                <div className="content">
                  <div className="blog-meta">
                    <ul>
                      <li><i className="fal fa-user-circle"></i> by {item.author}</li>
                      <li><i className="fal fa-comments"></i> {item.comments}</li>
                    </ul>
                    <h4 className="title">
                      <a href="#">{item.title}</a>
                    </h4>
                    <a href="#">Read More</a>
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

export default HomeBlog;
