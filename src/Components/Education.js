import React, {useContext} from 'react';
import {UserContext} from '../Store/user-context'
import classes from './Education.module.css';

const Education = () => {
  const {userInfo, setUserInfo} = useContext(UserContext)
  return (
    <div className={classes.education}>
      <div className={classes.subject}>
        <label className={classes.label}>Section</label>
        <input className={classes.profileInput} type="text" placeholder='Bachelor or Magister' onChange={e => setUserInfo({...userInfo, section: e.target.value})}  />
      </div>
      <div  className={classes.university}>
        <label className={classes.label}>University</label>
        <input className={classes.profileInput} type="text" onChange={e => setUserInfo({...userInfo, university: e.target.value })}  />
      </div>
      <div  className={classes.city}>
        <label className={classes.label}>City</label>
        <input className={classes.profileInput} type="text" onChange={e => setUserInfo({...userInfo, city: e.target.value})}  />
      </div>
      <div className={classes.whenStart}>
        <label className={classes.label}>Start data</label>
        <div  className={classes.startDate}>
        <input className={classes.profileInput} type="text" placeholder='Year' onChange={e => setUserInfo({...userInfo, startYear: e.target.value})} />
        <input className={classes.profileInput} type="text" placeholder='Month ( July )' onChange={e => setUserInfo({...userInfo, startMonth: e.target.value})} />
        </div>
      </div>
      <div className={classes.whenEnd}>
        <label className={classes.label}>End date</label>
        <div  className={classes.startDate} >
        <input className={classes.profileInput} type="text" placeholder='Year' onChange={e => setUserInfo({...userInfo, endYear: e.target.value})}  />
        <input className={classes.profileInput} type="text" placeholder='Month ( July )' onChange={e => setUserInfo({...userInfo, endMonth: e.target.value })} />
        </div>
      </div>
      {/* <div  className={classes.desc }>
        <label className={classes.label}>Description</label>
        <textarea />
      </div> */}
    </div>
  )
}

export default Education