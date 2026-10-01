import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Understand Your Needs',
    description: 'We understand your business, goals, audience, and challenges to create the right digital strategy.',
    delay: '0ms',
  },
  {
    number: '02',
    title: 'Project analysis',
    description: 'We build a clear roadmap covering technology, marketing, automation, and growth opportunities.',
    delay: '200ms',
  },
  {
    number: '03',
    title: 'Execute',
    description: 'Our team develops, launches, and optimizes your website, software, AI solutions, and campaigns.',
    delay: '400ms',
  },
  {
    number: '04',
    title: 'Deliver result',
    description: 'We track performance, improve results, and continuously scale your digital presence for growth.',
    delay: '600ms',
  },
];

const HomeWorkProcess = () => {
  return (
    <section
      className="infetech-work-process-area pt-100 pb-80"
      style={{
        backgroundColor: '#0c162d',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div className="section-title mb-50">
              <span style={{
                color: '#0060ff',
                fontWeight: 700,
                fontSize: '15px',
                letterSpacing: '1px'
              }}>
                — Work Process —
              </span>
              <h2 style={{
                color: '#ffffff',
                fontSize: '42px',
                fontWeight: 800,
                marginTop: '12px',
                marginBottom: '16px',
                letterSpacing: '-0.5px'
              }}>
                How We Work
              </h2>
              <p style={{
                color: '#94a3b8',
                fontSize: '15px',
                lineHeight: '26px',
                maxWidth: '600px',
                margin: '0 auto'
              }}>
                From strategy to execution, we turn your ideas into scalable digital solutions that drive real business growth.
              </p>
            </div>
          </div>
        </div>

        {/* Process Step Cards */}
        <div className="row justify-content-center pt-20">
          {steps.map((step) => (
            <div
              key={step.number}
              className="col-lg-3 col-md-6 mb-50 animated wow fadeInUp"
              data-wow-duration="1000ms"
              data-wow-delay={step.delay}
            >
              <div
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '12px',
                  padding: '50px 25px 35px',
                  textAlign: 'center',
                  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
                  position: 'relative',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 96, 255, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.2)';
                }}
              >
                {/* Number Badge */}
                <div style={{
                  position: 'absolute',
                  top: '-32px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #1a73e8, #0052cc)',
                  color: '#ffffff',
                  fontSize: '20px',
                  fontWeight: 800,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 0 6px #e0edff, 0 8px 18px rgba(0, 96, 255, 0.35)',
                  border: '3px solid #ffffff'
                }}>
                  {step.number}
                </div>

                <h4 style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  color: '#111827',
                  marginTop: '10px',
                  marginBottom: '14px'
                }}>
                  {step.title}
                </h4>
                <p style={{
                  color: '#6b7280',
                  fontSize: '14px',
                  lineHeight: '22px',
                  margin: 0
                }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default HomeWorkProcess;
