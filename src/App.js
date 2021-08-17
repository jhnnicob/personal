import './App.css';
import Header from './Header';
import netflixImg from './img/netflix-clone.JPG';
import jobOption from './img/job-option.JPG';
import starCoffee from './img/starcoffee.JPG';
import tictactoe from './img/tic-tac-toe.JPG';
import mywebsite from './img/mywebsite.JPG';
import Projects from './projects';
import About from './about';
import Contact from './contact';
import Footer from './Footer';

const projects = [
  {
    id: 1, 
    title: "My Website", 
    description: "A simple website I built to showcase my projects.",
    websiteUrl: "https://www.nicomolon.com/",
    gitRepo: "https://github.com/jhnnicob/portfolio",
    imgSrc: mywebsite,
    status: "",
    technologies: ['react-original']
  },
  {
    id: 2, 
    title: "Job Options", 
    description: "Job Options is a Saas web app that you can easily search for jobs.",
    websiteUrl: "https://inspiring-babbage-2528ed.netlify.app/",
    gitRepo: "https://github.com/jhnnicob/job-options",
    imgSrc: jobOption,
    status: "",
    technologies: ["html5-plain", "css3-plain", "javascript-plain"]
  },
  {
    id: 3, 
    title: "Star Coffee", 
    description: "Star coffee is a Starbucks clone. The only difference is the logo and color schemes.",
    websiteUrl: "https://serene-saha-71936e.netlify.app/",
    gitRepo: "https://github.com/jhnnicob/star-coffee",
    imgSrc: starCoffee,
    status: "",
    technologies: ["html5-plain", "css3-plain"]
  },
  {
    id: 4, 
    title: "Netflix clone", 
    description: "Website looking like netflix that allows viewing the preview from youtube.",
    websiteUrl: "https://netflix-clone-bba0e.web.app/",
    gitRepo: "https://github.com/jhnnicob/netflix-clone",
    imgSrc: netflixImg,
    status: "",
    technologies: ["react-original"]
  },
  {
    id: 5, 
    title: "Tic-tac-toe Game", 
    description: "Tic-tac-toe, noughts, and crosses, or Xs and Os/“X’y O’sies”, is a paper-and-pencil game for two players, X and O, who take turns marking the spaces in a 3×3 grid. The player who succeeds in placing three of their marks in a diagonal, horizontal, or vertical row is the winner.",
    websiteUrl: "https://jolly-sinoussi-cfd58a.netlify.app/",
    gitRepo: "https://github.com/jhnnicob/tic-tac-toe",
    imgSrc: tictactoe,
    status: "",
    technologies: ["html5-plain", "css3-plain", "javascript-plain"]
  }
]

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <About />
        <Projects projects={projects}/>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;