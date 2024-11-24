import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Navbar from './Navbar'
import Contact from './Contact';
import Meals from './Meals';
import Meal from './Meal';
import About from './About';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/meals' element={<Meals></Meals>}></Route>
          <Route path='/meal/:idMeal' element={<Meal></Meal>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='/about' element={<About></About>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}



export default App;
