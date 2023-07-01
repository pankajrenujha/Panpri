import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Grid from './Controls/grid';
import { Person } from './person';

function App() {
  return (
    <div className="App">
      <Person></Person>
    </div>
  );
}

export default App;
