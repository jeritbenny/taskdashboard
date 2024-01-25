import React from 'react'
import rectangle from'../Assets/Rectangle 10.png';
import Chart1 from './Chart';
import GraphData from './GraphData';
import Table1 from './Table';

function Dashboard() {
  return (
<div className=''>
<div className='flex justify-between p-3 '>
<div>
    <h3> Good Morning!</h3>
</div>
<div className='mr-5'>
Jhon Doe <br/>Jhon@gmail.com
{/* <img src={rectangle} alt='profile'/> */}
</div>
    </div>
    <div className='flex  justify-between mt-5'>
      <div className='w-full bg-white mr-5 rounded h-49 shadow-lg mb-4'>
      <GraphData/>
      </div>
      <div className=' w-50 h-50 bg-white rounded h-50 '>
      <Chart1/>
      </div>
</div>
<div className='mt-5'>
<Table1/>
</div>
</div>
  )
}

export default Dashboard