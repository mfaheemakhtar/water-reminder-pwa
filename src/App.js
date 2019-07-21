import { TopAppBarFixedAdjust } from "@material/react-top-app-bar";
import React, { Component } from "react";
import "./App.scss";
import TopNavBar from "./components/TopNavBar";

class App extends Component {
  render() {
    return (
      <div>
        <TopNavBar onMenuClick={() => {}} title="Water Reminder App" />
        <TopAppBarFixedAdjust>App content here</TopAppBarFixedAdjust>
      </div>
    );
  }
}

export default App;
