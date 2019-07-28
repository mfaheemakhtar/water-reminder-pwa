import Button from "@material/react-button";
import MaterialIcon from "@material/react-material-icon";
import React from "react";

function Glass(props) {
  const { icon, onClick, quantity } = props;

  return (
    <div className="glass">
      <Button
        icon={<MaterialIcon icon={icon} onClick={() => onClick(quantity)} />}
      />
      <span>{quantity} mL</span>
    </div>
  );
}

export default Glass;
