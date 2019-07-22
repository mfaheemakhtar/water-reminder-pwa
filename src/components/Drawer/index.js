import Drawer, {
  DrawerContent,
  DrawerHeader,
  DrawerTitle
} from "@material/react-drawer";
import "@material/react-drawer/index.scss";
import React from "react";

function DrawerComponent(props) {
  const { children, title } = props;

  return (
    <Drawer>
      <DrawerHeader>
        <DrawerTitle tag="h2">{title}</DrawerTitle>
      </DrawerHeader>

      <DrawerContent>{children}</DrawerContent>
    </Drawer>
  );
}

export default DrawerComponent;
