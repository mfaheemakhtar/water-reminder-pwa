import { TopAppBarFixedAdjust } from "@material/react-top-app-bar";
import React, { Component } from "react";
import "./App.scss";
import Drawer from "./components/Drawer";
import { Cell, Grid, Row } from "./components/Layout";
import List from "./components/List";
import PieChart from "./components/PieChart";
import TopNavBar from "./components/TopNavBar";
import { Body1 } from "./components/Typography";
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

        <TopAppBarFixedAdjust>
          <Grid>
            <Row>
              <Cell desktopColumns={6} phoneColumns={2} tabletColumns={4}>
                <PieChart color="#6200ee" value={80} />
              </Cell>

              <Cell
                align="middle"
                desktopColumns={6}
                phoneColumns={2}
                tabletColumns={4}
              >
                <Body1 className="mb-0 text-2rem text-primary">1000 mL</Body1>
                <Body1>out of 1800 mL</Body1>
              </Cell>
            </Row>
          </Grid>
        </TopAppBarFixedAdjust>
      </div>
    );
  }
}

export default App;
