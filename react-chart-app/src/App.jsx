import { useState } from 'react'
import { useEffect } from 'react'
import BarChart from './Components/BarChart';
import LineChart from './Components/LineChart';
import ScatterChart from './Components/ScatterChart';
import BubbleChart from './Components/BubbleChart';
import './App.css'

function App() {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    fetch('/financial_data.json')
    .then((response) => response.json())
    .then((data) => setChartData(data));
  }, []);

  if (!chartData) {
    return <div>Loading...</div>;
  }

  
return (
    <div style={{ textAlign: 'center' }}>
    <h1>Dynamic Charts with React and Chart.js</h1>
    <BarChart data={chartData} />
    <br />
    <LineChart data={chartData}/>
    <br />
    <ScatterChart data={chartData}/>
    <br />
    <BubbleChart data={chartData}/>
    </div>
)
}

export default App
