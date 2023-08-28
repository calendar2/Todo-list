import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Header from './contents/Header';
import Home from './contents/Home';
import Nav from './contents/Nav';
import Patrick from './contents/Patrick';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Nav/>

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/patrick' element={<Patrick/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
