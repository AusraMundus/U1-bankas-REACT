import { useState } from "react"

export default function ListOfAccounts() {


    return (
        <>
            <ul className="no-bullets">
                <li>
                    <div>
                        <div className="accountsList">
                            <p>Vardas</p>
                            <p>Pavardė</p>
                            <p>Balansas<span>€</span></p>
                            <form>
                                <fieldset className="fieldset">
                                    <input type="number" className="fieldset-input" />
                                    <div className="fieldset-buttons">
                                        <button className="button">Pridėti lėšų</button>
                                        <button className="button">Nuskaičiuoti lėšas</button>
                                    </div>
                                </fieldset>
                            </form>
                            <button className="button-del">Ištrinti sąskaitą</button>
                        </div>
                    </div>
                </li>
            </ul>
        </>
    )
}