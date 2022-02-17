import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'

import Medals from './routes/Medals'
import Teams from './routes/Teams'

import GlobalStyle from './globalStyles';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Header/>
      <Main>
        <Routes>
          <Route path="/:team" element={<Teams />}/>
          <Route path="/" element={<Medals />}/>
        </Routes>
      </Main>
      <Footer/>
    </Router>
  );
}

export default App;
