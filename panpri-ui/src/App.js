import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from 'react-router-dom';
// Bootstrap Bundle JS
import Product from './Components/Product/product';
import { Student } from './Components/Student';
import Header from './Components/Shared/Header';

import Home from './Components/Home/Home';
import { CreateStudent } from './Components/CreateStudent';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='product' element={<Product />}></Route>
        <Route path='student' element={<Student />}>
        </Route>
        <Route path='student/create' element={<CreateStudent />}></Route>
      </Routes>
    </div>

  );

}

export default App;
