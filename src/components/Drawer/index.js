import Drawer, {
  DrawerContent,
  DrawerHeader,
  DrawerTitle
} from "@material/react-drawer";
import "@material/react-drawer/index.scss";
import React from "react";

function DrawerComponent(props) {
  const { children, onClose, open, title } = props;

  return (
    <Drawer modal onClose={onClose} open={open}>
      <DrawerHeader>
        <DrawerTitle tag="h2">{title}</DrawerTitle>
      </DrawerHeader>

      <DrawerContent>{children}</DrawerContent>
    </Drawer>
  );
}

export default DrawerComponent;
