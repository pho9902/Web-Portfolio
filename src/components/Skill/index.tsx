import { forwardRef } from "react";
import styles from "../../styles/Skill/Skill.module.scss";

const Skill = forwardRef((props, ref) => {
  return (
    <div
      className={styles.Wrap}
      //@ts-ignore
      ref={(skillRef) => (ref.current[2] = skillRef)}
    >
      <div className={styles.headerBox}>
        <h1 className={styles.header}>Skill</h1>
        <div className={styles.underLine} />
      </div>

      <div className={styles.mainContainer}>
        <div className={styles.eachItem}>
          <h2 className={styles.itemHeader}>Language-</h2>
          <p>Typescript | Javascript | CSS-in_JS | HTML | CSS</p>
        </div>
        <div className={styles.eachItem}>
          <h2 className={styles.itemHeader}>FrameWork-</h2>
          <p>React | Next</p>
        </div>
        <div className={styles.eachItem}>
          <h2 className={styles.itemHeader}>State Management-</h2>
          <p>Redux(Toolkit) | Recoil | Jotai</p>
        </div>
        <div className={styles.eachItem}>
          <h2 className={styles.itemHeader}>Cowork-</h2>
          <p>Git | Jira | Figma</p>
        </div>
      </div>
    </div>
  );
});

export default Skill;
