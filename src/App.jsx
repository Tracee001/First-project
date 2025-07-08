import React from 'react';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import { Routes, Route } from 'react-router-dom';
import Layout from './Component/Layout';
import Effects from './Pages/Effects';
import Api from './Pages/Api'; 
import UserView from './Pages/UserView';
// import UserList from './UserList'; // ✅ Add this line

function App() {
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path='users' element={<UserList />} /> ✅ New route */}
          <Route path='user/:id' element={<UserView />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='effects' element={<Effects />} />
          <Route path='api' element={<Api />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
