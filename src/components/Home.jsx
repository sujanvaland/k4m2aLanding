import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./styles/custom.css"
import "./styles/styles.css"
import k4Img1 from '/Home/k4_img1.png';
import k4Img2 from '/Home/k4_img2.png';
import mobileMenuDivider from '/Home/mobile-menu-divider.png';
import colorback500 from '/Home/colorback_500.webp';
import colorback800 from '/Home/colorback_800.webp';
import colorback1080 from '/Home/colorback_1080.webp';
import imgMax from '/Home/img_max.png';
import hicon1 from '/Home/hicon_1.png';
import hicon2 from '/Home/hicon_2.png';
import hicon3 from '/Home/hicon_3.png';
import image1 from '/Home/image1.png';
import image2 from '/Home/image2.png';
import image3 from '/Home/image3.png';
import imgOsho from '/Home/img_osho.png';
import imgSadguru from '/Home/img_sadguru.png';
import imgSharon from '/Home/img_sharon.png';
import imgAnandmayi from '/Home/img_anandmayi.png';
import imgAlan from '/Home/img_alan.png';
import imgMooji from '/Home/img_mooji.png';
import imgJk from '/Home/img_jk.png';
import imgOmswami from '/Home/img_omswami.png';
import imgSistershivani from '/Home/img_sistershivani.png';
import Navigation from './Navigation';
import Footer from './Footer';


function Home() {
  useEffect(() => {
    // Add the same JavaScript logic inside the useEffect hook
    const nav = document.querySelector('.nav');
    const navMobileBtn = document.querySelector('.nav-mobile-btn');

    const toggleNav = function () {
      this.x = ((this.x || 0) + 1) % 2;
      if (this.x) {
        nav.classList.add('open');
        document.body.style.overflow = 'hidden';
      } else {
        nav.classList.remove('open');
        document.body.style.overflow = 'auto';
      }
    };

    navMobileBtn?.addEventListener('click', toggleNav);

    const navLinks = document.querySelectorAll('.mobile-menu-fade');
    let navDelay = 0;
    navLinks.forEach((link) => {
      navDelay += 0.05;
      link.style.setProperty('--delay', `${navDelay}s`);
    });

    // Cleanup event listener on component unmount
    return () => {
      navMobileBtn?.removeEventListener('click', toggleNav);
    };
  }, []);
  return (
    <html data-wf-domain=" " data-wf-page=" " data-wf-site=" " lang="en">
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
      <body>
        <div className="page-wrapper">
          <Navigation />
          <main className="main cc-home">
            <header className="hero">
              <div className="page-padding">
                <div className="container">
                  <div className="home-hero-header">
                    <div className="eyebrow-pill">
                      <a href="#" className="eyebrow-pill-inner w-inline-block">
                        <div>Heyo! We launched our Alpha!</div>
                      </a>
                      <div className="eyebrow-pill-bg u-rainbow u-blur-perf" />
                    </div>
                    <h1 className="home-hero-heading">World’s First Spiritual Network</h1>
                    <div className="home-hero-subheading">
                      <p className="subheading">
                        Connect, learn, and share your experiences with spiritual seekers from around the world.
                      </p>
                    </div>
                    <div className="form-wrap w-form">
                      <form
                        id="signup-form"
                        name="wf-form-Signup-Form-Hero"
                        data-name="Signup Form Hero"
                        method="get"
                        data-wf-page-id="66797c2909f9ec0b1ff1a765"
                        data-wf-element-id="0711e0c3-4cb2-659f-bbcb-f97fd3f21325"
                      >
                        <div className="input-wrap">
                          <input
                            className="input w-input"
                            maxLength="256"
                            name="email"
                            data-name="Email"
                            placeholder="Enter your e-mail"
                            type="email"
                            id="email"
                            required=""
                          />
                          <div className="input-bg u-rainbow u-blur-perf" />
                          <input
                            type="submit"
                            data-wait="Request Invite"
                            className="form-submit w-button"
                            value="Request Invite"
                          />
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
                  <div className="home-hero-img-wrap">
                    <img
                      src={'/Home/colorback.webp'}
                      loading="eager"
                      width="780"
                      height="978"
                      alt=""
                      srcSet={`
                        ${colorback500} 500w,
                        ${colorback800} 800w,
                        ${colorback1080} 1080w,
                        ${colorback1080} 1560w
                      `}
                      sizes="(max-width: 479px) 100vw, (max-width: 767px) 88vw, (max-width: 991px) 85vw, 665px"
                      className="home-hero-portal"
                    />
                    <div className="home-hero-mockup cc-1">
                      <img
                        src={k4Img1}
                        loading="eager"
                        alt=""
                        srcSet={`${k4Img1} 500w, ${k4Img1} 800w`} // Adjust resolutions as needed
                        sizes="100vw"
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
                        srcSet={`${k4Img2} 500w, ${k4Img2} 800w`} // Adjust image resolutions if needed
                        sizes="(max-width: 479px) 55vw, (max-width: 767px) 43vw, (max-width: 991px) 42vw, 33vw"
                        className="u-auto-img"
                      />
                    </div>
                  </div>
                  <div className="hero-highlights-wrap">
                    <div id="w-node-ad4c9f6b-133e-5328-533f-5bfac5746f3d-1ff1a765" className="hero-highlight-cell">
                      <div className="icon-wrap">
                        <div className="icon-inner">
                          <img   src={hicon3}   loading="lazy" width="32" height="32" alt="" className="icon-img" />
                        </div>
                        <div className="icon-bg u-rainbow u-blur-perf" />
                      </div>
                      <h3 className="heading-m">Space for uninterrupted spiritual practice.</h3>
                    </div>
                    <div id="w-node-_72a88ba6-f63e-ddcc-c91e-4b1bac4187b0-1ff1a765" className="hero-highlight-cell">
                      <div className="icon-wrap">
                        <div className="icon-inner">
                          <img   src={hicon2}   loading="lazy" width="32" height="32" alt="" className="icon-img" />
                        </div>
                        <div className="icon-bg u-rainbow u-blur-perf" />
                      </div>
                      <h3 className="heading-m">Judgment-free space to express your true self.</h3>
                    </div>
                    <div
                      id="w-node-_259017ac-229f-902f-ea06-71dd3a914366-1ff1a765"
                      className="hero-highlight-cell cc-cancel"
                    >
                      <div className="icon-wrap">
                        <div className="icon-inner">
                          <img src={hicon1}  loading="lazy" width="32" height="32" alt="" className="icon-img" />
                        </div>
                        <div className="icon-bg u-rainbow u-blur-perf" />
                      </div>
                      <h3 className="heading-m">Space that values genuine expression.</h3>
                    </div>
                  </div>
                  <div className="hero-notice">*Subject to our Play by the Rules policy</div>
                </div>
              </div>
            </header>
            <section className="section">
              <div className="page-padding">
                <div className="container">
                  <div className="section-header">
                    <h2 className="section-heading">Discover, Evolve, Enlighten</h2>
                    <p className="subheading">
                      Explore diverse spiritual practices and <br />
                      insights to deepen your understanding.
                    </p>
                  </div>
                  <div className="features-grid">
                    <div id="w-node-_69f6d9e5-a5c9-8095-7cf7-7f0e9634648f-1ff1a765" className="features-card cc-green">
                      <div className="features-visual">
                        <div>
                          <img alt="icon"   src={image1} />
                        </div>
                      </div>
                      <div className="features-card-content">
                        <h3 className="heading-m u-mb-m">Community</h3>
                        <p className="subheading cc-features">Join a global network of like-minded spiritual seekers.</p>
                      </div>
                    </div>
                    <div id="w-node-e6951833-d713-8a8f-aaa8-1f91520097f5-1ff1a765" className="features-card cc-blue">
                      <div className="features-visual">
                        <div>
                          <img alt="icon"  src={image2}  />
                        </div>
                      </div>
                      <div className="features-card-content">
                        <h3 className="heading-m u-mb-m">Exploration</h3>
                        <p className="subheading cc-features">
                          Discover unique practices, and insights from various spiritual paths.
                        </p>
                      </div>
                    </div>
                    <div id="w-node-_5e6833de-9ed4-3b30-cf17-49757c7a399d-1ff1a765" className="features-card cc-purple">
                      <div className="features-visual">
                        <div>
                          <img alt="icon"  src={image3} />
                        </div>
                      </div>
                      <div className="features-card-content">
                        <h3 className="heading-m u-mb-m">Enlighten</h3>
                        <p className="subheading cc-features">Awaken through self-discovery, shared wisdom</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="section">
              <div className="page-padding">
                <div className="container">
                  <div className="section-header cc-coverage">
                    <div className="eyebrow-pill">
                      <div className="eyebrow-pill-inner">
                        <div>The world is your oyster</div>
                      </div>
                      <div className="eyebrow-pill-bg u-rainbow u-blur-perf" />
                    </div>
                    <h2 className="section-heading">
                      Who else is on the platform? <br />
                      Glad you asked.
                    </h2>
                    <p className="subheading">
                      Experience exclusive content from spiritual
                      <br /> leaders and teachers from across 150 countries.
                    </p>
                  </div>
                  <div className="coverage">
                    <div className="coverage-countries-wrap visible scroll-observe">
                      <div className="gurubox">
                        <div className="country-tag-wrap cc-1">
                          <div className="country-tag cc-1">
                            <div className="country-icon w-embed">
                              <img alt="icon" src={imgOsho} />
                            </div>
                            <div>Osho</div>
                          </div>
                        </div>
                        <div className="country-tag-wrap cc-2">
                          <div className="country-tag cc-2">
                            <div className="country-icon w-embed">
                              <img alt="icon"  src={imgSadguru} />
                            </div>
                            <div>Sadhguru</div>
                          </div>
                        </div>
                        <div className="country-tag-wrap cc-4">
                          <div className="country-tag cc-4">
                            <div className="country-icon w-embed">
                              <img alt="icon"  src={imgSharon} />
                            </div>
                            <div>Sharon</div>
                          </div>
                        </div>
                        <div className="country-tag-wrap cc-5">
                          <div className="country-tag cc-5">
                            <div className="country-icon w-embed">
                              <img alt="icon"  src={imgAnandmayi} />
                            </div>
                            <div>Anandmayi</div>
                          </div>
                        </div>

                        <div className="country-tag-wrap cc-7">
                          <div className="country-tag cc-6">
                            <div className="country-icon w-embed">
                              <img alt="icon"  src={imgAlan} />
                            </div>
                            <div>Alan</div>
                          </div>
                        </div>
                      </div>
                      <div className="gurubox">
                        <div className="country-tag-wrap cc-10">
                          <div className="country-tag cc-10">
                            <div className="country-icon w-embed">
                              <img alt="icon"  src={imgMooji} />
                            </div>
                            <div>Mooji</div>
                          </div>
                        </div>
                        <div className="country-tag-wrap cc-8">
                          <div className="country-tag cc-7">
                            <div className="country-icon w-embed">
                              <img alt="icon"   src={imgJk}  />
                            </div>
                            <div>JK</div>
                          </div>
                        </div>
                        <div className="country-tag-wrap cc-9">
                          <div className="country-tag cc-8">
                            <div className="country-icon w-embed">
                              <img alt="icon"  src={imgOmswami}  />
                            </div>
                            <div>Om Swami</div>
                          </div>
                        </div>
                        <div className="country-tag-wrap cc-9">
                          <div className="country-tag cc-8">
                            <div className="country-icon w-embed">
                              <img alt="icon"  src={imgSistershivani} />
                            </div>
                            <div>Sister Shivani</div>
                          </div>
                        </div>
                      </div>
                      <div className="gurubox">
                        <div className="country-tag-wrap cc-6">
                          <div className="country-tag cc-9">
                            <div>150+ More</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="section cc-cta-banner">
              <div className="page-padding">
                <div className="container">
                  <div className="cta-banner">
                    <div id="w-node-_88caa5af-3ca5-4396-86d8-64347c57d1b0-1ff1a765" className="cta-banner-left">
                      <div className="cta-banner-left-content">
                        <h3 className="heading-l">Request invite in 30 seconds</h3>
                        <ul  className="steps-list w-list-unstyled">
                          <li className="steps-list-item">
                            <div className="steps-list-step">1</div>
                            <div>Enter Full Name</div>
                          </li>
                          <li className="steps-list-item">
                            <div className="steps-list-step">2</div>
                            <div>Enter Phone Number</div>
                          </li>
                          <li className="steps-list-item">
                            <div className="steps-list-step">3</div>
                            <div>Enter OTP</div>
                          </li>
                        </ul>
                        <div className="timed-tag u-rainbow">
                          <div>Yes, we timed it.</div>
                          <div className="svg-embed w-embed">
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7.24634 0.730242C3.42974 0.778366 0.374344 3.91179 0.422468 7.7284C0.470591 11.545 3.60402 14.6004 7.42063 14.5523C11.2372 14.5042 14.2926 11.3707 14.2445 7.55412C14.1855 3.74226 11.0585 0.693119 7.24634 0.730242ZM11.453 5.11651L6.33504 10.3651C6.22416 10.4788 6.07743 10.5371 5.93 10.539C5.78256 10.5409 5.63442 10.4863 5.5207 10.3754L3.18798 8.10077C2.95995 7.87842 2.95536 7.51444 3.17771 7.28642C3.40005 7.0584 3.76403 7.05381 3.99206 7.27615L5.91247 9.14874L10.6283 4.31243C10.8507 4.0844 11.2147 4.07982 11.4427 4.30216C11.6707 4.5245 11.6753 4.88848 11.453 5.11651Z"
                                fill="#212121"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="w-node-_12a0934f-fc2f-1baa-1c5d-75377f54da26-1ff1a765" className="cta-banner-right">
                      <div>
                        <h3 className="heading-l">
                          One place, everyone <br />
                          everything spiritual
                        </h3>
                        <div className="cta-banner-price">Request</div>
                        <div className="u-weight-600">Invite</div>
                      </div>
                      <div className="form-wrap cc-cta-banner w-form">
                        <form
                          id="signup-form"
                          name="wf-form-Signup-Form-Footer"
                          data-name="Signup Form Footer"
                          method="get"
                          data-wf-page-id="66797c2909f9ec0b1ff1a765"
                          data-wf-element-id="e2e30d46-ff9c-c3e3-972d-6e77fcd12bc4"
                        >
                          <div className="input-wrap">
                            <input
                              className="input cc-cta-banner w-input"
                              maxLength="256"
                              name="Email"
                              data-name="Email"
                              placeholder="Enter your e-mail"
                              type="email"
                              id="email"
                              required=""
                            />
                            <div className="input-bg u-rainbow u-blur-perf" />
                            <input
                              type="submit"
                              data-wait="Sign up"
                              className="form-submit w-button"
                              value="Request Invite"
                            />
                          </div>
                        </form>
                        <div className="form-success cc-dark w-form-done">
                          <div>Thank you! Please continue by filling out our Typeform.</div>
                        </div>
                        <div className="u-hidden w-form-fail">
                          <div>Oops! Something went wrong while submitting the form.</div>
                        </div>
                      </div>
                      <img
                        src={imgMax}
                        loading="lazy"
                        width="288.5"
                        height="588.5"
                        alt=""
                        srcSet={`${imgMax} 500w, ${imgMax} 800w`} // Adjust image resolutions if needed
                        sizes="(max-width: 767px) 100vw, (max-width: 991px) 40vw, 42vw"
                        className="cta-banner-mockup"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <Footer />
          <div  className="modal-wrap">
            <div className="modal-bg" />
            <div className="modal">
              <div id="w-node-_91f44458-54e8-93f1-0068-745db572f823-b572f820" className="cta-banner-right cc-modal">
                <h3 className="heading-l cc-modal">One plan, one price.</h3>
                <div className="cta-banner-price">$69</div>
                <div className="u-weight-600">Per Month</div>
                <div className="form-wrap cc-cta-banner w-form">
                  <form
                    id="signup-form"
                    name="wf-form-Signup-Form-Modal"
                    data-name="Signup Form Modal"
                    method="get"
                    data-wf-page-id="66797c2909f9ec0b1ff1a765"
                    data-wf-element-id="91f44458-54e8-93f1-0068-745db572f82b"
                  >
                    <div className="input-wrap">
                      <input
                        className="input cc-cta-banner w-input"
                        maxLength="256"
                        name="Email"
                        data-name="Email"
                        placeholder="Enter your e-mail"
                        type="email"
                        id="email"
                        required=""
                      />
                      <div className="input-bg u-rainbow u-blur-perf" />
                      <input
                        type="submit"
                        data-wait="Request Invite"
                        className="form-submit w-button"
                        value="Request Invite"
                      />
                    </div>
                  </form>
                  <div className="form-success cc-dark w-form-done">
                    <div>Thank you! Please continue by filling out our Typeform.</div>
                  </div>
                  <div className="u-hidden w-form-fail">
                    <div>Oops! Something went wrong while submitting the form.</div>
                  </div>
                </div>
                <img
                  src={k4Img1}
                  loading="lazy"
                  width="288.5"
                  height="588.5"
                  alt=""
                  srcSet={`${k4Img1} 500w, ${k4Img1} 633w`} // Multiple image resolutions
                  sizes="100vw"
                  className="cta-banner-mockup cc-modal"
                />
                <img
                  src={k4Img1}
                  loading="lazy"
                  width="317.5"
                  height="180"
                  alt=""
                  srcSet={`${k4Img1} 500w, ${k4Img1} 633w`} // Multiple image resolutions
                  sizes="100vw"
                  className="cta-banner-img-mobile"
                />
              </div>
              <div className="modal-close">
                <div className="svg-embed w-embed">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M15.8373 4.16675L4.17064 15.8334"
                      stroke="white"
                      strokeWidth="1.66667"
                      strokeMiterlimit="10"
                      strokeLinecap="square"
                    />
                    <path
                      d="M15.8373 15.8334L4.17064 4.16675"
                      stroke="white"
                      strokeWidth="1.66667"
                      strokeMiterlimit="10"
                      strokeLinecap="square"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <script>
            const nav = document.querySelector(".nav");
            document.querySelector(".nav-mobile-btn").addEventListener("click", function () {
                this.x = ((this.x || 0) + 1) % 2;
                if (this.x) {
                    nav.classList.add("open");
                    document.body.style.overflow = "hidden";
                } else {
                    nav.classList.remove("open");
                    document.body.style.overflow = "auto";
                }
            });

            const navLinks = document.querySelectorAll(".mobile-menu-fade");
            let navDelay = 0;
            for (let i = 0; i < navLinks.length; i++) {
                navDelay += 0.05;
                navLinks[i].style.setProperty("--delay", `${navDelay}s`);
            }
        </script> */}
      </body>
    </html>
  );
}

export default Home;

