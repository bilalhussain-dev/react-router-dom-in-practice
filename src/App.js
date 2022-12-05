import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Navigation from './layout/Navigation';
import Error from './pages/Error';

function App() {
  return (
    <BrowserRouter> 
      <Navigation />
       <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/services' element={<Services/>}></Route>
          <Route path='*' element={<Error/>}></Route>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
