import logo from './logo.svg';
import './App.css';
import List from './Components/List';

function App() {
  return (
    <div className="App">
      <h4>Your Address Book!</h4>
      <List url="https://randomuser.me/api?results=25"/>
    </div>
  );
}

export default App;
