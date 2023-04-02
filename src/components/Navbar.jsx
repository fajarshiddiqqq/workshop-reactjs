import { Link, NavLink } from "react-router-dom";
import img1 from "../img/amikom.png";

const navigation = [
  { title: "Home", href: "/" },
  { title: "Gallery", href: "/gallery" },
  { title: "Contact", href: "/contact" },
];

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary pt-4 mb-5 pb-4 border-bottom">
        <div class="container">
          <div className="d-flex flex-direction-column align-items-center">
            <img
              src={img1}
              alt=""
              style={{ width: "40px", marginRight: "10px" }}
            />
            <a class="navbar-brand" href="#">
              AMIKOM
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                {navigation.map((item) => (
                  <li class="nav-item">
                    <NavLink
                      className={`nav-link ${({isActive}) => isActive ? "active" : ""}`}
                      aria-current="page"
                      to={item.href}
                      key={item.title}
                    >
                      {item.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Link className="btn btn-outline-primary" to={`/login`}>
            Login
          </Link>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
