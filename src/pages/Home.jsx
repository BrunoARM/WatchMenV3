import React, { useEffect } from "react";
import ScrollReveal from 'scrollreveal'

import Nav from "../components/Nav";

import Watch1 from "../img/watch1.jpg";
import Watch2 from "../img/watch2.jpg";
import Watch3 from "../img/watch3.jpg";
import Watch4 from "../img/watch4.jpg";
import Watch5 from "../img/watch5.jpg";
import Watch6 from "../img/watch6.jpg";

export default function Home() {

useEffect(() => {
  ScrollReveal().reveal('.animate-left', {
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 300
  })
  ScrollReveal().reveal('.animate-right', {
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 600
  })
  ScrollReveal().reveal('.animate-top', {
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 300
  })
  ScrollReveal().reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 300
  })
}, [])

  return (
    <>
      <div className="hero-container">
        <Nav />
        <div className="hero-left">
          <div className="hero-left__info animate-left">
            <h1>The Best Watches for Men</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
              praesentium dolorum saepe porro eum ea?
            </p>
            <a className="btn btn-light" href="/">
              Explore
            </a>
          </div>
        </div>
        <div className="hero-right animate-right"></div>
      </div>
      <div className="new-designs-container">
        <div className="new-designs-left animate-left"></div>
        <div className="new-designs-right">
          <div className="new-designs-right__info animate-right">
            <h1>Brand-new designs</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
              praesentium dolorum saepe porro eum ea?
            </p>
            <a className="btn btn-light" href="/">
              See more
            </a>
          </div>
        </div>
      </div>
      <div className="swiss-watches-container">
        <div className="swiss-watches-left">
          <div className="swiss-watches-left__info animate-left">
            <h1>Swiss Watches</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
              praesentium dolorum saepe porro eum ea?
            </p>
            <a className="btn btn-light" href="/">
              See more
            </a>
          </div>
        </div>
        <div className="swiss-watches-right animate-right"></div>
      </div>
      <div className="most-watched-container animate-top" id="most-watched">
        <h2>Most Watched</h2>
        <div className="products animate-bottom">
          <div className="products__item">
            <img src={Watch1} alt="watch1" />
            <div className="info">
              <p>Watch Mido Ocean Star GMT</p>
              <p>M0266291705100</p>
              <h5>
                $1,290 USD{" "}
                <a href="/">
                  <i className="fas fa-cart-arrow-down"></i>
                </a>
              </h5>
            </div>
          </div>
          <div className="products__item">
            <img src={Watch2} alt="watch1" />
            <div className="info">
              <p>Watch Mido Ocean Star GMT</p>
              <p>M0266291705100</p>
              <h5>
                $1,290 USD{" "}
                <a href="/">
                  <i className="fas fa-cart-arrow-down"></i>
                </a>
              </h5>
            </div>
          </div>
          <div className="products__item">
            <img src={Watch3} alt="watch1" />
            <div className="info">
              <p>Watch Mido Ocean Star GMT</p>
              <p>M0266291705100</p>
              <h5>
                $1,290 USD{" "}
                <a href="/">
                  <i className="fas fa-cart-arrow-down"></i>
                </a>
              </h5>
            </div>
          </div>
          <div className="products__item">
            <img src={Watch4} alt="watch1" />
            <div className="info">
              <p>Watch Mido Ocean Star GMT</p>
              <p>M0266291705100</p>
              <h5>
                $1,290 USD{" "}
                <a href="/">
                  <i className="fas fa-cart-arrow-down"></i>
                </a>
              </h5>
            </div>
          </div>
          <div className="products__item">
            <img src={Watch5} alt="watch1" />
            <div className="info">
              <p>Watch Mido Ocean Star GMT</p>
              <p>M0266291705100</p>
              <h5>
                $1,290 USD{" "}
                <a href="/">
                  <i className="fas fa-cart-arrow-down"></i>
                </a>
              </h5>
            </div>
          </div>
          <div className="products__item">
            <img src={Watch6} alt="watch1" />
            <div className="info">
              <p>Watch Mido Ocean Star GMT</p>
              <p>M0266291705100</p>
              <h5>
                $1,290 USD{" "}
                <a href="/">
                  <i className="fas fa-cart-arrow-down"></i>
                </a>
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="cta animate-top">
        <a className="btn" href="/">
          See all products
        </a>
      </div>
      <div className="footer">
        <div className="contact-info animate-bottom">
          <a href="/">
            <h2>WatchMen&copy;</h2>
          </a>
          <h4>123 Watch Avenu, Pasadena, CA</h4>
          <p>
            <i className="fas fa-phone-alt"></i> Phone: 555-123-456
          </p>
          <p>
            <i className="far fa-envelope"></i> Email: contact@watchmen.com
          </p>
        </div>
        <div className="quick-links animate-bottom">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Categories</a>
            </li>
            <li>
              <a href="/">Products</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
        <div className="social-links animate-bottom">
          <h3>Social Links</h3>
          <div className="social-links__links">
            <a href="/">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="/">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="/">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="copy"><p>&copy; Copyright 2021</p></div>
    </>
  );
}
