import React from 'react';

function Carousel() {
  return (
    <>
    <link rel="stylesheet" type="text/css" href="assets/css/search.css"/>
      <section className="hero-large hero">
        <div id="demo" className="carousel slide" data-ride="carousel">
          <ul className="carousel-indicators">
            <li data-target="#demo" data-slide-to={0} className="active" />
            <li data-target="#demo" data-slide-to={1} />
            <li data-target="#demo" data-slide-to={2} />
          </ul>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="assets/img/intro/girl3.jpg" alt="Los Angeles" width={1100} height={500} />
              <div className="container">
                <div className="carousel-caption">
                  <h2>Book Salons & Spas Nearby</h2>
                  <div className="s130">
        <form className="sform">
          <div className="inner-sform">
            <div className="sinput-field first-wrap">
              <div className="svg-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                </svg>
              </div>
              <input id="search-service" type="text" placeholder="What are you looking for?" />
            </div>
            <div className="sinput-field second-wrap">
              <button className="searchbtn" type="button">SEARCH</button>
            </div>
          </div>
          <span className="info">ex. Salons, Spas, Clinics and their Services</span>
        </form>
      </div>
                </div> 
              </div>
            </div>
            <div className="carousel-item">
              <img src="assets/img/intro/colorful.png" alt="Chicago" width={1100} height={500} />
              <div className="container">
                <div className="carousel-caption">
                  <h2>Best Hair Salon</h2>
                  <div className="s130">
        <form className="sform">
          <div className="inner-sform">
            <div className="sinput-field first-wrap">
              <div className="svg-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                </svg>
              </div>
              <input id="search-service" type="text" placeholder="What are you looking for?" />
            </div>
            <div className="sinput-field second-wrap">
              <button className="searchbtn" type="button">SEARCH</button>
            </div>
          </div>
          <span className="info">ex. Salons, Spas, Clinics and their Services</span>
        </form>
      </div>
                </div>   
              </div>
            </div>
            <div className="carousel-item">
              <img src="assets/img/intro/girl1.png" alt="New York" width={1100} height={500} />
              <div className="container">
                <div className="carousel-caption">
                  <h2>Trendy Beauty Look</h2>
                  <div className="s130">
        <form className="sform">
          <div className="inner-sform">
            <div className="sinput-field first-wrap">
              <div className="svg-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                </svg>
              </div>
              <input id="search-service" type="text" placeholder="What are you looking for?" />
            </div>
            <div className="sinput-field second-wrap">
              <button className="searchbtn" type="button">SEARCH</button>
            </div>
          </div>
          <span className="info">ex. Salons, Spas, Clinics and their Services</span>
        </form>
      </div>
                </div>   
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#demo" data-slide="prev">
            <span className="carousel-control-prev-icon" />
          </a>
          <a className="carousel-control-next" href="#demo" data-slide="next">
            <span className="carousel-control-next-icon" />
          </a>
        </div>
      </section>
    </>
  );
}

export default Carousel;
