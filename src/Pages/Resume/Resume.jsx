import { useContext } from "react";
import { UserContext } from "../../Store/user-context";
import classes from "./Resume.module.css";

const Resume = () => {
  const { userInfo } = useContext(UserContext);

  let powerPoints = null;
  if (userInfo.powerfullPoints.includes(",")) {
    powerPoints = userInfo.powerfullPoints;
  }
  let project = null;
  if (userInfo.projects.includes(",")) {
    project = userInfo.projects;
  }


  return (
    <div className={classes.resume}>
      <div className={classes.left}>
        <div className={classes.img}>
          <img src={userInfo.img} alt="userImage" />
        </div>
        <div className={classes.leftSec}>
          <h3>Contact</h3>
          <div className={classes.line}></div>
          <h5>Phone</h5>
          <p>{userInfo.phone}</p>
          <h5>Email</h5>
          <p>{userInfo.email}</p>
          <h5>Address</h5>
          <p>{userInfo.address}</p>
        </div>

        <div className={classes.leftSec}>
          <h3>Education</h3>
          <div className={classes.line}></div>
          <h4>{userInfo.section}</h4>
          <br />
          <p style={{ textIndent: 15 }}>Enter Year</p>
          <p>
            {userInfo.startMonth} {userInfo.startYear}
          </p>
          <p>
            {userInfo.university}, {userInfo.city}
          </p>
          <br />
          <p style={{ textIndent: 15 }}>Finish Year</p>
          <p>
            {userInfo.endMonth} {userInfo.endYear}
          </p>
          <p>
            {userInfo.university}, {userInfo.city}
          </p>
          <br />
          {/* <p className={classes.aboutUniver}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  </p> */}
        </div>

        <div className={classes.leftSec}>
          <h3>Skills</h3>
          <div className={classes.line}></div>
          <ul className={classes.skills}>
            {userInfo.skills?.split(",").map((data, idx) => {
              return <li key={idx}>{data}</li>;
            })}
          </ul>
        </div>
      </div>

      <div className={classes.right}>
        <p className={classes.name}>
          <b>{userInfo.name}</b> {userInfo.surname}
        </p>
        <p>{userInfo.job}</p>
        <p className={classes.aboutuser}>{userInfo.headline}</p>

        <div className={classes.points}>
          {powerPoints ? (
            <p className={classes.title}>Powerfull Points</p>
          ) : null}

          <ul className={classes.skills}>
            {powerPoints?.split(",").map((data, idx) => {
              return <li key={idx}>{data}</li>;
            })}
          </ul>
        </div>

        <div className={classes.points}>
          {project ? (
            <p className={classes.title}>Projects</p>
          ) : null}
          <ul className={classes.projectList}>
            {project?.split(",").map((data, idx) => {
              return (
                <li key={idx}>
                  <a href={data} target='_blank'>{data}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;
