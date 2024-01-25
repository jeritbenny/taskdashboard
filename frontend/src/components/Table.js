import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Pagination from 'react-bootstrap/Pagination';
import Table from 'react-bootstrap/Table';
import profile from '../Assets/media.png'
import face from '../Assets/facebook.png'
import tiwtt from '../Assets/twitter.png'
import insta from '../Assets/instagram.png'

function Table1() {
    const[table,setTable]=useState([])

  useEffect(()=>{
    const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:3001/api/table');
          setTable(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
  },[])
  console.log(table);
  return (
    <div className='flex justify-between'>
  <div className='w-full mr-6 '>
  <Table striped bordered hover >
          <thead>
            <tr>
              <th>Id</th>
              <th> Name</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
    {table.map((item)=>(
         
          <tbody>
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
            </tr>
          </tbody>
       
    ))}
  </Table>
  <div className='mt-5 ml-52 text-center'>
  <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Ellipsis />

      <Pagination.Item>{10}</Pagination.Item>
      <Pagination.Item>{11}</Pagination.Item>
      <Pagination.Item active>{12}</Pagination.Item>
      <Pagination.Item>{13}</Pagination.Item>
      <Pagination.Item disabled>{14}</Pagination.Item>

      <Pagination.Ellipsis />
      <Pagination.Item>{20}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  </div>
  </div>
  <div>
    
  </div>
  <div>
    <img src={profile} alt=''/>
    <div className='text-center bg-white'>
      <p>Jhon Deo</p>
      <p>CEO</p>
      <div className='flex mx-auto justify-center'>
      <div className='p-3'><img src={face}/></div>
      <div className='p-3'><img src={insta}/></div>
      <div className='p-3'><img src={tiwtt}/></div>
      </div>
     
    </div>
  </div>
    </div>
  )
}

export default Table1