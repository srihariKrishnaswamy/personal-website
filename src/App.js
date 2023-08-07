import logo from './logo.svg';
import Mainsection from "./components/mainsection/Mainsection";
import Navsection from "./components/navsection/Navsection";
import Aboutsection from "./components/aboutsection/Aboutsection";
import Experiencesection from "./components/experiencesection/Experiencesection";
import Projectsection from "./components/projectsection/Projectsection";
import classes from './App.module.css';
function App() {
  return (
    <div className={classes.App}>
      <div className={classes.backgroundimage}>
        <Navsection/>
        <div className={classes.content}>
          <Mainsection/>
          <Aboutsection/>
          <Experiencesection/>
          <Projectsection/>
        </div>
      </div>
    </div>
  );
}

export default App;