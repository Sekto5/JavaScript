import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import { Home } from './pages/home';
import { Login } from './pages/login';

function App() {
  return (
    <Routes>
    <Route path='/home'>
      <Home/>
    </Route>
      <Route path='/login'>
        <Login/>
      </Route>
    </Routes>
  );
}

export default App;
