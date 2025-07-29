
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Summary from './pages/Summary';
import Create from './pages/Create';
import Edit from './pages/Edit';
import Detail from './pages/Detail';
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Summary />} />
            <Route path="/create" element={<Create />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
