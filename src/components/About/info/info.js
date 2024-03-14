import React from 'react';

const Info = () => {
  return (
    <div className="content" data-testid="info" style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ flex: 1.5 }}>
        <img src="https://d1tm14lrsghf7q.cloudfront.net/public/media/107871/conversions/Takk-10k-House-Cover-cover.jpg" alt="site banner" />
      </div>
      <div style={{ flex: 1, marginLeft: '20px',textAlign: 'justify' }}>
      <h2 style={{ textAlign: 'center' }}>About Us</h2>
        <p >
          At Home Decor, we specialize in turning houses into homes and outdoor spaces into havens.
          With a focus on quality craftsmanship and personalized service, we work closely with each client to bring their unique vision to life.
          Whether it's updating your living room, kitchen or transforming your garden, we're here to exceed your expectations and 
          deliver results that surpass your dreams. Explore our portfolio and let's collaborate to create something extraordinary together. 
          Welcome to Home Decor.
        </p>
        <p>
          Our team of experienced professionals works closely with each client to understand their unique vision, preferences, and needs. 
          Whether you're looking to update your living room or kitchen for a more contemporary feel, 
          create an outdoor retreat perfect for entertaining, or completely overhaul your entire home, 
          we're here to guide you through every step of the process.
        </p>
      </div>
    </div>
  );
};

export default Info;
