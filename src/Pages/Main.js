import React, { useState } from 'react';
import Profile from '../Components/Profile';
import Education from '../Components/Education';
import Skills from '../Components/Skills';
import PowerfullPoints from '../Components/PowerfullPoints';

import classes from './Main.module.css';
import Projects from '../Components/Projects';


const Main = () => {
  const [profile, setProfile] = useState(false);
  const [education, setEducation] = useState(false);
  const [skills, setSkills] = useState(false);
  const [powerfullPoints, setPowerfullPoints] = useState(false);
  const [pojects, setProjects] = useState(false);

  return (
    <div >
      <div className={classes.borderBottom}>
       <div className={classes.showDiv}>
       <p style={{color: profile ? '#000' : 'grey'}}>Personal Details</p>
        <button  onClick={() => setProfile(!profile)}>{profile ? '-' : '+'}</button>
       </div>
        {profile && <Profile/>}
      </div>
      <div className={classes.borderBottom}>
       <div className={classes.showDiv}>
       <p style={{color: education ? '#000' : 'grey'}}>Education</p>
        <button  onClick={() => setEducation(!education)}>{education ? '-' : '+'}</button>
       </div>
        {education &&  <Education/>}
      </div>
      <div className={classes.borderBottom}>
       <div className={classes.showDiv}>
       <p style={{color: skills ? '#000' : 'grey'}}>Skills</p>
        <button  onClick={() => setSkills(!skills)}>{skills ? '-' : '+'}</button>
       </div>
        {skills && <Skills/>}
      </div>

      <div className={classes.borderBottom}>
       <div className={classes.showDiv}>
       <p style={{color: powerfullPoints ? '#000' : 'grey'}}>Powerfull Points</p>
        <button  onClick={() => setPowerfullPoints(!powerfullPoints)}>{powerfullPoints ? '-' : '+'}</button>
       </div>
        {powerfullPoints &&  <PowerfullPoints/>}
      </div>

      <div className={classes.borderBottom}>
       <div className={classes.showDiv}>
       <p style={{color: pojects ? '#000' : 'grey'}}>Projects</p>
        <button  onClick={() => setProjects(!pojects)}>{pojects ? '-' : '+'}</button>
       </div>
        {pojects &&  <Projects/>}
      </div>
       
    </div>
  )
}

export default Main