import React, { Component } from "react";
import Glass from "../../components/Glass";
import { Cell, Grid, Row } from "../../components/Layout";
import PieChart from "../../components/PieChart";
import Separator from "../../components/Separator";
import { Body1 } from "../../components/Typography";
import GLASSES from "../../constants/glass";

const UNIT = "mL";

class Home extends Component {
  state = {
    lastGlassSize: 0,
    progress: 0,
    goal: 1800
  };

  drinkWater = quantity => {
    const { progress } = this.state;
    this.setState({ lastGlassSize: quantity, progress: progress + quantity });
  };

  undoDrinkWater = quantity => {
    const { lastGlassSize, progress } = this.state;
    this.setState({ lastGlassSize: 0, progress: progress - lastGlassSize });
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

        <Separator className="my-4" />

        <Row>
          {GLASSES.map(glass => {
            return (
              <Cell desktopColumns={3} phoneColumns={1} tabletColumns={2}>
                <Glass
                  icon={glass.icon}
                  onClick={this.drinkWater}
                  quantity={glass.quantity}
                />
              </Cell>
            );
          })}
        </Row>
      </Grid>
    );
  }
}

export default Home;
