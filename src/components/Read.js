import React,{ useEffect, useState} from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';


function Read() {
    const[data, setData] = useState([])//hold retrive data
    const { id }= useParams();
    useEffect(()=>{
        axios.get("http://localhost:8888/users/" + id)
        .then(res=> setData(res.data))
        .catch(err => console.log(err));
    }, [id])
    return (
     <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
        <div className='w-50 border bg-white shadow px-5  pt-3 pb-5 rounded'>
           <h3>Detail of employee</h3>

              <div className='mb-2'>
                   <strong>Name: {data.name}</strong>
              </div>
              <div className='mb-2'>
                  <strong>Company: {data.company}</strong>
              </div>
              <div className='mb-2'>
                  <strong>Salary: {data.salary}</strong>
              </div>

           <Link to={`/update/${id}`} className='btn btn-success'>Edit</Link>
           <Link to="/" className='btn btn-info ms-2'>Back</Link>
        </div>
     </div>
    )
}

export default Read
