import Main from "./Pages/Main";
import Layout from "./Components/Layout/Layout";
import Resume from "./Pages/Resume/Resume";

import classes from "./App.module.css";

function App() {
  return (
    <Layout>
      <div className={classes.app}>
        <div className={classes.main}><Main /></div>
        <div className={classes.resume}>
        <Resume />  
        </div>
      </div>
    </Layout>
  );
}

export default App;
