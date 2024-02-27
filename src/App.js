import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePageComponent from './Components/HomePageComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProfilePageComponent from './Components/ProfilePageComponent';
import UserContext from './UserContext/UserContext';
import UserHooks from './Hooks/UserHooks';

function App() {
  return (

    //Provider Allows access to its value which in this case is Userhooks to all components, we call userhooks through our UserContext within our components.
    <UserContext.Provider value={UserHooks()}>
      <BrowserRouter>
        {/* Wrapping our application in browserRouter to enable Routing */}

        <Routes>
          {/* '/' deteramnds our hompage our are default rendered page  */}
          <Route path='/' element={<HomePageComponent />} />
          <Route path='/profile' element={<ProfilePageComponent />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>

  );
}

export default App;
