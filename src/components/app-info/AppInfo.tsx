import { FC } from "react";

import Card from "../ui/card";

import classes from "./AppInfo.module.css";

const AppInfo: FC = () => {
  return (
    <Card className={classes.info}>
      <h2 className={classes.title}>Welcome to React Tags Search App</h2>
    </Card>
  );
};

export default AppInfo;
