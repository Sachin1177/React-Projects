// youtube Link----https://youtu.be/gOa5GGw40pk?si=26JdS8JJfZQ2KdHY
// fake API LInk ---https://mockapi.io/projects/6582bd1602f747c8367a1254

// import './App.css';
import Create from './Components/Create';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Read from './Components/Read';
import Update from './Components/Update';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Create />} />
          <Route exact path="/read" element={<Read />} />
          <Route exact path="/update" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
