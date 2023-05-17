import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import './buttons.scss';
import { useEffect, useState } from 'react';
import { crudCreate, crudDelete, crudEdit, crudRead } from './Functions/localStorageCrud';
import ListOfAccounts from './Components/ListOfAccounts';
import AddNewAccount from './Components/AddNewAccount';
import DeleteAccount from './Components/DeleteAccount';


const KEY = 'myAccounts';

function App() {

  const [listUpdate, setListUpdate] = useState(Date.now());
  const [createData, setCreateData] = useState(null);
  const [accounts, setAccounts] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  const [deleteModalData, setDeleteModalData] = useState(null);
  const [sort, setSort] = useState('default');

  //R read
  useEffect(_ => {
    setAccounts(crudRead(KEY).map((c, i) => ({...c, row: i, show: true})));
  }, [listUpdate]);


  //C create
  useEffect(_ => {
    if (null === createData) {
      return;
    }
    crudCreate(KEY, createData);
    setListUpdate(Date.now());
  }, [createData]);

  //D deleate
  useEffect(_ => {
    if (null === deleteData) {
      return;
    }
    crudDelete(KEY, deleteData.id);
    setListUpdate(Date.now());
  }, [deleteData]);

  useEffect(() => {
    if (sort === 'default') {
      setAccounts(c => [...c].sort((a, b) => a.row - b.row));
    } else if (sort === 'up') {
      setAccounts(c => [...c].sort((a, b) => a.Surname.localeCompare(b.Surname)));
    } else {
      setAccounts(c => [...c].sort((b, a) => a.Surname.localeCompare(b.Surname)));
    }

  }, [sort]);

  const doSort = _ => {
    setSort(s => {
        switch (s) {
            case 'default': return 'up';
            case 'up': return 'down';
            default: return 'default'
        }
    });
}

  return (
    <div className="App">
      <header className="App-header">
        <h1>Easy Way To Manage Bank Accounts</h1>
        <div className="container">
          <div className="row">

            <div className="col-8">
              <ListOfAccounts
                accounts={accounts}
                setDeleteModalData={setDeleteModalData}
                sort={sort}
                doSort={doSort}
              />
            </div>

            <div className="col-4">
              <AddNewAccount setCreateData={setCreateData} />
            </div>
          </div>
        </div>
        <DeleteAccount
          deleteModalData={deleteModalData}
          setDeleteModalData={setDeleteModalData}
          setDeleteData={setDeleteData}
        />
      </header>

    </div >

  );
}

export default App;
