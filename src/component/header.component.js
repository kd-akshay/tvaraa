/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from "../assets/logoTvaraa.jpeg";
import gem from "../assets/gem.jpeg";
function Header() {
  return (
    <div class="navbar navbar-light fixed-top nav-bg-blue m-lr-n-12 p-lr-cust">
      <a class="navbar-brand" href="#">
        <img src={logo} width="150" height="60" alt="tvaraa induxtries" />
      </a>
      <a class="navbar-brand" href="#">
        <img src={gem} height="60" alt="gem" />
      </a>
    </div>
  );
}

export default Header;
