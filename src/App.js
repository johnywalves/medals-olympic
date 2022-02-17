import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import Medals from './routes/Medals'
import Teams from './routes/Teams'

function App() {
  return (
    <Router>
        <div>
          <Routes>
            <Route path="/:team" element={<Teams />}/>
            <Route path="/" element={<Medals />}/>
          </Routes>
        </div>
    </Router>
  );
}

export default App;
