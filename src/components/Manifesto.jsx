import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import mobileMenuDivider from '/Home/mobile-menu-divider.png';
import logoMainWh from '/Home/logo-main-wh.svg';
import "./styles/custom.css"
import "./styles/styles.css"
import imgManifesto from '/Home/img_manifeasto.png';
import k4m2aCloud from '/Home/k4m2a-cloud.webp';
import k4m2aCloud500 from '/Home/k4m2a-cloud-500.webp';
import k4m2aCloud800 from '/Home/k4m2a-cloud-800.webp';
import k4m2aCloud1080 from '/Home/k4m2a-cloud-1080.webp';
import k4m2aCloud1600 from '/Home/k4m2a-cloud-1600.webp';
import k4m2aCloud2000 from '/Home/k4m2a-cloud-2000.webp';
import k4m2aCloud2600 from '/Home/k4m2a-cloud-2600.webp';
import k4m2aPortal from '/Home/k4m2a-portal.webp';
import k4m2aPortal500 from '/Home/k4m2a-portal-500.webp';
import logo from '/Home/logo.png';
import k4Img1 from '/Home/k4_img1.png';
import k4Img2 from '/Home/k4_img2.png';
import Navigation from './Navigation';
import Footer from './Footer';


function Manifesto() {
  useEffect(() => {
    // JavaScript code to handle mobile menu toggle
    const nav = document.querySelector('.nav');

    const mobileMenuBtn = document.querySelector('.nav-mobile-btn');
    mobileMenuBtn.addEventListener('click', function () {
      this.x = ((this.x || 0) + 1) % 2;
      if (this.x) {
        nav.classList.add('open');
        document.body.style.overflow = 'hidden';
      } else {
        nav.classList.remove('open');
        document.body.style.overflow = 'auto';
      }
    });

    // JavaScript to handle navLinks delay
    const navLinks = document.querySelectorAll('.mobile-menu-fade');
    let navDelay = 0;

    for (let i = 0; i < navLinks.length; i+=1) {
      // Explicitly control the increment
      navDelay += 0.05;  // Equivalent to navDelay += 0.05
      navLinks[i].style.setProperty('--delay', `${navDelay}s`);
    }

    // Cleanup event listener on component unmount
    return () => {
      mobileMenuBtn.removeEventListener('click', function () {
        this.x = ((this.x || 0) + 1) % 2;
        if (this.x) {
          nav.classList.add('open');
          document.body.style.overflow = 'hidden';
        } else {
          nav.classList.remove('open');
          document.body.style.overflow = 'auto';
        }
      });
    };
  }, []); // Empty dependency array to run once when component mounts
  return (
      <>
      <head>
        <meta charset="utf-8" />
        <title>K4M2A</title>
        <meta content=" " name="description" />
        <link rel="shortcut icon" href="favicon.ico" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <style>
          {` @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap');`}
        </style>

        <link rel="stylesheet" href="css/custom.css" />
        <link rel="stylesheet" href="css/styles.css" />
      </head>
      <>
        <div className="page-wrapper">
          <Navigation />
          <main className="main cc-home">
            <div data-w-id="077155df-02cf-ce52-d236-39089a93392f" className="manifesto-hero-trigger" />
            <header className="hero cc-manifesto">
              <div className="page-padding">
                <div className="container">
                  <div className="manifesto-header">
                    <div className="eyebrow-pill">
                      <div className="eyebrow-pill-inner">
                        <div>Our promise</div>
                      </div>
                      <div className="eyebrow-pill-bg u-rainbow u-blur-perf" />
                    </div>
                    <h1 className="home-hero-heading">Better future for the humanity</h1>
                    <p className="subheading">
                        Our mission is to create a global <br />
                        spiritual community, to enhance humanity’s potential to awaken.
                        </p>
                  </div>
                </div>
              </div>
              <div className="manifesto-hero-img-wrap">
                <div className="manifesto-hero-phone">
                  <img 
                  src={imgManifesto}
                  loading="eager" width="800" alt="" className="u-auto-img" />
                </div>
                <div className="hero-cloud-1">
                  <img
                   src={k4m2aCloud}
                    
                    loading="eager"
                    width="2984"
                    height="936"
                    alt=""
                    srcSet={`
                        ${k4m2aCloud500} 500w,
                        ${k4m2aCloud800} 800w,
                        ${k4m2aCloud1080} 1080w,
                        ${k4m2aCloud1600} 1600w,
                        ${k4m2aCloud2000} 2000w,
                        ${k4m2aCloud2600} 2600w,
                        ${k4m2aCloud} 2984w
                      `}
                    sizes="100vw"
                    className="cloud-img cc-1"
                  />
                </div>
                <div className="hero-cloud-2">
                  <img
                    src={k4m2aCloud}
                    loading="eager"
                    width="2984"
                    height="936"
                    alt=""
                    srcSet={`
                        ${k4m2aCloud500} 500w,
                        ${k4m2aCloud800} 800w,
                        ${k4m2aCloud1080} 1080w,
                        ${k4m2aCloud1600} 1600w,
                        ${k4m2aCloud2000} 2000w,
                        ${k4m2aCloud2600} 2600w,
                        ${k4m2aCloud} 2984w
                      `}
                    sizes="100vw"
                    className="cloud-img cc-2"
                  />
                </div>
              </div>
            </header>
            <section className="section cc-manifesto-intro">
              <div className="page-padding">
                <div className="container container--small cc-manifesto">
                <h2 className="section-heading cc-manifesto">
                It&apos;s 2025, and it looks like we as humanity will not survive 2035.
                </h2>
                  <p className="manifesto-paragraph">
                    When you step out your front door, you don’t think twice about whether the essentials of life will
                    work. <br />
                    <br />
                    The water flows from your taps. The lights turn on. The shelves are stocked with food. Life feels
                    stable, dependable. But beneath this illusion of stability lies a harsh truth: we are standing on
                    the edge of collapse. <br />
                    <br />
                    The systems we rely on—our food, energy, and environment—are under enormous pressure. Climate change
                    is speeding up. Resources are running out. Inequality is growing across the globe. <br />
                    <br />
                    For decades, we’ve chosen convenience over sustainability, profit over purpose, and competition over
                    working together. We’ve created a world that feels built for today but is falling apart for
                    tomorrow.
                    <br />
                    <br />
                    And now, as 2035 approaches, the cracks are everywhere. Floods and fires are destroying entire
                    communities. Fights over water and energy are getting worse. Hunger, sickness, and displacement are
                    spreading fast.
                    <br />
                    <br />
                    The question we must ask is simple: What kind of future do we want? Will we let everything crumble,
                    or will we work together to create a world where humanity can survive and thrive? The choice is
                    ours—but time is running out.
                    <br />
                  </p>
                </div>
              </div>
            </section>
            <section className="section cc-portal">
              <div className="page-padding">
                <div className="container container--small cc-manifesto">
                  <div className="section-header cc-manifesto-portal">
                    <img
                      src={k4m2aPortal}
                      loading="lazy"
                      width="333"
                      height="459"
                      alt=""
                      srcSet={`
                        ${k4m2aPortal500} 500w,
                        ${k4m2aPortal} 666w
                      `}
                      sizes="(max-width: 479px) 70vw, (max-width: 767px) 43vw, 333px"
                      className="manifesto-portal"
                    />
                    <div className="manifesto-portal-heading">That&#x27;s why we built</div>
                    <div className="manifesto-portal-logo w-embed">
                      <img 
                      src={logo}
                      alt='logo' />
                    </div>
                  </div>
                  <h2 className="section-heading cc-small">
                    Imagine a world where humanity thrives—where enlightenment spreads like sunlight, freely touching
                    every soul. A world where knowledge flows without limits, and spiritual connection is as abundant as
                    air.
                  </h2>
                  <p className="manifesto-paragraph">
                    No barriers of language, culture, or philosophy. No isolation or division. Just a seamless, global
                    community united in the pursuit of higher consciousness.
                    <br />
                    ‍<br />
                    This isn’t just a dream it’s the future we’re building at K4M2A. We’ve reimagined what it means to
                    connect spiritually and created a platform designed to remove centuries of barriers to
                    enlightenment.
                    <br />
                    <br />
                    Our approach goes beyond apps. It’s a global platform that delivers what truly matters: connection
                    to gurus, philosophies, and practices, no matter where you are.
                    <br />
                    <br />
                    A space where your journey to enlightenment is personalized, intuitive, and supported by the most
                    advanced tools available.
                    <br />
                    <br />
                    As we step into a future shaped by AI, global challenges, and the need for deeper understanding,
                    K4M2A is the bridge that connects humanity to its greatest potential. Because technology should
                    elevate the human spirit, not confine it.
                    <br />
                    <br />
                    K4M2A puts the future of enlightenment in your hands.The question is, will you take the next step?
                    <br />
                  </p>
                </div>
              </div>
            </section>
            <section className="section cc-manifesto-join">
              <div className="page-padding">
                <div className="container">
                  <div className="home-hero-header">
                    <h2 className="section-heading cc-large">
                      I’m intrested.
                      <br />
                      Let me in.
                    </h2>
                    <div className="form-wrap w-form">
                      <form
                        id="signup-form"
                        name="wf-form-Signup-Form-Manifesto-Footer"
                        data-name="Signup Form Manifesto Footer"
                        method="get"
                        data-wf-page-id="6720bdf4eebab0e211da2789"
                        data-wf-element-id="f520b14d-f1f6-998b-e2f4-ce961583d0dd"
                      >
                        <div className="input-wrap">
                          <input
                            className="input w-input"
                            maxLength="256"
                            name="Email"
                            data-name="Email"
                            placeholder="Enter your e-mail"
                            type="email"
                            id="email"
                            required=""
                          />
                          <div className="input-bg u-rainbow u-blur-perf" />
                          <input type="submit" data-wait="Sign up" className="form-submit w-button" value="Sign up" />
                        </div>
                      </form>
                      <div className="form-success w-form-done">
                        <div>Thank you! Please continue by filling out our Typeform.</div>
                      </div>
                      <div className="u-hidden w-form-fail">
                        <div>Oops! Something went wrong while submitting the form.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-w-id="9928c62b-7f96-21e7-abbc-88d91a93159c" className="manifesto-hero-img-wrap">
                <div className="home-hero-img-wrap cc-manifesto">
                  <div className="home-hero-mockup cc-1">
                    <img
                      src={k4Img1}
                     
                      loading="eager"
                      width="316.5"
                      height="645.5"
                      alt=""
                      srcSet={`
                        ${k4Img1} 500w,
                        ${k4Img1} 633w
                      `}
                      sizes="(max-width: 767px) 55vw, (max-width: 991px) 44vw, 43vw"
                      className="u-auto-img"
                    />
                  </div>
                  <div className="home-hero-mockup cc-2">
                    <img
                    src={k4Img2}
                      loading="eager"
                      width="316.5"
                      height="645.5"
                      alt=""
                      srcSet={`
                        ${k4Img2} 500w,
                        ${k4Img2} 634w
                      `}
                      sizes="(max-width: 767px) 50vw, 39vw"
                      className="u-auto-img"
                    />
                  </div>
                </div>
                <div className="hero-cloud-1">
                  <img
                    src={k4m2aCloud}
                    loading="eager"
                    width="2984"
                    height="936"
                    alt=""
                    srcSet={`
                        ${k4m2aCloud500} 500w,
                        ${k4m2aCloud800} 800w,
                        ${k4m2aCloud1080} 1080w,
                        ${k4m2aCloud1600} 1600w,
                        ${k4m2aCloud2000} 2000w,
                        ${k4m2aCloud2600} 2600w,
                        ${k4m2aCloud} 2984w
                      `}
                    sizes="100vw"
                    className="cloud-img"
                  />
                </div>
                <div className="hero-cloud-2">
                  <img
                   src={k4m2aCloud}
                   
                    loading="eager"
                    width="2984"
                    height="936"
                    alt=""
                    srcSet={`
                        ${k4m2aCloud500} 500w,
                        ${k4m2aCloud800} 800w,
                        ${k4m2aCloud1080} 1080w,
                        ${k4m2aCloud1600} 1600w,
                        ${k4m2aCloud2000} 2000w,
                        ${k4m2aCloud2600} 2600w,
                        ${k4m2aCloud} 2984w
                      `}
                    sizes="100vw"
                    className="cloud-img"
                  />
                </div>
                <div className="cloud-overlay">
                  <div className="cloud-item cc-1">
                    <img
                    src={k4m2aCloud}
                      loading="lazy"
                      width="270"
                      sizes="(max-width: 479px) 34vw, (max-width: 767px) 28vw, (max-width: 991px) 27vw, 266px"
                      alt=""
                      srcSet={`
                        ${k4m2aCloud500} 500w,
                        ${k4m2aCloud} 540w
                      `}
                      className="u-auto-img"
                    />
                  </div>
                  <div className="cloud-item cc-2">
                    <img
                    src={k4m2aCloud}
                     
                      loading="lazy"
                      width="270"
                      sizes="(max-width: 479px) 34vw, (max-width: 767px) 28vw, (max-width: 991px) 27vw, 266px"
                      alt=""
                      srcSet={`
                        ${k4m2aCloud500} 500w,
                        ${k4m2aCloud} 540w
                      `}
                      className="u-auto-img"
                    />
                  </div>
                </div>
              </div>
            </section>
          </main>
          <Footer />
        </div>
        <script
          src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=66797c2909f9ec0b1ff1a767"
          type="text/javascript"
          integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
          crossOrigin="anonymous"
        />
      </>
      </>
    
  );
}

export default Manifesto;

