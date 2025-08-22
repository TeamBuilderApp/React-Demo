import './Assets/App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Faq from './components/Faq/Faq';
import Features from './components/Features/Features';
import About from './components/About/About';
import { Route, Routes } from 'react-router-dom';

//Functional components are generally more concise and easier to read and understand, especially for simpler components.
//Hooks (like useState, useEffect, useContext, etc.) provide a way to add state and lifecycle features to functional components, eliminating the need for class-based lifecycle methods and this binding issues.
//In some cases, functional components with Hooks can lead to slightly better performance due to reduced overhead compared to class components.
//Functional components are often easier to test as they are pure functions (or can be easily made so with Hooks).
//While class components are still supported and valid, functional components with Hooks are the recommended and dominant pattern in modern React development..
function App() {
  return (
    <div className="App">
      <Header />
      <div><i className="fa fa-spinner fa-spin">no spinner but why</i></div>
      <Routes>
      <Route exact={true} path="/" component={Home} />
      <Route path="/Faq" component={Faq} />
      <Route path="/Features" component={Features} />
      <Route path="/About" component={About} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
