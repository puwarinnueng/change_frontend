import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/homepage/index"

function App() {
  return (
    <div className="App">
      <BrowserRouter
        basename="/project1"
      >
        <Routes>
          <Route path="/" element={<Dashboard />} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
