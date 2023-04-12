import React, { useState } from 'react'

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    staffno: '',
    position: '',
    sex: '',
    dob: '',
    salary: '',
    brno: '',
    number: '',
    address: '',
    supervisor: '',
    managerStartDate: '',
    bonus: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  }

  return (
    <form className='container' onSubmit={handleSubmit}>
      <div className='header'>
        <h1>Staff Registration</h1>
      </div>
      <div>
        <input type='text' placeholder='Enter Full Name' name='name' value={formData.name} onChange={handleInputChange} />
      </div>
      <div>
        <input type='text3' placeholder='Enter Staff Number' name='staffno' value={formData.staffno} onChange={handleInputChange} />
        <input type='text2' placeholder='Enter Position' name='position' value={formData.position} onChange={handleInputChange} />
      </div>
      <div>
        <input type='text3' placeholder='Sex' name='sex' value={formData.sex} onChange={handleInputChange} />
        <input type='date' placeholder='Date of birth' name='dob' value={formData.dob} onChange={handleInputChange} />
      </div>
      <div>
        <input type='text2' placeholder=' Salary' name='salary' value={formData.salary} onChange={handleInputChange} />
      </div>
      <div>
        <input type='text3' placeholder='Branch Number' name='brno' value={formData.brno} onChange={handleInputChange} />
        <input type='text2' placeholder='Telephone Number' name='number' value={formData.number} onChange={handleInputChange} />
        <input type='text' placeholder='Branch Address' name='address' value={formData.address} onChange={handleInputChange} />
      </div>
      <div>
        <input type='text2' placeholder='Supervisor Name' name='supervisor' value={formData.supervisor} onChange={handleInputChange} />
        <input type='text2' placeholder='Manager Start Date' name='managerStartDate' value={formData.managerStartDate} onChange={handleInputChange} />
      </div>
      <div>
        <input type='text2' placeholder='Manager Bonus' name='bonus' value={formData.bonus} onChange={handleInputChange} />
      </div>
      <div>
        <button type='submit'>Submit</button>
      </div>
    </form>
  )
}

export default Form;
