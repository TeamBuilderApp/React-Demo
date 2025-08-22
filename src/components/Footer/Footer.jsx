import React from 'react'
import '../../Assets/Footer.css';

//This is the main App Footer.
//Stateless components do not need access to any state or functionality. 
//Stateless components do not call render() {.
const Footer = () => {
  return (
    <div className="App">
        <footer class="footer is-primary">
      <div class="container">
        <div class="columns">
          <div class="column">
            <p>
              My React App UIUX portfolio demo by software engineer, Christopher
              Peterson.
              <br /><b>Email:</b> cpeterson.software.engineering@gmail.com
              <br /><b>Phone:</b> (517) 297-5674 
              <br /><a href="https://mern-demo-49es.onrender.com/">Here's my MERN Demo!</a><br />
              <a href="https://vue-demo-t89m.onrender.com/#/">Here's my Vue Demo!</a><br /><a
                class="icon"
                href="https://github.com/TeamBuilderApp?tab=repositories"
                ><i class="fab fa-github"></i
              ></a>
              <a
                class="icon"
                href="https://www.linkedin.com/in/christopher-peterson-86728a303"
                ><i class="fab fa-linkedin-in"></i
              ></a>
            </p>
          </div>
          <div class="column has-text-right"></div>
        </div>
      </div>
    </footer>
    </div>
  );
}

export default Footer;