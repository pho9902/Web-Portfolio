import Banner from "../Banner";
import Profile from "../Profile";
import Projects from "../Projects";
import Skill from "../Skill";
import AboutMe from "../AboutMe";
import Nav from "../Nav/MainNav";

import styles from "../../styles/Main/Main.module.scss";
import { useRef } from "react";
import Footer from "../Footer";

function Main() {
  const scrollRef = useRef([]);

  return (
    <>
      <div className={styles.Wrap}>
        <Banner />
        <div className={styles.term} />
        <AboutMe ref={scrollRef} />
        <div className={styles.term} />
        <Profile ref={scrollRef} />
        <div className={styles.dotLine} />
        <Skill ref={scrollRef} />
        <div className={styles.dotLine} />
        <Projects ref={scrollRef} />
        <Footer />
      </div>
      <Nav scrollRef={scrollRef} />
    </>
  );
}

export default Main;
