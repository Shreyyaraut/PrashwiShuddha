import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { FaSearch } from "react-icons/fa";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;
  const [searchQuery, setSearchQuery] = useState("");

  const closeMobileMenu = () => {
    const menu = document.querySelector(".navbar-collapse");
    if (menu && menu.classList.contains("show")) {
      menu.classList.remove("show");
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();

    if (!searchQuery.trim()) return;

    closeMobileMenu();

    navigate(`/search?query=${encodeURIComponent(searchQuery.trim())}`);
    setSearchQuery(""); // optional: clear input
  };

  return (
    <nav
      className="navbar navbar-expand-lg shadow-sm fixed-top"
      style={{ backgroundColor: "#fbfbfb", zIndex: 1000 }}
    >
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img
            src="/media/images/webLogo.webp"
            alt="logo"
            style={{ maxWidth: "115px", height: "auto" }}
          />
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  currentPath === "/" ? "active fw-bold text-purpule" : ""
                }`}
                to="/"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link ${
                  currentPath === "/about" ? "active fw-bold text-purpule" : ""
                }`}
                to="/about"
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link ${
                  currentPath === "/products" ? "active fw-bold text-purpule" : ""
                }`}
                to="/products"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
          {/* </ul> */}

          {/* Search Bar */}
          <form className="ms-3" onSubmit={handleSearch}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#e6b8ee",
                borderRadius: "20px",
                padding: "6px 14px",
                marginRight: "10px",
                marginLeft: "30px"
              }}
            >
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search"
                style={{
                  border: "none",
                  outline: "none",
                  background: "transparent",
                  fontSize: "18px",
                  color: "black",
                  width: "100px",
                }}
              />
              <button
                type="submit"
                style={{
                  background: "transparent",
                  border: "none",
                  marginLeft: "5px",
                  cursor: "pointer",
                }}
              >
                <i className="fa fa-search" style={{ color: "#552d61" }}></i>
              </button>
            </div>
          </form>
          
          <li className="nav-item">
              <Link
                className={`nav-link ${
                  currentPath === "/cart" ? "active fw-bold text-purpule" : ""
                }`}
                to="/cart"
                onClick={closeMobileMenu}
              >
                <i className="fa fa-shopping-cart" aria-hidden="true" style={{fontSize: "30px"}}></i>  Cart
              </Link>
            </li>
            </ul>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
