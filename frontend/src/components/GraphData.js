import React from 'react'
import  { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
function GraphData() {
    const [graph,setGraph]=useState([])
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:3001/api/graph');
            setGraph(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);

      const chartData = {
        labels: graph.map(item => item.x),
        datasets: [
          {
            label: 'Graph Data',
            data: graph.map(item => item.y),
            fill: false,
            borderColor: 'rgba(75, 192, 192, 1)',
          },
        ],
      };
      console.log(graph);
  return (
    <div className='w-full'>
    <Line data={chartData} />
  </div>
  )
}

export default GraphData