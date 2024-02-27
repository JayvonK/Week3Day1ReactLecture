import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePageComponent from './Components/HomePageComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProfilePageComponent from './Components/ProfilePageComponent';
import UserContext from './UserContext/UserContext';

function App() {
  return (
    <UserContext>
      <BrowserRouter>
        {/* Wrapping our application in browserRouter to enable Routing */}

        <Routes>
          {/* '/' deteramnds our hompage our are default rendered page  */}
          <Route path='/' element={<HomePageComponent />} />
          <Route path='/profile' element={<ProfilePageComponent />} />
        </Routes>
      </BrowserRouter>
    </UserContext>

  );
}

export default App;
