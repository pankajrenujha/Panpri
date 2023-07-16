import './App.css';
import { useState} from 'react';
import { Routes, Route } from 'react-router-dom';
// Bootstrap Bundle JS
import Product from './Components/Product/product';
import { Student } from './Components/Student';
import Header from './Components/Shared/Header';
import Home from './Components/Home/Home';
import { CreateStudent } from './Components/CreateStudent';
import Register from './Components/Register';
import ThankYou from './Components/ThankYou';
import { MyContext } from './Components/MyContext';
import { store } from './store';
import { Provider } from 'react-redux';
import { Counter } from './Components/Counter/Counter';


function App() {
  const [ studentData, setStudentData] = useState({});
  return (
      <Provider store={store}>
    <div className="App">
      
        <Header />
        <Counter/>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='product' element={<Product />}></Route>
          <Route path='student' element={<Student />}></Route>
          <Route path='register' element={<Register />}></Route>
          <Route path='thankyou' element={<ThankYou />}></Route>
          <Route path='student/create' element={<CreateStudent />}></Route>
        </Routes>
    </div>
    </Provider>

  );

}

export default App;
