import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="mt-5" style={{ backgroundColor: "#fbfbfb" }}>
      <div className="container py-5">
        <div className="row text-center text-md-start">
          {/* Logo & Social */}
          <div className="col-12 col-md-5 mb-4">
            <img
              src="/media/images/webLogo.webp"
              alt="logo"
              style={{ maxWidth: "120px", height: "auto" }}
            />
            <p className="mt-3">
              Nurture your beauty every day, every mood, every you
              {/* &copy; 2022 - 2025,
              <br /> Prashwi Shuddha 
              <br /> All rights reserved. */}
            </p>
            {/* <div className="social-icons d-flex gap-1 fs-4">
              <a
                href="https://www.linkedin.com/company/itfuturetech/?originalSubdomain=in"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-facebook-official" aria-hidden="true"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-twitter-square" aria-hidden="true"></i>
              </a>
            </div> */}
          </div>

          {/* Services */}
          <div className="col-12 col-md-2 mb-4">
            <p className="fs-5 fw-semibold">Support</p>
            FAQ
            <br /> Terms & Conditions
            <br /> Privacy Policy
            {/* <Link
              to="/services#itresourcing"
              style={{ textDecoration: "none", color: "black" }}
            >
              IT Resources
            </Link>

            <br />
            <Link
              to="/services#itconsulting"
              style={{ textDecoration: "none", color: "black" }}
            >
              IT Consulting
            </Link>

            <br />
            <Link
              to="/services#itservices"
              style={{ textDecoration: "none", color: "black" }}
            >
              IT Services
            </Link>

            <br /> */}
          </div>

          {/* Categories */}

          <div className="col-12 col-md-2 mb-4">
  <p className="fs-5 fw-semibold">Categories</p>
  <p>
    <Link to="/products#skincare" style={{ textDecoration: 'none', color: 'inherit' }}>Skincare</Link>
    <br />
    <Link to="/products#categories" style={{ textDecoration: 'none', color: 'inherit' }}>Bodycare</Link>
    <br />
    <Link to="/products#haircare" style={{ textDecoration: 'none', color: 'inherit' }}>Haircare</Link>
    <br />
    <Link to="/products#makeup" style={{ textDecoration: 'none', color: 'inherit' }}>Makeup</Link>
  </p>
</div>

          {/* Contact */}
          <div className="col-12 col-md-3 mb-4">
            <p className="fs-5 fw-semibold">Contact Us</p>
            <p>
              Prashwi Shuddha
              <br />
              <a
                href="mailto:contact@prarnwellness.com"
                style={{
                  textDecoration: "none",
                  color: "black",
                  marginLeft: "5px",
                }}
              >
               <i className="fa fa-envelope" style={{ color: "#5d0374" }}></i> contact@prarnwellness.com
              </a>
              <br />
              <a
                href="tel:+919923071433"
                style={{
                  textDecoration: "none",
                  color: "black",
                  marginLeft: "5px",
                }}
              >
               <i
                className="fa fa-phone-square"
                style={{ color: "#5d0374" }}
              ></i> +91 9923071433
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="container py-3 border-top d-flex justify-content-between align-items-center mb-3">
        <p className="mb-0">
          &copy; 2023 Prashwi Shuddha. All Rights Reserved.
        </p>

        <div className="social-icons d-flex gap-3 fs-4">
          <a
            href="https://www.instagram.com/prashwishuddha?igsh=MTlnaXNtYXF3YTZzaA=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-facebook-official" aria-hidden="true"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
