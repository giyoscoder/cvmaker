import React , {useContext, useState, useEffect} from 'react';
import { UserContext } from '../Store/user-context';
import classes from './Skills.module.css'


const Projects = () => {
    const {userInfo, setUserInfo} = useContext(UserContext);
    const [touch, setTouch] = useState(false);

    console.log();

    const blurHandler = event => {
      setTouch(true)
      if(userInfo.projects.length){
        setTouch(false)
      }
    }
   return (
    <div>
    <label className={classes.label}>Projects</label>
    <input className={classes.profileInput} type='text' onChange={e => setUserInfo({...userInfo, projects: e.target.value})} onBlur={blurHandler} placeholder='https://...'/>
    {touch && <p className={classes.errorText}>Need to fill</p>}
</div>
  )
}

export default Projects