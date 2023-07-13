import { FC } from "react";

import Card from "../ui/card";
import Button from "../ui/button";

import classes from "./AppInfo.module.css";

interface AppInfoProps {
  onClose: () => void;
}

const AppInfo: FC<AppInfoProps> = ({ onClose }) => {
  return (
    <Card className={classes.info}>
      <h2 className={classes.title}>Welcome to React Tags Search App</h2>
      <Button onClick={onClose}>Close</Button>
    </Card>
  );
};

export default AppInfo;
