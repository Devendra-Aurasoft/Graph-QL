import './App.css';
import SignUp from './componant/SignUp';
import '../src/assets/CSS/comman.css'
import Login from './componant/Login';
import Profile from './componant/Profile';
import Header from './componant/Header';
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";
import Home from './componant/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CreateQuote from './componant/CreateQuote';
function App() {
  return (
    <>
      <Router >
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route exact path="/signup" element={<SignUp />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/profile" element={<Profile />}></Route>
          <Route exact path="/quote" element={<CreateQuote />}></Route>
          {/* <Route exact path="/" element={}></Route> */}
        </Routes>
        <ToastContainer />
      </Router>
    </>


  );
}

export default App;
