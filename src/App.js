import './App.css';
import Header from './Header';
import netflixImg from './img/netflix-clone.JPG';
import jobOption from './img/job-option.JPG';
import starCoffee from './img/starcoffee.JPG';
import tictactoe from './img/tic-tac-toe.JPG';

const projects = [
  {
    id: 1, 
    title: "Netflix clone", 
    description: "Website looking like netflix that allows viewing the preview from youtube.",
    websiteUrl: "https://netflix-clone-bba0e.web.app/",
    gitRepo: "https://github.com/jhnnicob/netflix-clone",
    imgSrc: netflixImg,
    status: ""
  },
  {
    id: 2, 
    title: "Job Options", 
    description: "Job Options is a Saas web app that you can easily search for jobs.",
    websiteUrl: "https://inspiring-babbage-2528ed.netlify.app/",
    gitRepo: "https://github.com/jhnnicob/job-options",
    imgSrc: jobOption,
    status: ""
  },
  {
    id: 3, 
    title: "Star Coffee", 
    description: "Star coffee is a Starbucks clone. The only difference is the logo and color schemes.",
    websiteUrl: "https://serene-saha-71936e.netlify.app/",
    gitRepo: "https://github.com/jhnnicob/star-coffee",
    imgSrc: starCoffee,
    status: ""
  },
  {
    id: 4, 
    title: "Tic-tac-toe Game", 
    description: "Tic-tac-toe, noughts, and crosses, or Xs and Os/“X’y O’sies”, is a paper-and-pencil game for two players, X and O, who take turns marking the spaces in a 3×3 grid. The player who succeeds in placing three of their marks in a diagonal, horizontal, or vertical row is the winner.",
    websiteUrl: "https://jolly-sinoussi-cfd58a.netlify.app/",
    gitRepo: "https://github.com/jhnnicob/tic-tac-toe",
    imgSrc: tictactoe,
    status: ""
  },
  {
    id: 4, 
    title: "Spotify Clone", 
    description: "This Spotify clone allows you to load your Spotify account(if you have one).",
    websiteUrl: "",
    gitRepo: "",
    imgSrc: "",
    status: "Pending"
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
                  <h2>{project.title}<span className="status-text">{project.status}</span></h2>
                  <Tab />
                  <p>{project.description}</p>
                  <div className="buttons">
                    <a href={project.websiteUrl} target="blank">View Website</a>
                    <a href={project.gitRepo} target="blank">Visit Repo</a>
                  </div>
                </div>
    
                <div className="col">
                  <img src={project.imgSrc} alt=""/>
                </div>
                <div></div>
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

export default App;

function Tab() {
  return (
      <div className="tab">
        <div className="tab__content">
          <span className="web">Web</span>
          <span className="tablet">{/**Tablet**/}</span>
          <span className="mobile">Mobile</span>
        </div>

        <div className="tab__icon">
          <div className="icons">
            <span className="material-icons">
              computer
            </span>
            
            <span className="material-icons">
              tablet_android
            </span>

            <span className="material-icons">
              phone_iphone
            </span>
          </div>
        </div>
      </div>
  )
}
