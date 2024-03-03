import Banner from "../Banner";
import Profile from "../Profile";
import Projects from "../Projects";
import Skill from "../Skill";
import Nav from "../Nav";
import AboutMe from "../AboutMe";

import { useNavigate } from "react-router-dom";
import styles from "../../styles/Main/Main.module.scss";

function Main() {
  return (
    <div className={styles.Wrap}>
      <Banner />
      <div className={styles.term} />
      <AboutMe />
      <div className={styles.term} />
      <Profile />
      <div className={styles.dotLine} />
      <Skill />
      <Projects />
      <Nav />
    </div>
  );
}

export default Main;
