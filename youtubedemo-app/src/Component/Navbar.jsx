import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../logo.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        <img
          src={logo}
          width="50"
          height="30"
          className="d-inline-block align-top"
          alt="YouTube logo"
          style={{ paddingLeft: "10px", paddingRight: "5px" }}
        />
        YouTube Demo
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/Playlist">
              Playlist
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/Channel">
              Channel
            </a>
          </li>
        </ul>
      </div>
      <div></div>
      <div>
        <form className="d-flex" action="/Search" method="get">
          <input
            type="text"
            className="form-control me-2"
            placeholder="Search the videos"
            aria-label="Search"
            name="s"
          />
          <button
            type="submit"
            className="btn btn-outline-light"
            style={{ paddingLeft: "10px" }}
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
