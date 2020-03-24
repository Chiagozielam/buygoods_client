import React from "react";
import { Dropdown, Icon, Menu, Segment } from "semantic-ui-react";
import styles from "./navbar.module.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <Menu className={styles["topNav"]} attached="top">
        <Link to="/"><p className={`${styles["logo"]}`}>Buygoods</p></Link>

        <Menu.Menu position="right">
								<Menu.Item
          name='Help'
        />
          <Dropdown item text="Account" simple>
            <Dropdown.Menu>
              <Dropdown.Item><Link to="/register">Create Account</Link></Dropdown.Item>
              <Dropdown.Item><Link to="/login">Login</Link></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
      {/* <div className="ui right aligned category search item">
        <div className="ui transparent icon input">
          <input
            className="prompt"
            type="text"
            placeholder="Search animals..."
          />
          <i className="search link icon" />
        </div>
        <div className="results" />
      </div> */}
    </div>
  );
};

export default Navbar;
