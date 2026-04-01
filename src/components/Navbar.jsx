import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 container mx-auto">
        <div className="navbar-start">
          <a className="text-3xl font-bold text-[#4F39F6]">DigiTools</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a>Products</a></li>
            <li><a>Features</a></li>
            <li><a>Pricing</a></li>
            <li><a>Testimonials</a></li>
            <li><a>FAQ</a></li>
          </ul>
        </div>
        <div className="navbar-end gap-3 ">
          <img src={cartImg} alt="cart" />
          <a>Login</a>
          <a className="btn bg-[#4F39F6] text-white rounded-4xl">Get Started</a>
        </div>
      </div>

        </div>
    );
};

export default Navbar;