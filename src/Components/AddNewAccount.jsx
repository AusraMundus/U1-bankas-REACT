import { useRef } from 'react';

export default function AddNewAccount({ setCreateData }) {

    const nameRef = useRef(null);
    const surnameRef = useRef(null);

    const save = _ => {

        const name = nameRef.current.value;
        const surname = surnameRef.current.value;

        setCreateData({
            Name: name,
            Surname: surname,
            Balance: 0
        });
    };

    return (
        <>
            <div className="card m-5">
                <h2 className="card-header">Add New Account</h2>
                <div className="m-3">
                    <form>
                        <fieldset className="fieldset-add-new">
                            <label htmlFor="name" style={{display:'none'}}></label>
                            <input className="fieldset-input" type="text" id="name" ref={nameRef} placeholder="Name" required />
                            <label htmlFor="surname" style={{display:'none'}}></label>
                            <input className="fieldset-input" type="text" id="surname" ref={surnameRef} placeholder="Surname" required />
                        </fieldset>
                    </form>
                    <button className="button-add" onClick={save}>Add</button>
                </div>
            </div>
        </>
    )
}