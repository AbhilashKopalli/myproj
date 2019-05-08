import ReactDOM from 'react-dom';
import React from 'react';
import HeatMap from 'react-heatmap-grid';

var xLabels = new Array(24).fill(0).map((_, i) => `${i}`);
var yLabels = ['Sun', 'Mon', 'Tue'];
var data = new Array(yLabels.length).fill(0)
.map(() => new Array(xLabels.length).fill(0).map(() => Math.floor(Math.random() * 100)));


class Heat extends React.Component  {

render(){
    return (
  <HeatMap
    xLabels={xLabels}
    yLabels={yLabels}
    data={data}
    cellRender={value => value && `${value}%`}
  />
)
}
}

export default Heat