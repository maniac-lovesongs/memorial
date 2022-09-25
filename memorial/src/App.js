import logo from './logo.svg';
import { Route, Routes, useParams } from "react-router-dom";
import AppModel from "./models/App/AppModel.js";
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
      <h1>Dad's Memorial</h1>
      <Routes>
      </Routes>
    </div>
  );
}

export default App;
