/**
 * Charts Components
 */
import React, { Component } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Collapse } from "antd";
import sampleBarChart from "./BarChart";
import lineChart from "./LineChart";
import donutCharts from "./DonutChart";

const { Panel } = Collapse;

/**
 * @class @name Charts
 */
class Charts extends Component {
  /**
   * @method componentDidMount
   * renders initially to set the menuSelection key
   */
  componentDidMount() {
    this.props.atnMenuSelectedKey("4");
  }

  /**
   * @render
   * returns the charts on ui
   */
  render() {
    return (
      <div>
        <h1>Charts</h1>
        <div className="charts-collapse-pannel">
          <div>
            <Collapse>
              <Panel header="Line chart" key="1">
                <HighchartsReact highcharts={Highcharts} options={lineChart} />
              </Panel>
            </Collapse>
          </div>
          <div>
            <Collapse>
              <Panel header="Bar chart" key="1">
                <HighchartsReact
                  highcharts={Highcharts}
                  options={sampleBarChart}
                />
              </Panel>
            </Collapse>
          </div>
          <div>
            <Collapse>
              <Panel header="Donut chart" key="2">
                <HighchartsReact
                  highcharts={Highcharts}
                  options={donutCharts}
                />
              </Panel>
            </Collapse>
          </div>
        </div>
      </div>
    );
  }
}

export default Charts;
