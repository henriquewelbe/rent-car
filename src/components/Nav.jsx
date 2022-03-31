import React from "react";
import Logo from "./Logo";

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-container">
        <Logo />
        <div className="nav-right-side">
          <a href="google.com" className="terms-and-conditions">
            Terms and Conditions / Policies
          </a>
          <spam className="total-container">
            <spam className="total-price">total:</spam>
            <spam className="total-number">r$50,00</spam>
          </spam>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
