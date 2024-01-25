import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Support from './components/Support';
import Help from './components/Help';
import Plugin from './components/Plugin';
import Sidebar from './components/Sidebar';
function App() {
  return (
    <div>
      <Router>
      <div className="flex h-screen sticky">
        <Sidebar />
        <div className="flex-1 p-4 bg-blue-100 overflow-y-auto">
          <Routes>
            <Route path="/"  element={<Dashboard/>} />
            <Route path="/support" element={<Support/>} />
            <Route path="/plugin" element={<Plugin/>} />
            <Route path="/help" element={<Help/>} />
          </Routes>
        </div>
      </div>
    </Router>
    </div>
  );
}

export default App;
