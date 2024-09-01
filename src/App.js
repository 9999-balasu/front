
import React, { createContext, useState } from 'react';
import Nav from './Nav';
import Register from './Register';
import Login from './Login';
import{BrowserRouter,Route,Routes} from 'react-router-dom'

import Myprofile from './Myprofile';

export const store = createContext();

function App() {
  const [token,setToken] = useState(null);
  return (
    <div>
      <store.Provider value={[token,setToken]}>
<BrowserRouter>
<Nav/>
<Routes>
  <Route path='/register' Component={Register}/>
  <Route path='/login' Component={Login}/>
  <Route path='/myprofile' Component={Myprofile}/>
</Routes>
</BrowserRouter>
</store.Provider>

    </div>
  );
}

export default App;
