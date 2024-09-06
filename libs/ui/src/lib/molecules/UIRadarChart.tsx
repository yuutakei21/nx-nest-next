import type { ChartData, ChartOptions } from 'chart.js';
import 'chart.js/auto';
import { useEffect, useState } from 'react';
import { Chart } from 'react-chartjs-2';

interface RadaChartProps {
  labels: string[];
  // data: ChartData<'radar'>;
  data: number[];
  width?: number;
  className?: string;
}

const RADA_OPTIONS: ChartOptions<'radar'> = {
  responsive: true,
  plugins: {
    title: {
      display: false,
    },
    legend: {
      display: false,
    },
  },
  interaction: {
    intersect: false,
  },
  scales: {
    r: {
      ticks: {
        display: false,
        stepSize: 1,
        color: '#222',
      },
      grid: {
        color: '#222',
      },
      min: 0,
      max: 5,
      beginAtZero: true,
      angleLines: {
        display: true,
        color: '#222',
      },
      pointLabels: {
        font: {
          size: 14,
        },
        color: '#222222',
      },
    },
  },
  maintainAspectRatio: false,
};

const UIRadarChart = ({ labels, data, width, className }: RadaChartProps) => {
  // console.log(data)
  // console.log(labels)
  const [chartData, setChartData] = useState<any>({
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: 'rgba(249, 209, 103, 0.9)',
        borderColor: 'transparent',
        borderWidth: 1,
        pointBackgroundColor: 'transparent',
        pointStyle: false,
        fill: true,
      },
    ],
  });

  useEffect(() => {
    setChartData({
      labels: labels,
      datasets: [
        {
          data: data,
          backgroundColor: 'rgba(249, 209, 103, 0.9)',
          borderColor: 'transparent',
          borderWidth: 1,
          pointBackgroundColor: 'transparent',
          pointStyle: false,
          fill: true,
        },
      ],
    });
  }, [data]);

  return <Chart className={className} width={width} type="radar" data={chartData} options={RADA_OPTIONS} />;
};

export default UIRadarChart;
