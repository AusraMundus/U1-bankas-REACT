import { useRef } from "react";

export default function MoneyBalance({ setEditData, c }) {

    const moneyFlow = useRef(null);

    const plus = _ => {
        const money = parseFloat(moneyFlow.current.value);
        const newBalancePlus = c.Balance + money;
        setEditData({ ...c, Balance: newBalancePlus });
        moneyFlow.current.value = null;
    };

    const minus = _ => {
        const money = parseFloat(moneyFlow.current.value);
        const newBalanceMinus = c.Balance - money;
        if (newBalanceMinus >= 0) {
            setEditData({ ...c, Balance: newBalanceMinus });
            moneyFlow.current.value = null;
        };
    };

    return (
        <form>
            <fieldset className="fieldset">
                <label htmlFor="moneyFlow" style={{ display: 'none' }}></label>
                <input ref={moneyFlow} type="text" id="moneyFlow" className="fieldset-input" />
                <div className="fieldset-buttons">
                    <button className="button" onClick={plus}>Add money</button>
                    <button className="button" onClick={minus}>Withdraw money</button>
                </div>
            </fieldset>
        </form>
    )
}
