import React from 'react';

function Portfolio() {

    return (
<section class="work" id="work">
        <div class="row">
          <div class="work__boxes">
  
            <div class="work__box">
              <div class="work__text">
                <h3>SimpliFam</h3>
                <p>
                  Group project. Simplify your family by using a shared calendar, grocery list, and chat feature.
                </p>
                <ul class="work__list">
                  <li>HTML/CSS/JavaScript</li>
                  <li>React</li>
                  <li>Mongoose/MongoDB</li>
                  <li>Node</li>
                  <li>Express</li>
                  <li>GraphQL</li>
                </ul>
  
                <div class="work__links">
                  <a href="https://simplifam.herokuapp.com/" target="_blank" class="link__text">
                    Visit Site <span>&rarr;</span>
                  </a>
                  <a href="https://github.com/sgenesi/simpli-fam" title="View Source Code" target="_blank">
                    <img src={require('../../assets/images/github.svg').default} class="work__code" alt="GitHub" />
                  </a>
                </div>
              </div>
              <div class="work__image-box">
                <img src={require("../../assets/images/project-6.png").default} class="work__image" alt="Project 6" />
              </div>
            </div>
  
            <div class="work__box">
              <div class="work__text">
                <h3>Landmark Tracker</h3>
                <p>
                  Group project. View landmarks added by others and add landmarks yourself.
                </p>
                <ul class="work__list">
                  <li>HTML/CSS/JavaScript</li>
                  <li>Google Maps API</li>
                  <li>Tailwind</li>
                  <li>MySQL</li>
                  <li>Sequelize</li>
                  <li>Express</li>
                </ul>
  
                <div class="work__links">
                  <a href="https://infinite-basin-15382.herokuapp.com/" target="_blank" class="link__text">
                    Visit Site <span>&rarr;</span>
                  </a>
                  <a href="https://github.com/gavin-asay/landmark-tracker" title="View Source Code" target="_blank">
                    <img src={require('../../assets/images/github.svg').default} class="work__code" alt="GitHub" />
                  </a>
                </div>
              </div>
              <div class="work__image-box">
                <img src={require("../../assets/images/project-5.png").default} class="work__image" alt="Project 5" />
              </div>
            </div>
  
            <div class="work__box">
              <div class="work__text">
                <h3>Run Buddy</h3>
                <p>
                  Website Mockup
                </p>
                <ul class="work__list">
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>
  
                <div class="work__links">
                  <a href="https://lexiehansen.github.io/run-buddy/" target="_blank" class="link__text">
                    Visit Site <span>&rarr;</span>
                  </a>
                  <a href="https://github.com/lexiehansen/run-buddy" title="View Source Code" target="_blank">
                    <img src={require('../../assets/images/github.svg').default} class="work__code" alt="GitHub" />
                  </a>
                </div>
              </div>
              <div class="work__image-box">
                <img src={require("../../assets/images/project-1.png").default} class="work__image" alt="Project 1" />
              </div>
            </div>
  
            <div class="work__box">
              <div class="work__text">
                <h3>Taskmaster Pro</h3>
                <p>
                  Keep track of your to-do's.
                </p>
                <ul class="work__list">
                  <li>HTML/CSS</li>
                  <li>JavaScript</li>
                  <li>jQuery</li>
                  <li>Bootstrap</li>
                </ul>
  
                <div class="work__links">
                  <a href="https://lexiehansen.github.io/taskmaster-pro/" target="_blank" class="link__text">
                    Visit Site <span>&rarr;</span>
                  </a>
                  <a href="https://github.com/lexiehansen/taskmaster-pro" title="View Source Code" target="_blank">
                    <img src={require('../../assets/images/github.svg').default} class="work__code" alt="GitHub" />
                  </a>
                </div>
              </div>
              <div class="work__image-box">
                <img src={require("../../assets/images/project-2.png").default} class="work__image" alt="Project 2" />
              </div>
            </div>
  
            <div class="work__box">
              <div class="work__text">
                <h3>CRAVINGS</h3>
                <p>
                  Group project. Helping hangry people everywhere!
                </p>
                <ul class="work__list">
                  <li>HTML/CSS</li>
                  <li>JavaScript</li>
                  <li>jQuery</li>
                  <li>Materialize CSS</li>
                  <li>Zomato and Tasty API</li>
                </ul>
  
                <div class="work__links">
                  <a href="https://daniwhitlock.github.io/Cravings/" target="_blank" class="link__text">
                    Visit Site <span>&rarr;</span>
                  </a>
                  <a href="https://github.com/daniwhitlock/Cravings" title="View Source Code" target="_blank">
                    <img src={require('../../assets/images/github.svg').default} class="work__code" alt="GitHub" />
                  </a>
                </div>
              </div>
              <div class="work__image-box">
                <img src={require("../../assets/images/project-3.png").default} class="work__image" alt="Project 3" />
              </div>
            </div>
  
            <div class="work__box">
              <div class="work__text">
                <h3>README Generator</h3>
                <p>
                  A quick way to generate a professional README.
                </p>
                <ul class="work__list">
                  <li>JavaScript</li>
                  <li>Node</li>
                </ul>
  
                <div class="work__links">
                  <p>This generator functions from the command line. View GitHub Repository for usage instructions and a walkthrough video.</p>
                  <a href="https://github.com/lexiehansen/readme-generator" title="View Source Code" target="_blank">
                    <img src={require('../../assets/images/github.svg').default} class="work__code" alt="GitHub" />
                  </a>
                </div>
              </div>
              <div class="work__image-box">
                <img src={require("../../assets/images/project-4.png").default} class="work__image" alt="Project 4" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Portfolio;