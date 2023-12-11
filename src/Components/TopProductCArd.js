import React, { useState, useEffect } from 'react';
// import css from './Components/Top.css';
import Chart from 'chart.js/auto';
import axios from 'axios';



const TopProductsCArd = ({charts}) => {
  const [chart, setChart] = useState(charts);
  const [selectedMonth, setSelectedMonth] = useState(0);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const apiUrl = "http://localhost:8000/pieChart/";
  const months = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
  ];

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  
  };
  useEffect(() => {
    console.log(chart)
    const ctx = document.getElementById('top-products-chart').getContext('2d');
    const newChart = new Chart(ctx, {
      type: 'pie',
      data: chart,
      options: options,
    
    });

    setChart(newChart);

    return () => {
      newChart.destroy();
    };
  }, []);

  const handleMonthChange = (event) => {
    setSelectedMonth(parseInt(event.target.value));
    console.log(event.target.value)
    let api=apiUrl+months[event.target.value]
    axios.get(api)
    .then((response) => {
      // Handle the data here
      console.log(response.data.pieChart)
     chart.destroy();
      const ctx = document.getElementById('top-products-chart').getContext('2d');
      const newChart = new Chart(ctx, {
        type: 'pie',
        data: response.data.pieChart,
        options: options,
       
  
      });
  
      // set the chart state
      setChart(newChart);
  
      // cleanup function to destroy the chart when the component unmounts
      return () => {
        newChart.destroy();
      };
  })
  .catch((error) => {
      // Handle errors here
      console.error("Axios error:", error);
    });
  };

  

  return (
    <div className="top-products-card card" style={{ height: '9rem', width: '20rem',}}>
      <div className="top-products-card-header" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h2 className='font-bold lg:text-sm sm:text-xs'>Top Products</h2>
        <div className='lg:text-sm sm:text-xs' style={{justifyContent: 'space-between'}}>
          <select className='text-xs font-thin text-slate-700' value={selectedMonth} onChange={handleMonthChange} style={{ marginRight: '0.5rem' }}>
            <option value={0}>January</option>
            <option value={1}>February</option>
            <option value={2}>March</option>
            <option value={3}>April</option>
            <option value={4}>May</option>
            <option value={5}>June</option>
            <option value={6}>July</option>
            <option value={7}>August</option>
            <option value={8}>September</option>
            <option value={9}>October</option>
            <option value={10}>November</option>
            <option value={11}>December</option>
          </select>
        
        </div>
      </div>
      <canvas className='flex-inline' id="top-products-chart" style={{ width: '100%', height: '90%' }} />
    </div>
  );
};

export default TopProductsCArd;
