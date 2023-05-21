import { useState } from 'react';

export default function AddNewAccount({ setCreateData, msg }) {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');

  const save = (event) => {
    event.preventDefault();
    // Data validation
    if (/^[A-Za-z]+$/.test(name) && /^[A-Za-z]+$/.test(lastName)) { // Characters used must be letters 
      setCreateData({
        Name: name,
        LastName: lastName,
        Balance: 0,
      });
      setName(''); // Clean the window after submit
      setLastName(''); // Clean the window after submit

    } else {
      msg('Please fill in the fields. The characters used must be letters.');
    }
  };

  return (
    <div className="card">
      <h2 className="card-header">Add New Account</h2>
      <div className="m-3">
        <form>
          <fieldset className="fieldset-add-new">
            <label htmlFor="name" style={{ display: 'none' }}></label>
            <input className="fieldset-input" type="text" id="name" placeholder="Name" required value={name} onChange={e => setName(e.target.value)} />
            <label htmlFor="lastName" style={{ display: 'none' }}></label>
            <input value={lastName} onChange={e => setLastName(e.target.value)} className="fieldset-input" type="text" id="lastName" placeholder="Last Name" required />
          </fieldset>
        </form>
        <button className="button-add" onClick={save}>Add</button>
      </div>
    </div>
  )
}