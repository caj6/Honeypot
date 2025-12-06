import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Introduction from './Pages/Introduction';
import StateOfArt from './Pages/StateOfArt';
import SelectedHoneypots from './Pages/SelectedHoneypots';
import Analysis from './Pages/Analysis';
import Contribution from './Pages/Contribution';
import Conclusion from './Pages/Conclusion';
import References from './Pages/References';

export default function HoneypotProject() {
  return (
    <Router>
      <div className="hp-root">
        <div className="hp-wrap">
          <Header />
          <main>
            <div className="content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/introduction" element={<Introduction />} />
                <Route path="/state-of-art" element={<StateOfArt />} />
                <Route path="/selected-honeypots" element={<SelectedHoneypots />} />
                <Route path="/analysis" element={<Analysis />} />
                <Route path="/contribution" element={<Contribution />} />
                <Route path="/conclusion" element={<Conclusion />} />
                <Route path="/references" element={<References />} />
              </Routes>
            </div>
            <Sidebar />
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}