import './App.css';
import Header from './Header';
import netflixImg from './img/netflix-clone.JPG';
import jobOption from './img/job-option.JPG';
import starCoffee from './img/starcoffee.JPG';
import tictactoe from './img/tic-tac-toe.JPG';

const projects = [
  {id: 1, 
    title: "Netflix clone", 
    description: "Website looking like netflix that allows to view the preview from the youtube.",
    websiteUrl: "https://netflix-clone-bba0e.web.app/",
    gitRepo: "https://github.com/jhnnicob/netflix-clone",
    imgSrc: netflixImg,
  },
  {id: 2, 
    title: "Job Options", 
    description: "Job Options is a Saas web app that you can easily search jobs.",
    websiteUrl: "https://inspiring-babbage-2528ed.netlify.app/",
    gitRepo: "https://github.com/jhnnicob/job-options",
    imgSrc: jobOption,
  },
  {id: 3, 
    title: "Star Coffee", 
    description: "Star coffe is a Starbacks clone. The only difference is the logo and color schemes.",
    websiteUrl: "https://serene-saha-71936e.netlify.app/",
    gitRepo: "https://github.com/jhnnicob/star-coffee",
    imgSrc: starCoffee,
  },
  ,
  {id: 4, 
    title: "Tic-tac-toe Game", 
    description: "Star coffe is a Starbacks clone. The only difference is the logo and color schemes.",
    websiteUrl: "https://jolly-sinoussi-cfd58a.netlify.app/",
    gitRepo: "https://github.com/jhnnicob/tic-tac-toe",
    imgSrc: tictactoe,
  },
  {id: 4, 
    title: "Spotify Clone", 
    description: "This spotify clone allows you to load your own spotify account(if you have one).",
    websiteUrl: "",
    gitRepo: "",
    imgSrc: "",
  }
]

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <h1>Projects</h1>
        <div className="project">
          { projects.map((project, index) => (
             <div 
                key={index} 
                className="row">
                <div className="col">
                  <h2>{project.title}</h2>
                  <Tab />
                  <p>{project.description}</p>
                  <div className="buttons">
                    <a href={project.websiteUrl} target="_blank">View Website</a>
                    <a href={project.gitRepo} target="_blank">Visit Repo</a>
                  </div>
                </div>
    
                <div className="col">
                  <img src={project.imgSrc} />
                </div>
              </div>
          ))}
        </div>
      </div>
      <footer>
        <span>Nico Molon © — 2021</span>
      </footer>
    </div>
  );
}

{/* <div className="card">
  <h2>Job Option</h2>
</div>
<div className="card">
  <h2>Spotify Clone</h2>
</div>
<div className="card">
  <h2>Coffee Star</h2>
</div> */}
export default App;

function Tab() {
  return (
      <div className="tab">
        <div className="tab__content">
          <span>Web</span>
          <span>{/**Tablet**/}</span>
          <span>{/**Mobile**/}</span>
        </div>

        <div className="tab__icon">
          <div className="icons">
            <span class="material-icons">
              computer
            </span>
            
            <span class="material-icons">
              tablet_android
            </span>

            <span class="material-icons">
              phone_iphone
            </span>
          </div>
        </div>
      </div>
  )
}
