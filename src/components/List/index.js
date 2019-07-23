import List, {
  ListItem,
  ListItemGraphic,
  ListItemText
} from "@material/react-list";
import "@material/react-list/index.scss";
import MaterialIcon from "@material/react-material-icon";
import React from "react";

function ListComponent(props) {
  const { items, selected } = props;

  return (
    <List singleSelection selectedIndex={selected}>
      {items.map(item => (
        <ListItem key={item.text}>
          <ListItemGraphic graphic={<MaterialIcon icon={item.icon} />} />
          <ListItemText primaryText={item.text} />
        </ListItem>
      ))}
    </List>
  );
}

export default ListComponent;
