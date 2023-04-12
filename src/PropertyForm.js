import React, { useState } from 'react'

function PropertyForm() {
  const [formData, setFormData] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  const handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <form className='container' onSubmit={handleSubmit}>
      <div className='header'>
        <h1>
          Property Registration
        </h1>
      </div>
      <div>
        <input type='text' placeholder='Enter Property Number' name='property' onChange={handleInputChange} />
      </div>
      <div>
        <input type='text' placeholder='Type' name='type' onChange={handleInputChange} />
        <input type='text' placeholder='Rooms' name='rooms' onChange={handleInputChange} />
        <input type='text' placeholder='Rent' name='rent' onChange={handleInputChange} />
      </div>
      <div>
        <input type='text' placeholder='Enter Property Address' name='address' onChange={handleInputChange} />
      </div>
      <div>
        <input type='text' placeholder='Managed by ' name='staff' onChange={handleInputChange} />
      </div>
      <div>
        <input type='text' placeholder='Owner Number' name='Ono' onChange={handleInputChange} />
        <input type='text' placeholder='Business Name' name='bname' onChange={handleInputChange} />
      </div>
      <div>
        <input type='text' placeholder='Address' name='ownerAddress' onChange={handleInputChange} />
      </div>
      <div>
        <input type='text' placeholder='Telephone Number' name='number' onChange={handleInputChange} />
      </div>
      <div>
        <input type='text' placeholder='Type of business' name='business' onChange={handleInputChange} />
        <input type='text' placeholder='Contact Name' name='cname' onChange={handleInputChange} />
      </div>
      <div>
        <input type='text' placeholder='Registered at branch' name='branch' onChange={handleInputChange} />
      </div>
      <div>
        <button type='submit'>Submit </button>
      </div>
    </form>
  )
}

export default PropertyForm;
