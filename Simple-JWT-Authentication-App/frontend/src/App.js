import './App.css';
import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Navigation } from './components/navbar'


function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
 