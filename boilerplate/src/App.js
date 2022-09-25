import logo from './logo.svg';
import { Route, Routes, useParams } from "react-router-dom";
import AppModel from "./models/App/AppModel.js";
import './App.css';

const app_model = new AppModel(); 
function App() {
  return (
    <div className="App">
      <Routes>
      </Routes>
    </div>
  );
}

export default App;
