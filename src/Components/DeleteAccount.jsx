export default function DeleteAccount({ deleteModalData, setDeleteModalData, setDeleteData }) {

    const destroy = _ => {
        setDeleteData(deleteModalData);
        setDeleteModalData(null);
    }

    if (null === deleteModalData) {
        return null;
    }

    if (deleteModalData.Balance !== 0) {
        return (
            <div className="modal">
                <div className="modal-dialog  modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Cannot Delete The Account</h5>
                            <button type="button" className="btn btn-close" onClick={_ => setDeleteModalData(null)}></button>
                        </div>
                        <div className="modal-body">
                            <p>The account cannot be deleted because there are funds in it.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="button" onClick={_ => setDeleteModalData(null)}>OK</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="modal">
            <div className="modal-dialog  modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Delete Account</h5>
                        <button type="button" className="btn btn-close" onClick={_ => setDeleteModalData(null)}></button>
                    </div>
                    <div className="modal-body">
                        <p>Are you sure you want to delete this account?</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="button-del" onClick={_ => setDeleteModalData(null)}>Cancel</button>
                        <button type="button" className="button" onClick={destroy}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
}