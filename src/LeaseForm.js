import React, { useState } from 'react';

function LeaseForm() {
  const [formData, setFormData] = useState({
    Cno: '',
    name: '',
    sign: '',
    pnumber: '',
    paddress: '',
    start: '',
    finish: '',
    duration: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <form className='container' onSubmit={handleSubmit}>
      <div className='header'>
        <h1>Lease Form</h1>
      </div>
      <div>
        <input
          type='text'
          placeholder='Enter Client Number'
          name='Cno'
          value={formData.Cno}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type='text'
          placeholder='Enter Full Name'
          name='name'
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type='text'
          placeholder='Client Signature'
          name='sign'
          value={formData.sign}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type='text'
          placeholder='Property Number'
          name='pnumber'
          value={formData.pnumber}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type='text'
          placeholder='Property Address'
          name='paddress'
          value={formData.paddress}
          onChange={handleChange}
        />
      </div>
      <div>
        <h3> Rent Start </h3>
        <input
          type='date'
          placeholder='Rent Start'
          name='start'
          value={formData.start}
          onChange={handleChange}
        />

        <h3> Rent Finish </h3>

        <input
          type='date'
          placeholder='Rent Finish'
          name='finish'
          value={formData.finish}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type='text'
          placeholder='duration'
          name='duration'
          value={formData.duration}
          onChange={handleChange}
        />
      </div>
      <div>
        <button type='submit'>Submit</button>
      </div>
    </form>
  );
}

export default LeaseForm;
