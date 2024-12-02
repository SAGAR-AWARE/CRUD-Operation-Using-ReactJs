import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Create() {
  const [values, setValues] = useState({
    name: "",
    company: "",
    salary: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    // Make the POST request to the backend API
    axios.post('http://localhost:8888/users', values)
      .then((res) => {
        console.log("Employee created successfully:", res.data); // Log the response data if needed
        navigate('/');
      })
      .catch((err) => {
        console.error("Error creating employee:", err);
      });
  };

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded '>
        <h1>Add Employee</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder='Enter Name'
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="name">Company</label>
            <input
              type="text"
              name="company"
              className="form-control "
              placeholder='Enter company'
              onChange={(e) => setValues({ ...values, company: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="name">Salary</label>
            <input
              type="text"
              name="salary"
              className="form-control"
              placeholder='Enter Salary'
              onChange={(e) => setValues({ ...values, salary: e.target.value })}
            />
          </div>

          <button className="btn btn-primary me-2">Submit</button>
          <Link to="/" className='btn btn-primary ms-3'>Back</Link>
        </form>
      </div>
    </div>
  );
}

export default Create;
