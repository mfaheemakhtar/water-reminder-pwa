import { TopAppBarFixedAdjust } from "@material/react-top-app-bar";
import React, { Component } from "react";
import "./App.scss";
import Drawer from "./components/Drawer";
import List from "./components/List";
import TopNavBar from "./components/TopNavBar";
import MENU from "./constants/menu";

class App extends Component {
  state = {
    isMenuOpen: false
  };

  toggleMenu = () => {
    const { isMenuOpen } = this.state;
    this.setState({ isMenuOpen: !isMenuOpen });
  };

  render() {
    const { isMenuOpen } = this.state;

    return (
      <div>
        <Drawer onClose={this.toggleMenu} open={isMenuOpen} title="LOGO">
          <List items={MENU} />
        </Drawer>

        <TopNavBar onMenuClick={this.toggleMenu} title="Water Reminder App" />

        <TopAppBarFixedAdjust>App content here</TopAppBarFixedAdjust>
      </div>
    );
  }
}

export default App;
