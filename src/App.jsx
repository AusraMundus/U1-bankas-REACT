import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import './buttons.scss';
import { useEffect, useState } from 'react';
import { crudCreate, crudDelete, crudEdit, crudRead } from './Functions/localStorageCrud';
import ListOfAccounts from './Components/ListOfAccounts';
import AddNewAccount from './Components/AddNewAccount';


const KEY = 'myAccounts';

function App() {

  const [listUpdate, setListUpdate] = useState(Date.now());
  const [createData, setCreateData] = useState(null);
  const [accounts, setAccounts] = useState(null);

  //R read
  useEffect(_ => {
    setAccounts(crudRead(KEY));
  }, [listUpdate]);


  //C create
  useEffect(_ => {
    if (null === createData) {
      return;
    }
    crudCreate(KEY, createData);
    setListUpdate(Date.now());
  }, [createData]);


  return (
    <div className="App">
      <header className="App-header">
        <h1>Easy Way To Manage Bank Accounts</h1>
        <div className="container">
          <div className="row">
            <div className="col-8">
              <ListOfAccounts 
              accounts={accounts}/>
            </div>
            <div className="col-4">
              <AddNewAccount setCreateData={setCreateData} />
            </div>
          </div>
        </div>
      </header>

    </div >
  );
}

export default App;
