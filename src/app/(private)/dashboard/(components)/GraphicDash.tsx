'use client';

import { ArcElement, Chart as ChartJS, Legend, PieController, Title, Tooltip } from 'chart.js';
import { useRef } from 'react';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, PieController, Tooltip, Legend, Title);

const CHART_COLORS = {
  red: 'rgb(255, 99, 132)',
  orange: 'rgb(255, 159, 64)',
  yellow: 'rgb(255, 205, 86)',
  green: 'rgb(75, 192, 192)',
  blue: 'rgb(54, 162, 235)',
  purple: 'rgb(153, 102, 255)',
  grey: 'rgb(201, 203, 207)',
} as const;

const COLOR_LIST = Object.values(CHART_COLORS);

function rand(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function numbers(count: number, min: number, max: number): number[] {
  return Array.from({ length: count }, () => rand(min, max));
}

const DATA_COUNT = 5;

const initialChartData = {
  labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
  datasets: [
    {
      label: 'Dataset 1',
      data: numbers(DATA_COUNT, 0, 100),
      backgroundColor: COLOR_LIST.slice(0, DATA_COUNT),
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Pie Chart',
    },
  },
};

export const GraphicDash = () => {
  const chartRef = useRef<ChartJS<'pie'>>(null);

  return (
    <div className="column">
      <div className="box">
        <div style={{ height: 480, position: 'relative', width: '100%' }}>
          <Pie ref={chartRef} data={initialChartData} options={chartOptions} />
        </div>
        <div className="buttons is-flex-wrap-wrap mt-4"></div>
      </div>
    </div>
  );
};
