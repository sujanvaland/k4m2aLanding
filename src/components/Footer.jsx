import React from 'react';
import { Link } from 'react-router-dom';
import logo from '/Home/logo.png';

const Navigation = () => {
  return (
    <nav className="nav">
      <div className="page-padding">
        <div className="container">
          <div className="nav-inner">
            <div className="nav-left">
              <Link aria-label="k4m2a logo" to="/" aria-current="page" className="nav-logo w-inline-block w--current">
                <div className="svg-embed cc-logo-word w-embed">
                  <img alt="logo" src="/Home/logo.png" />
                </div>
              </Link>
              <div className="nav-menu">
                <Link to="/" aria-current="page" className="nav-link w--current">
                  Home
                </Link>
                <Link to="/manifesto" className="nav-link">
                  Manifesto
                </Link>
                <Link to="/research" className="nav-link">
                  Research
                </Link>
                <Link to="/careers" target="_blank" className="nav-link">
                  Careers
                </Link>
              </div>
            </div>
            <div className="nav-right">
              <Link to="/register" className="cta cc-nav w-inline-block">
                <div className="cta-bg u-rainbow u-blur-perf" />
                <div className="cta-inner cc-nav">
                  <div>Sign in</div>
                </div>
              </Link>
              <div className="nav-mobile-btn">
                <div className="hamburger_1_wrap">
                  <div className="hamburger_1_line" />
                  <div className="hamburger_embed w-embed">
                    <style>
                      {` .hamburger_1_wrap {
                        --thickness: 2px;
                        --gap: 6px;
                        --rotate: 45;
                        --width: 100%;
                      }
                      .open .hamburger_1_line:first-child {
                        transform: translateY(calc(var(--thickness) * 0.5 + var(--gap) * 0.5)) rotate(calc(var(--rotate) * 1deg));
                      }
                      .open .hamburger_1_line:last-child {
                        transform: translateY(calc(var(--thickness) * -0.5 + var(--gap) * -0.5)) rotate(calc(var(--rotate) * 3 * 1deg));
                      }`}
                    </style>
                  </div>
                  <div className="hamburger_1_line" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

