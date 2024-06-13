import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChatDashboard from "./Pages/ChatDashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ChatDashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
