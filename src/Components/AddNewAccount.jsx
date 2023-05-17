import { useState, useRef, useEffect } from "react"

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
                <h5 className="card-header">Add New Account</h5>
                <div className="m-3">
                    <form>
                        <fieldset className="fieldset-add-new">
                            <input className="fieldset-input-add-new" type="text" id="name" ref={nameRef} placeholder="Name" required />
                            <input className="fieldset-input-add-new" type="text" id="surname" ref={surnameRef} placeholder="Surname" required />
                        </fieldset>
                    </form>
                    <button className="button-add" onClick={save}>Add</button>
                </div>
            </div>
        </>
    )
}