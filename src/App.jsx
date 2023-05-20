import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import './buttons.scss';
import { useEffect, useState } from 'react';
import { crudCreate, crudDelete, crudEdit, crudRead } from './Functions/localStorageCrud';
import ListOfAccounts from './Components/ListOfAccounts';
import AddNewAccount from './Components/AddNewAccount';
import DeleteAccount from './Components/DeleteAccount';
import Messages from './Components/Messages';
import { v4 as uuidv4 } from 'uuid';

const KEY = 'myAccounts';

function App() {

  const [listUpdate, setListUpdate] = useState(Date.now());
  const [createData, setCreateData] = useState(null);
  const [accounts, setAccounts] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  const [deleteModalData, setDeleteModalData] = useState(null);
  const [sort, setSort] = useState('default');
  const [editData, setEditData] = useState(null);
  const [messages, setMessages] = useState([]);

  //R read
  useEffect(_ => {
    setAccounts(crudRead(KEY).map((c, i) => ({ ...c, row: i, show: true })));
  }, [listUpdate]);


  //C create
  useEffect(_ => {
    if (null === createData) {
      return;
    }
    crudCreate(KEY, createData);
    setListUpdate(Date.now());
    msg('New account was added', 'info');
  }, [createData]);

  //U update
  useEffect(_ => {
    if (null === editData) {
      return;
    }
    crudEdit(KEY, editData, editData.id);
    setListUpdate(Date.now());
  }, [editData]);

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
      setAccounts(c => [...c].sort((a, b) => a.row - b.row)); // rusiavimas
    } else if (sort === 'asc') {
      setAccounts(c => [...c].sort((a, b) => a.LastName.localeCompare(b.LastName))); // Ascending, nuo A iki Z
    } else {
      setAccounts(c => [...c].sort((b, a) => a.LastName.localeCompare(b.LastName))); // Descending, nuo Z iki A
    }
  }, [sort]);

  const doSort = _ => {
    setSort(s => {
      switch (s) {
        case 'default': return 'asc';
        case 'asc': return 'dsc';
        default: return 'default'
      }
    });
  }

  const msg = (text, type) => {
    const id = uuidv4();
    const message = {
        id,
        text,
        type
    }
    setMessages(m => [...m, message]);
    setTimeout(_ => setMessages(m => m.filter(m => m.id !== id)), 5000);
}

  return (
    <div className="App">
      <header className="App-header">
        <h1>Easy Way To Manage Bank Accounts</h1>
        <div className="container">
          <div className="row">

            <div className="col-9">
              <ListOfAccounts
                accounts={accounts}
                sort={sort}
                doSort={doSort}
                setEditData={setEditData } 
                setDeleteModalData={setDeleteModalData}
              />
            </div>

            <div className="col-3">
              <AddNewAccount setCreateData={setCreateData} />
            </div>
          </div>
        </div>
        <DeleteAccount
          deleteModalData={deleteModalData}
          setDeleteModalData={setDeleteModalData}
          setDeleteData={setDeleteData}
        />
        <Messages messages={messages}/>
      </header>
    </div >
  );
}

export default App;