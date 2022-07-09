import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Toolbar from './components/Toolbar';
import UserLogin from './pages/UserLogin';
import UserRegistration from './pages/UserRegistration';
import UserProfile from './pages/UserProfile';
import Reservations from './pages/Reservations';



function App() {




  return (
    <div className="App">
      <BrowserRouter>
        <Toolbar/>
        <Routes>
          <Route path='/' element={<UserLogin/>}/>
          <Route path='/register' element={<UserRegistration/>}/>
          <Route path='/profile/:email' element={<UserProfile/>}/>
          <Route path='/reservations' element={<Reservations/>}/>
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
