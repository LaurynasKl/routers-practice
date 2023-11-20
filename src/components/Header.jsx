import { Link } from "react-router-dom";

export function Header(){
    return (
        <div class="container">
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div class="col-md-3 mb-2 mb-md-0">
        <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
          <svg class="bi" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
        </a>
      </div>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><Link to="/" class="nav-link px-2 link-danger">Home</Link></li>
        <li><Link to="/demo" class="nav-link px-2">Demo</Link></li>
      </ul>

      <div class="col-md-3 text-end">
        <Link to='/login' type="button" class="btn btn-outline-primary me-2">Login</Link>
        <button type="button" class="btn btn-primary">Sign-up</button>
      </div>
    </header>
  </div>
    );
}