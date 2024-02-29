import Banner from "./components/Banner";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skill from "./components/Skill";
import Nav from "./components/Nav";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();
  return (
    <>
      <Banner />
      <Profile />
      <Skill />
      <Projects />
      <Nav />
    </>
  );
}

export default Main;
