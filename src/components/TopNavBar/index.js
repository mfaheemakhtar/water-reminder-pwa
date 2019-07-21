import MaterialIcon from "@material/react-material-icon";
import TopAppBar, {
  TopAppBarIcon,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle
} from "@material/react-top-app-bar";
import React from "react";

function TopNavBar(props) {
  const { onMenuClick, title } = props;

  return (
    <TopAppBar>
      <TopAppBarRow>
        <TopAppBarSection align="start">
          <TopAppBarIcon navIcon tabIndex={0}>
            <MaterialIcon hasRipple icon="menu" onClick={onMenuClick} />
          </TopAppBarIcon>

          <TopAppBarTitle>{title}</TopAppBarTitle>
        </TopAppBarSection>
      </TopAppBarRow>
    </TopAppBar>
  );
}

export default TopNavBar;
