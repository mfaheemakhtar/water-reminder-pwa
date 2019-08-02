import React from "react";
import ReactMinimalPieChart from "react-minimal-pie-chart";

function PieChart(props) {
  const { color, value } = props;

  return (
    <ReactMinimalPieChart
      animate
      animationDuration={1000}
      animationEasing="linear"
      data={[{ value, color }]}
      label={({ data }) => {
        return `${data[0].value}%`;
      }}
      labelPosition={0}
      lengthAngle={360}
      lineWidth={5}
      radius={30}
      startAngle={180}
      totalValue={100}
    />
  );
}

export default PieChart;
