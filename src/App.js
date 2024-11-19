import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Motorcycles from './Motorcycles'
import Navbar from './Navbar'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/motorcycles' element={<Motorcycles></Motorcycles>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}



export default App;
