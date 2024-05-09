import { BrowserRouter, Routes, Route } from "react-router-dom";
import './css/main.css';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <html>
      <body className="main">
        <BrowserRouter>
          <div className='main-container'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </body>
    </html >
  );
}

export default App;
