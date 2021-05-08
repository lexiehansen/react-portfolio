import React from 'react';
import './about.css';

function About() {

    return (
        <section class="about" id="about">
        <div class="row">
          <div class="about__content">
            <div class="about__text">
                <h2 class="text">Hey, I'm Lexie!</h2>
              <p class="text">
                Aside from being a student in the University of Utah Full-Stack Bootcamp, I am also a wife and a stay-at-home mom to two amazing children. I enjoy good food, concerts, and just spending time with the people I love.
              </p>
              <p class="text">
                You can read more about my work history and education by visiting my LinkedIn profile. 
              </p>
              <a href="https://www.linkedin.com/in/lexiebhansen/" class="btn" target="_blank">LinkedIn</a>
            </div>
  
            <div class="about__photo-container">
              <img class="about__photo" src={require("../../assets/images/lexie.png").default} alt="lexie and her husband" />
            </div>
          </div>
        </div>
      </section>
    );
}

export default About;