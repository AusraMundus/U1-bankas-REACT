import { useRef } from "react";

export default function MoneyBalance({ setEditData, account }) {

    const moneyFlow = useRef(0);

    const plus = _ => {
        const money = parseFloat(moneyFlow.current.value);
        if (isNaN(money) || money <= 0) {
            setEditData({ ...account, Balance: account.Balance });
            alert('Please enter a valid positive amount.');

        } else {
            const newBalancePlus = account.Balance + money;
            setEditData({ ...account, Balance: newBalancePlus });
            moneyFlow.current.value = null;
            // alert('Money was added to the account.');
        }
    };

    const minus = _ => {
        const money = parseFloat(moneyFlow.current.value);
        if (money === undefined || money === null) {
            alert('Please enter the amount.');
        } else if (isNaN(money) || money <= 0) {
            setEditData({ ...account, Balance: account.Balance });
            alert('Please enter a valid positive amount.');
        } else if (money > account.Balance) {
            setEditData({ ...account, Balance: account.Balance });
            alert('You cannot withdraw more than your balance.');
        } else {
            const newBalanceMinus = account.Balance - money;
            setEditData({ ...account, Balance: newBalanceMinus });
            moneyFlow.current.value = null;
            // alert('The money was withdrawn from the account.');
        }
    };

    return (
        <form>
            <fieldset className="fieldset">
                <label htmlFor="moneyFlow" style={{ display: 'none' }}></label>
                <input ref={moneyFlow} type="number" id="moneyFlow" className="fieldset-input" placeholder="Enter the amount" />
                <div className="fieldset-buttons">
                    <button className="button" onClick={plus}>Add money</button>
                    <button className="button" onClick={minus}>Withdraw money</button>
                </div>
            </fieldset>
        </form>
    )
}
