import { forwardRef } from "react";
import styles from "../../styles/skill/skill.module.scss";

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
          <h3 className={styles.itemHeader}>Language-</h3>
          <p className={styles.itemText}>Typescript</p>

          <p className={styles.itemText}>Javascript</p>

          <p className={styles.itemText}>CSS-in-JS</p>

          <p className={styles.itemText}>HTML, CSS</p>
        </div>
        <div className={styles.eachItem}>
          <h3 className={styles.itemHeader}>FrameWork-</h3>
          <p className={styles.itemText}>React</p>

          <p className={styles.itemText}>Next</p>
          <p className={styles.itemText} />
          <p className={styles.itemText} />
        </div>
        <div className={styles.eachItem}>
          <h3 className={styles.itemHeader}>State Management-</h3>
          <p className={styles.itemText}>Redux(Toolkit)</p>

          <p className={styles.itemText}>Recoil</p>
          <p className={styles.itemText}>Jotai</p>
          <p className={styles.itemText} />
        </div>
        <div className={styles.eachItem}>
          <h3 className={styles.itemHeader}>Cowork-</h3>
          <p className={styles.itemText}>Git</p>

          <p className={styles.itemText}>Jira</p>

          <p className={styles.itemText}>Figma</p>
          <p className={styles.itemText} />
        </div>
      </div>
    </div>
  );
});

export default Skill;
