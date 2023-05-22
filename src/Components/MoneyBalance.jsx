import { useRef } from "react";

export default function MoneyBalance({ setEditData, account, msg }) {

    const moneyFlow = useRef(0);

    const plus = event => {
        event.preventDefault();
        const money = parseFloat(moneyFlow.current.value);
        // Data validation
        if (money === undefined || money === null) { 
            setEditData({ ...account, Balance: account.Balance });
            msg('Please enter the amount.', 'info');

        } else if (isNaN(money) || money <= 0) { 
            setEditData({ ...account, Balance: account.Balance });
            msg('Please enter a valid positive amount.', 'info');

        } else if (!/^\d+(\.\d{1,2})?$/.test(money)) { 
            setEditData({ ...account, Balance: account.Balance });
            msg('Please enter a valid positive amount with up to two decimal places.', 'info');

        } else { 
            const newBalancePlus = account.Balance + money;
            setEditData({ ...account, Balance: newBalancePlus });
            msg('Money was added to the account.', 'info');
            moneyFlow.current.value = null;
        }
    };

    const minus = event => {
        event.preventDefault();
        const money = parseFloat(moneyFlow.current.value);
        // Data validation
        if (money === undefined || money === null) {
            setEditData({ ...account, Balance: account.Balance });
            msg('Please enter the amount.', 'info');
            
        } else if (isNaN(money) || money <= 0) {
            setEditData({ ...account, Balance: account.Balance });
            msg('Please enter a valid positive amount.', 'info');
            
        } else if (!/^\d+(\.\d{1,2})?$/.test(money)) {
            setEditData({ ...account, Balance: account.Balance });
            msg('Please enter a valid positive amount with up to two decimal places.', 'info');
            
        } else if (money > account.Balance) {
            setEditData({ ...account, Balance: account.Balance });
            msg('You cannot withdraw more than your balance.', 'info');
            
        } else {
            const newBalanceMinus = account.Balance - money;
            setEditData({ ...account, Balance: newBalanceMinus });
            msg('The money was withdrawn from the account.', 'info');
            moneyFlow.current.value = null;
        }
    };

    return (
        <form>
            <fieldset className="fieldset">
                <label htmlFor="moneyFlow" style={{ display: 'none' }}></label>
                <input ref={moneyFlow} type="text" id="moneyFlow" className="fieldset-input-money" placeholder="Enter the amount" />
                <div className="fieldset-buttons">
                    <button className="button" onClick={plus}>Add money</button>
                    <button className="button" onClick={minus}>Withdraw money</button>
                </div>
            </fieldset>
        </form>
    )
}
