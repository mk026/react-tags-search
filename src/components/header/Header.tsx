import { FC } from "react";

import AppTitle from "./app-title";

import classes from "./Header.module.css";

const Header: FC = () => {
  return (
    <header className={classes.header}>
      <AppTitle />
    </header>
  );
};

export default Header;
