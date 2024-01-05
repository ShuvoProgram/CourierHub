import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  
  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
  
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      }
    },
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [400, 300, 600, 200, 500, 700, 350],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: [300, 500, 450, 800, 200, 550, 400],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  
  function BarChart() {
    return (
      <div className="bg-white rounded-xl h-auto w-full shadow-lg p-2 text-center">
        <span className="font-medium uppercase text-gray-800">User Visited</span>
        <Bar options={options} data={data} />
      </div>
    );
  }
  
  export default BarChart;
  