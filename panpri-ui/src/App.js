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
import Register from './Components/Register';
import ThankYou from './Components/ThankYou';
import { MyContext } from './Components/MyContext';


function App() {
  let data = {
    theme: "light",
    name: "Pankaj",
    userId: "aox01",
    email: "aman1@gmail.com",
    contactNumber: "+91 9898987231",
    noOfQuestionsSolved: 120,
    codingStreak: 30,
  };
  return (
    <div className="App">
      <MyContext.Provider value={data}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='product' element={<Product />}></Route>
          <Route path='student' element={<Student />}></Route>
          <Route path='register' element={<Register />}></Route>
          <Route path='thankyou' element={<ThankYou />}></Route>
          <Route path='student/create' element={<CreateStudent />}></Route>
        </Routes>
      </MyContext.Provider>
    </div>
  );

}

export default App;
