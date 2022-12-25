import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  goldencategoryData,
  slivercategoryData,
} from "../../service/auth.service";
import { listBody } from "../../utils/helper";

export default function Navbar() {
  const [categoriesData, setcategoriesData] = useState([]);
  const [slivercategoriesData, setslivercategoriesData] = useState([]);

  useEffect(() => {
    getcategoryData();
    getslivercategoryData();
  }, []);

  const getcategoryData = async () => {
    const response = await goldencategoryData(
      listBody({
        where: {
          isActive: true,
        },
        perPage: 1000,
      })
    );
    if (response) {
      setcategoriesData(response);
    }
  };

  const getslivercategoryData = async () => {
    const response = await slivercategoryData(
      listBody({
        where: {
          isActive: true,
        },
        perPage: 1000,
      })
    );
    if (response) {
      setslivercategoriesData(response);
    }
  };
  return (
    <>
      <header className="header axil-header header-style-5">
        {/* Start Mainmenu Area  */}
        <div id="axil-sticky-placeholder" />
        <div className="axil-mainmenu">
          <div className="container">
            <div className="header-navbar">
              <div className="header-brand">
                <a href="index-2.html" className="logo logo-dark">
                  <img src="img/logomain.png" width={150} alt="Site Logo" />
                </a>
                <a href="index-2.html" className="logo logo-light">
                  <img
                    src="assets/images/logo/logo-light.png"
                    width={150}
                    alt="Site Logo"
                  />
                </a>
              </div>
              <div className="header-main-nav">
                {/* Start Mainmanu Nav */}
                <nav className="mainmenu-nav">
                  <button className="mobile-close-btn mobile-nav-toggler">
                    <i className="fas fa-times" />
                  </button>
                  <div className="mobile-nav-brand">
                    <a href="index-2.html" className="logo">
                      <img src="img/logomain.png" alt="Site Logo" />
                    </a>
                  </div>
                  <ul className="mainmenu">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link to="/goldproducts">Gold</Link>
                      <ul className="axil-submenu">
                        {categoriesData?.map((card) => {
                          return (
                            <li>
                              <Link to={`/goldproducts?cid=${card._id}`}>
                                {card.goldenName}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <Link to="/sliverproducts">Sliver</Link>
                      <ul className="axil-submenu">
                        {slivercategoriesData?.map((card) => {
                          return (
                            <li>
                              <Link to={`/sliverproducts?cid=${card._id}`}>
                                {card.sliverName}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/career">Career</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
                {/* End Mainmanu Nav */}
              </div>

              <div className="header-action">
                <ul className="action-list">
                  <li className="axil-search d-xl-block d-none">
                    <input
                      type="search"
                      className="placeholder product-search-input"
                      name="search2"
                      id="search2"
                      maxLength={128}
                      placeholder="What are you looking for?"
                      autoComplete="off"
                    />
                    <button type="submit" className="icon wooc-btn-search">
                      <i className="flaticon-magnifying-glass" />
                    </button>
                  </li>
                  <li className="axil-search d-xl-none d-block">
                    <a
                      href="javascript:void(0)"
                      className="header-search-icon"
                      title="Search"
                    >
                      <i className="flaticon-magnifying-glass" />
                    </a>
                  </li>

                  <li className="axil-mobile-toggle">
                    <button className="menu-btn mobile-nav-toggler">
                      <i className="flaticon-menu-2" />
                    </button>
                  </li>
                </ul>
              </div>

              <div className="social-share" style={{ paddingLeft: "20px" }}>
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* End Mainmenu Area */}
      </header>
    </>
  );
}
