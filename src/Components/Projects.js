import React , {useContext} from 'react';
import { UserContext } from '../Store/user-context';
import classes from './Skills.module.css'


const Projects = () => {
    const {userInfo, setUserInfo} = useContext(UserContext)

  return (
    <div>
    <label className={classes.label}>Projects</label>
    <input className={classes.profileInput} type='text' onChange={e => setUserInfo({...userInfo, projects: e.target.value})} />
</div>
  )
}

export default Projects