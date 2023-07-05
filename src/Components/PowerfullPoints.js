import React, { useState, useContext } from "react";
import {UserContext} from '../Store/user-context'
import classes from './Skills.module.css'

const PowerfullPoints = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);

  return (
    <div>
      <label className={classes.label}>Powerfull Points</label>
      <input
        className={classes.profileInput}
        type="text"
        onChange={(e) => setUserInfo({ ...userInfo, powerfullPoints: e.target.value })}
      />
    </div>
  );
};

export default PowerfullPoints;
