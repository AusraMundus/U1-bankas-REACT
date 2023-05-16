import 'bootstrap/dist/css/bootstrap.min.css';
import { v4 as uuidv4 } from 'uuid';
import './App.scss';
import './buttons.scss';
import ListOfAccounts from './Components/ListOfAccounts';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Easy Way To Manage Accounts</h1>
        <ListOfAccounts />
        <button className="button">Pridėti naują sąskaitą</button>
      </header>
    </div>
  );
}

export default App;
