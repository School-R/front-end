// Registration for the react app - Only for Registration & Login
import React from 'react'
import Logo from '../../images/School_R.png';
import { Navbar, NavbarBrand, Button } from 'reactstrap';
import { useHistory } from "react-router-dom";

const RegistNav = () => {
  const history = useHistory();
  const url = window.location.href;

  // Make sure to add a logout function
  return (
    <div>
      <Navbar color="dark" dark>
        <NavbarBrand
          href="Deployed Marketing Page Goes Here"
          className="school-r">
          <img src={Logo} alt="logo" className="logo" />
        </NavbarBrand>
        {/* {url.match(/register/gi) ? ( */}
          <span>
            <Button
              onClick={() => history.push("/login")}
              outline
              color="secondary"
              className="school-r2">
              Login
            </Button>
            <Button
              onClick={() => history.push("/logout")}
              outline
              color="secondary"
              className="school-r2">
              Log Out
            </Button>
          </span>
      </Navbar>
    </div>
  );
};

export default RegistNav;