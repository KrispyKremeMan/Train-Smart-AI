import Header from './header.jsx';
import Home from './Home.jsx';
import Plans from './Plans.jsx';
import About from './About.jsx';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuestionForm from './QuestionForm.jsx';
import Plan_Details from './Plan_details.jsx';


function App(){
  
  return (

    <>
    <Router>
      <Header></Header>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/questionform' element={<QuestionForm />} />
            <Route path="/plans" element={<Plans />} /> 
            <Route path="/about" element={<About />} />
            <Route path="/plan_details/:id" element={<Plan_Details />} />
        </Routes>
    </Router>
    </>
  
  );
}
export default App
