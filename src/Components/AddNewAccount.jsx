// Paspaudus mygtuką Pridėti naują sąskaitą - turi sugeneruoti modalą, kuriame galima įvesti vardą ir pavardę, ir yra mygtukas Pridėti.

import { useState, useRef, useEffect } from "react"

export default function AddNewAccount({ setCreateData }) {

    const [addNewModalDisplay, setAddNewModalDisplay] = useState('none');

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

        setAddNewModalDisplay('none');
        nameRef.current.value = '';
        surnameRef.current.value = '';
    };

    useEffect(() => {
        setAddNewModalDisplay('block');
    }, []);

    return (
        <>
            <div className="modal" style={{ display: addNewModalDisplay }}>
                <div className="modal-dialog  modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Pridėti naują sąskaitą</h5>
                            <button type="button" className="btn btn-close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <fieldset>
                                    <input type="text" id="name" ref={nameRef} placeholder="Vardas" required />
                                    <input type="text" id="surname" ref={surnameRef} placeholder="Pavardė" required />
                                </fieldset>
                            </form>
                            <button className="button" onClick={save}>Pridėti</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}