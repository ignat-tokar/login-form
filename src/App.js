import './App.css';
import Start from './components/Start';
import Login from './components/Login';
import Welcome from './components/Welcome';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const login = 'user';
	const password = '12345';
  const [auth, setAuth] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Start auth={auth} />} />
        <Route path='/login' element={<Login login={login} password={password} setAuth={setAuth} />} />
        <Route path='/welcome' element={<Welcome login={login} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
