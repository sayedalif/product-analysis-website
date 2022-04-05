import './DashBoard.css';
// line chart
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

// radar chart

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from 'recharts';
import { useEffect, useState } from 'react';

const DashBoard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="dashboard">
      {/* LineChart */}
      <LineChart width={400} height={500} data={data}>
        <Line dataKey={'revenue'}></Line>
        <Line dataKey={'sell'}></Line>
        <Line dataKey={'investment'}></Line>
        <Tooltip></Tooltip>
        <XAxis dataKey={'month'}></XAxis>
        <YAxis></YAxis>
      </LineChart>
      {/* RadarChart */}

      <RadarChart
        cx={300}
        cy={250}
        outerRadius={150}
        width={500}
        height={500}
        data={data}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="month" />
        <PolarRadiusAxis />
        <Tooltip />
        <Radar
          name="investment"
          dataKey={'investment'}
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />

        <Radar
          name="sell"
          dataKey={'sell'}
          stroke="#e69138"
          fill="#e69138"
          fillOpacity={0.6}
        />

        <Radar
          name="revenue"
          dataKey={'revenue'}
          stroke="#6fd243"
          fill="#6fd243"
          fillOpacity={0.6}
        />
      </RadarChart>
    </div>
  );
};

export default DashBoard;
