import { BrowserRouter, Routes, Route} from 'react-router-dom'

import './bootstrap.min.css'
import { DemoPage } from './pages/DemoPage';
import { HomePage } from './pages/HomePage';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboar';


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route index path='*' element={<HomePage />} />
          <Route path='/demo' element={<DemoPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
          
          
    </BrowserRouter>
  );
}

export default App;
