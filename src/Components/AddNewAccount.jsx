import { useState } from 'react';

export default function AddNewAccount({ setCreateData }) {

    const[name,setName] = useState('');
    const[lastName, setLastName] = useState('');

    const save = (event) => {
        event.preventDefault();
    
        if (/^[A-Za-z]+$/.test(name) && /^[A-Za-z]+$/.test(lastName)) {
          setCreateData({
            Name: name,
            LastName: lastName,
            Balance: 0,
          });
    
          setName('');
          setLastName('');
        } else {
          alert('Please fill in both the name and last name fields');
        }
      };

    return (
        <>
            <div className="card m-5">
                <h2 className="card-header">Add New Account</h2>
                <div className="m-3">
                    <form>
                        <fieldset className="fieldset-add-new">
                            <label htmlFor="name" style={{display:'none'}}></label>
                            <input className="fieldset-input" type="text" id="name" placeholder="Name" required value={name} onChange={e => setName(e.target.value)} />
                            <label htmlFor="lastName" style={{display:'none'}}></label>
                            <input value={lastName} onChange={e => setLastName(e.target.value)} className="fieldset-input" type="text" id="lastName" placeholder="Last Name" required />
                        </fieldset>
                    </form>
                    <button className="button-add" onClick={save}>Add</button>
                </div>
            </div>
        </>
    )
}