import { useState } from "react"

export default function ListOfAccounts() {


    return (
        <>
            <div className="card m-5">
                <h5 className="card-header list-header">Accounts</h5>
                <div className="card-body">
                    <ul className="no-bullets list-group list-group-flush">
                        <li>
                            <div className="accounts-list">
                                <div className="account-name">
                                    <p>Name</p>
                                    <p>Surname</p>
                                    <p>Balance, €</p>
                                </div>
                                <form>
                                    <fieldset className="fieldset">
                                        <input type="number" className="fieldset-input" />
                                        <div className="fieldset-buttons">
                                            <button className="button">Add money</button>
                                            <button className="button">Withdraw money</button>
                                        </div>
                                    </fieldset>
                                </form>
                                <button className="button-del">Delete account</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}