import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Toolbar, Button } from "@material-ui/core";
import Components from "../components/Components";
import navStyles from "../styles/Nav.module.scss";

const Nav: React.FC = () => {
  const { nav, title, login, formContainer } = navStyles;
  const { Login } = Components;

  // Toggle state to display or close form
  const [displayForm, setDisplayForm] = useState(false);

  // Get displayForm state from session storage
  useEffect(() => {
    displayForm && sessionStorage.getItem(JSON.parse('display-form-data'));
    setDisplayForm(displayForm);
  }, []);

  // Store displayForm state within session storage
  useEffect(() => {
    sessionStorage.setItem('display-form-data', JSON.stringify(displayForm));
  });

  return (
    <React.Fragment>
      <Toolbar className={nav}>
        <Link href="/">
          <h1 className={title}>Technology Blog</h1>
        </Link>
        <Button 
          variant="contained"
          color="primary"
          size="large"
          onClick={() => setDisplayForm(true)}
        >
          <p className={login}>Demo Sign In</p>
        </Button>
      </Toolbar>
        {
          displayForm && 
          <div className={formContainer}>
            <Login formDisplay={{ displayForm, setDisplayForm }} />
          </div>
        }
    </React.Fragment>
  );
}

export default Nav;