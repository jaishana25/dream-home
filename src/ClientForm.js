import React, { useState } from 'react';

function ClientForm() {
  const [clientData, setClientData] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(clientData);
  };

  const handleChange = (event) => {
    setClientData({ ...clientData, [event.target.name]: event.target.value });
  };

  return (
    <form className='container' onSubmit={handleSubmit}>
      <div className='header'>
        <h1>Client Registration</h1>
      </div>
      <div>
        <input type='text3' placeholder='Client Number' name='Cno' onChange={handleChange} />
      </div>
      <div>
        <input type='text' placeholder='Enter Full Name' name='name' onChange={handleChange} />
      </div>
      <div>
        <input type='text2' placeholder='Enter Type' name='type' onChange={handleChange} />
        <input type='text3' placeholder='Rent' name='rent' onChange={handleChange} />
      </div>
      <div>
        <input type='text2' placeholder='Branch Number' name='brno' onChange={handleChange} />
      </div>
      <div>
        <input type='text' placeholder='Branch Address' name='address' onChange={handleChange} />
      </div>
      <div>
        <input type='text2' placeholder='Registered by' name='registeredby' onChange={handleChange} />
        <input type='date' placeholder='Date Registered' name='date registered' onChange={handleChange} />
      </div>
      <div>
        <button type='submit'>Submit</button>
      </div>
    </form>
  );
}

export default ClientForm;
