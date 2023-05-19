import { useRef } from "react";

export default function MoneyBalance({ setEditData, account }) {

    const moneyFlow = useRef(0);

    const plus = _ => {
        const money = parseFloat(moneyFlow.current.value);
        if (isNaN(money) || money < 0) {
            setEditData({ ...account, Balance: account.Balance });
        } else {
            const newBalancePlus = account.Balance + money;
            setEditData({ ...account, Balance: newBalancePlus });
            moneyFlow.current.value = 0;
        }
    };

    const minus = _ => {
        const money = parseFloat(moneyFlow.current.value);
        if (isNaN(money) || money < 0) {
            setEditData({ ...account, Balance: account.Balance });
        } else {
            const newBalanceMinus = account.Balance - money;
            if (newBalanceMinus >= 0) {
                setEditData({ ...account, Balance: newBalanceMinus });
                moneyFlow.current.value = 0;
            };
        }
    };

    return (
        <form>
            <fieldset className="fieldset">
                <label htmlFor="moneyFlow" style={{ display: 'none' }}></label>
                <input ref={moneyFlow} type="number" id="moneyFlow" className="fieldset-input" placeholder="Enter the amount"/>
                <div className="fieldset-buttons">
                    <button className="button" onClick={plus}>Add money</button>
                    <button className="button" onClick={minus}>Withdraw money</button>
                </div>
            </fieldset>
        </form>
    )
}
