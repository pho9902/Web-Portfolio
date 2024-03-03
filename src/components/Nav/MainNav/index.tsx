import styles from "../../../styles/Nav/Nav.module.scss";
import { useEffect, useRef, useState } from "react";
import BrightBtn from "../BrightBtn";

const Nav = ({ scrollRef }: any) => {
  const DETAIL = [
    { idx: 0, name: "AboutMe" },
    { idx: 1, name: "Profile" },
    { idx: 2, name: "Skill" },
    { idx: 3, name: "Project" },
  ];

  const [navIndex, setNavIndex] = useState(null);
  const navRef = useRef([]);

  useEffect(() => {
    //@ts-ignore
    scrollRef.current[navIndex]?.scrollIntoView({ behavior: "smooth" });
    setNavIndex(null);
  }, [scrollRef, navIndex]);

  useEffect(() => {
    const changeNavBtnStyle = () => {
      //@ts-ignore
      scrollRef.current.forEach((ref, idx) => {
        if (ref.offsetTop - 180 < window.scrollY) {
          navRef.current.forEach((ref) => {
            //@ts-ignore
            ref.className = ref.className.replace(" active", "");
          });
          //@ts-ignore
          navRef.current[idx].className += " active";
        }
      });
    };

    window.addEventListener("scroll", changeNavBtnStyle);

    return () => {
      window.removeEventListener("scroll", changeNavBtnStyle);
    };
  }, [scrollRef]);

  return (
    <div className={styles.Wrap}>
      {DETAIL.map(({ idx, name }) => (
        <button
          key={idx}
          //@ts-ignore
          ref={(ref) => (navRef.current[idx] = ref)}
          onClick={() => {
            //@ts-ignore
            setNavIndex(idx);
          }}
        >
          {name}
        </button>
      ))}
      <BrightBtn />
    </div>
  );
};

export default Nav;
