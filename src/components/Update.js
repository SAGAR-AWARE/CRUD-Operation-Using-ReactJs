import React,{ useEffect, useState} from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Update() {
    const { id }= useParams();
    const[values, setValues]=useState({
        name:'',
        company:'',
        salary:''
    })
    const navigate = useNavigate();
    useEffect(()=>{
         axios.get("http://localhost:8888/users" + id)
        .then(res=> {
            setValues(res.data)//values state update on fetch
        })
        .catch(err => console.log(err));
    }, [id])

    const handleUpdate =(event)=>{
        event.preventDefault();
        axios.put('http://localhost:8888/users/'+ id, values)
        .then(res=> {
            console.log(res);
            navigate('/');
        })
        .catch(err => console.log(err));
    }
    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
        <div className='w-50 border bg-white shadow px-5  pt-3 pb-5 rounded '>
    <h1>Update Employee</h1>
    <form onSubmit={handleUpdate}>
  <div className="mb-3">
    <label htmlFor="name" >name</label>
    <input type="text" name="name" className="form-control" placeholder='Enter Name'
     value = {values.name} onChange={e=>setValues({...values, name:e.target.value})}/>
  </div>
  <div className="mb-3">
    <label htmlFor="name" >company</label>
    <input type="text" name="company" className="form-control "placeholder='Enter company'
     value = {values.company} onChange={e=>setValues({...values, company:e.target.value})}/>
  </div>
  <div className="mb-3">
    <label htmlFor="name" >salary</label>
    <input type="text" name="company" className="form-control"placeholder='Enter Salary' 
    value = {values.salary} onChange={e=>setValues({...values, salary:e.target.value})}/>
  </div>
  
 
  <button className="btn btn-success me-2">Update</button>
  <Link to="/" className='btn btn-primary ms-3'>Back</Link>
</form>
</div>
</div>
    )
}

export default Update
