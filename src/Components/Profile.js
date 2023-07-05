import React, { useContext } from "react";
import { UserContext } from "../Store/user-context";
import classes from "./Profile.module.css";

const Profile = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);

  return (
    <div className={classes.profile}>
      <div className={classes.img}>
        {/* <label className={classes.label}>Photo</label>
            <input type='file' className={classes.file}/> */}
        <label for="images" className={classes["drop-container"]}>
          <span className={classes["drop-title"]}>Drop files here</span>

          <input type="file" id="images" accept="image/*" required  onChange={e => setUserInfo({...userInfo, img: URL.createObjectURL(e.target.files[0])})} />
        </label>
      </div>
      <div className={classes.name}>
        <label className={classes.label}>Given name</label>
        <input className={classes.profileInput} type="text"  onChange={e => setUserInfo({...userInfo, name: e.target.value})} />
      </div>
      <div className={classes.lastname}>
        <label className={classes.label}>Last name</label>
        <input className={classes.profileInput} type="text"  onChange={e => setUserInfo({...userInfo, surname: e.target.value})} />
      </div>
      <div className={classes.job}>
        <label className={classes.label}>Job</label>
        <input className={classes.profileInput} type="text"  onChange={e => setUserInfo({...userInfo, job: e.target.value})} />
      </div>
      <div className={classes.headline}>
        <label className={classes.label}>Headline</label>
        <input
          className={classes.profileInput}
          type="text"
          placeholder="About yourself ..." onChange={e => setUserInfo({...userInfo,headline: e.target.value})} 
        />
      </div>
      <div className={classes.address}>
        <label className={classes.label}>Address</label>
        <input className={classes.profileInput} type="text"  onChange={e => setUserInfo({...userInfo,address: e.target.value})} />
      </div>
      <div className={classes.email}>
        <label className={classes.label}>Email</label>
        <input className={classes.profileInput} type="text"  onChange={e => setUserInfo({...userInfo, email: e.target.value})} />
      </div>
      <div className={classes.phone}>
        <label className={classes.label}>Phone number</label>
        <input className={classes.profileInput} type="text"  onChange={e => setUserInfo({...userInfo, phone: e.target.value})} />
      </div>
    </div>
  );
};

export default Profile;
