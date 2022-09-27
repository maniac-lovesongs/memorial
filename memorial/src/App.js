import logo from './logo.svg';
import { Route, Routes, useParams } from "react-router-dom";
import Website from "./components/Website/Website.js";
import AppModel from "./models/App/AppModel.js";
import "./mediaQueries.scss";
import bg from "./imgs/bg.jpeg";
import './App.css';

const app_model = new AppModel(); 

/* Sample Route Code
-------------------------------------
      <Route path="/"
        element={<GameWrapper numCards={12}
          content={"color"}
          appModel={app_model} />} />
*/
function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/"
          element={<Website model={app_model} />}
          />
        </Routes>
    </div>
  );
}

export default App;
