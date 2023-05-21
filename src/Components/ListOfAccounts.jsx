import MoneyBalance from './MoneyBalance';

export default function ListOfAccounts({ accounts, setDeleteModalData, doSort, sort, setEditData, msg }) {

    const destroy = c => setDeleteModalData(c);

    return (
        <>
            <div className="card">
                <h2 className="card-header list-header">Accounts</h2>
                <div className="card-body">
                    <p className="sort">Sort by Last Name<span className={'sort-button ' + sort} onClick={doSort}></span></p>

                    <ul className="no-bullets list-group list-group-flush">
                        {
                            accounts
                                ? accounts.length
                                    ? accounts.map(c => (
                                        <li key={c.id}>
                                            <div className="accounts-list">
                                                <div className="account-name">
                                                    <p>{c.Name}</p>
                                                    <p>{c.LastName}</p>
                                                    <p>{c.Balance}<span> €</span></p>
                                                </div>
                                                <div>
                                                    <MoneyBalance
                                                        account={c}
                                                        setEditData={setEditData}
                                                        msg={msg} />
                                                </div>
                                                <button className="button-del" onClick={_ => destroy(c)}>Delete account</button>
                                            </div>
                                        </li>))
                                    : 'No accounts yet'
                                : '...loading'
                        }

                    </ul>
                </div>
            </div>
        </>
    )
}