// Paspaudus mygtuką Pridėti naują sąskaitą - turi sugeneruoti modalą.

import { useState } from "react"

export default function AddNewAccount() {


    return (
        <>
            <h2>Sąskaitų sąrašas</h2>

            <form>
                <fieldset>
                    <input type="text" placeholder="Vardas"/>
                    <input type="text" placeholder="Pavardė"/>
                </fieldset>
            </form>
        </>

    )

}