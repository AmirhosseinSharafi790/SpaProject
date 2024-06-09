import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";
import { isLogin } from "../../Utils";
function MyNavbar() {
  const expand = "md";
  const [loginStatus, setLoginStatus] = useState(isLogin() ? "خروج" : "ورود");
  const logoutHandler = () => {
    document.cookie =
      "username=admin; expires=Thu, 18 Dec 2020 12:00:00 UTC; path=/";
    setLoginStatus("ورود");
  };
  return (
    <Navbar expand={expand} className="mb-3 bg-navbar">
      <Container Container>
        <Navbar.Brand style={{ fontFamily: "Lalezar", fontSize: "30px" }}>
          دیمیروان
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          className="bg-navbar"
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              دیمیروان
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <NavLink to="/" style={{ margin: "0 8px" }} className="nav-link">
                صفحه اصلی
              </NavLink>
              <NavLink
                to="/about"
                style={{ margin: "0 8px" }}
                className="nav-link"
              >
                درباره ما
              </NavLink>
              <NavLink
                to="/blog"
                style={{ margin: "0 8px" }}
                className="nav-link"
              >
                مقالات
              </NavLink>
              <NavLink
                to="/panel"
                style={{ margin: "0 8px" }}
                className="nav-link"
              >
                پنل
              </NavLink>
              {isLogin() ? (
                <NavLink
                  onClick={logoutHandler}
                  to="/login"
                  style={{ margin: "0 8px" }}
                  className="nav-link"
                >
                  {loginStatus}
                </NavLink>
              ) : (
                <NavLink
                  to="/login"
                  style={{ margin: "0 8px" }}
                  className="nav-link"
                >
                  {loginStatus}
                </NavLink>
              )}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
