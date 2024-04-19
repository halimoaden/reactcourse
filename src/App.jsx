import User from './components/User';
import Patient from './components/Patient';
import District from './components/District';
import Login from './components/Login';
import Home from './components/Home';
import Village from './components/Village';
import Service from './components/Service';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';





function App() {

  return (
    <>
      <BrowserRouter>

      <Navigation />

        <div className="container mt-5">
        <Routes>
          <Route path="/login" element={<Login />}> </Route>
          <Route path="/users" element={<User />}> </Route>
          <Route path="/patients" element={<Patient />}> </Route>
          <Route path="/districts" element={<District />}> </Route>
          <Route path="/villages" element={<Village />}> </Route>
          <Route path="/services" element={<Service />}> </Route>
          <Route path="/" element={<Home />}> </Route>
        </Routes>
        </div>
      </BrowserRouter>
    </>
  )

}

export default App
