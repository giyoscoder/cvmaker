import React, {useContext} from 'react';
import {UserContext} from '../Store/user-context'
import classes from './Skills.module.css';

const Skills = () => {
  const {userInfo, setUserInfo} = useContext(UserContext)
  return (
    <div>
        <label className={classes.label}>Skills</label>
        <input className={classes.profileInput} type='text' onChange={e => setUserInfo({...userInfo, skills: e.target.value})} />
    </div>
  )
}

export default Skills