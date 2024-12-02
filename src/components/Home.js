import React,{ useEffect, useState} from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';


function Home() {
    const[data,setData] = useState([])
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get('http://localhost:8888/users')
        .then(res=> setData(res.data))
        .catch(err => console.log(err));
    },[])

    const handleDelete = (id) => {
        const confirm = window.confirm("Are you sure you want to delete this employee?");
        if(confirm){
        axios.delete(`http://localhost:8888/users/${id}`)
        .then(res=>{
            if(res){
                const newData = data.filter(d => d.id !== id);
                setData(newData);
            }         
            navigate('/');
        }).catch(err => console.log(err));
      }
     }

    return (
        <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100 '>
            <h1>List of employee</h1>
            <div className='w-75 rounded bg-white border shadow p-4'>
                <div className='d-flex justify-content-end'>
                    <Link to="/create" className="btn btn-primary">add</Link>
                </div>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Company</th>
                            <th>Salary</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((d,i) => (
                                <tr key={i}>
                                    <td>{d.id}</td>
                                    <td>{d.name}</td>
                                    <td>{d.company}</td>
                                    <td>{d.salary}</td>
                                    <td>
                                    <Link to={`/read/${d.id}`}  className="btn btn-info me-2">Read</Link>
                                    <Link to={`/update/${d.id}`} className="btn btn-primary me-2 ">Edit</Link>
                                    <button onClick={ e => handleDelete(d.id)} className="btn btn-danger me-2">Delete</button>                                        
                                    </td>
                                </tr>
                           )) 
                        }
                       
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default Home















