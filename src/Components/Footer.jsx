import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer bg-base-200 text-base-content p-10">
      <nav>
        <h6 className="footer-title">Links</h6>
        <Link to="/" className="link link-hover">
          Home
        </Link>
        <Link to="/about" className="link link-hover">
          About
        </Link>
        <Link to="/products" className="link link-hover">
          Products
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title">Forum</h6>
        <a className="link link-hover">About us</a>
        <Link to="/contact" className="link link-hover">
          Contact
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
      </nav>
      <form>
        <h6 className="footer-title">Newsletter</h6>
        <fieldset className="form-control w-80">
          <label className="label">
            <span className="label-text">Enter your email address</span>
          </label>
          <div className="join">
            <input
              type="text"
              placeholder="username@example.com"
              className="input input-bordered join-item"
            />
            <button className="btn btn-primary join-item">Join</button>
          </div>
        </fieldset>
      </form>
    </footer>
  );
};

export default Footer;
