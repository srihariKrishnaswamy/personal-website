import Mainsection from "./components/mainsection/Mainsection";
import Navsection from "./components/navsection/Navsection";
import Aboutsection from "./components/aboutsection/Aboutsection";
import Experiencesection from "./components/experiencesection/Experiencesection";
import Projectsection from "./components/projectsection/Projectsection";
import Skillsection from "./components/skillsection/Skillsection";
import Resumesection from "./components/resumesection/Resumesection";
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
          <Projectsection />
          <Skillsection />
          <Resumesection />
        </div>
      </div>
    </div>
  );
}

export default App;