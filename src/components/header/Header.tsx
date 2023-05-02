import { FC } from "react";

import AppTitle from "./app-title";

import classes from "./Header.module.css";

const Header: FC = () => {
  return (
    <div className={classes.header}>
      <AppTitle />
    </div>
  );
};

export default Header;
