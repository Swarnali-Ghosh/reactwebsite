
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import DoctorSection from './DoctorSection/DoctorSection';
import Home from './Home/Home';
import EachBlog from './EachBlog/EachBlog';

import ScrollToTop from './ScrollToTop/ScrollToTop'
function App() {


  return (
    <>
    <Router>
    <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home/>} exact></Route>
        <Route path="/doctorsection" element={<DoctorSection/>} exact></Route>
        <Route path="/readeachblog/:id" element={<EachBlog/>} exact></Route>
      </Routes>
     
      </Router>
    </>

  );
}

export default App;


