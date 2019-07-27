import React, { Component } from "react";
import { Cell, Grid, Row } from "../../components/Layout";
import PieChart from "../../components/PieChart";
import { Body1 } from "../../components/Typography";
import Separator from "../../components/Separator";

const UNIT = "mL";

class Home extends Component {
  state = {
    progress: 1000,
    goal: 1800
  };

  render() {
    const { goal, progress } = this.state;

    const goalPercent = parseFloat(((progress / goal) * 100).toFixed(0));

    return (
      <Grid>
        <Row>
          <Cell desktopColumns={6} phoneColumns={2} tabletColumns={4}>
            <PieChart color="#6200ee" value={goalPercent} />
          </Cell>

          <Cell
            align="middle"
            desktopColumns={6}
            phoneColumns={2}
            tabletColumns={4}
          >
            <Body1 className="mb-0 text-2rem text-primary">{`${progress} ${UNIT}`}</Body1>
            <Body1>{`out of ${goal} ${UNIT}`}</Body1>
          </Cell>
        </Row>

        <Separator />
      </Grid>
    );
  }
}

export default Home;
