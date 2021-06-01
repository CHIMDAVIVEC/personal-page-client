import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
//import { ChatProvider } from './context/chat/chatContext';

import BaseRoute from "./routes";

function App() {
  return (
    <Router>
      <BaseRoute />
    </Router>
  );
}

export default App;
