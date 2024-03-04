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
          <h3 className={styles.itemHeader}>Language</h3>
          <div className={styles.dotLine} />
          <img
            className={styles.img}
            src="/language/languageX.png"
            alt="langImg"
          />
        </div>
        <div className={styles.eachItem}>
          <h3 className={styles.itemHeader}>FrameWork</h3>
          <div className={styles.dotLine} />
          <img
            className={styles.img}
            src="framework/frameworkX.png"
            alt="frameImg"
          />
        </div>
        <div className={styles.eachItem}>
          <h3 className={styles.itemHeader}>Cowork</h3>
          <div className={styles.dotLine} />
          <img className={styles.img} src="coop/coopY.png" alt="coworkImg" />
        </div>
        <div className={styles.eachItem}>
          <h3 className={styles.itemHeader}>State Management</h3>
          <div className={styles.dotLine} />
          <img className={styles.img} src="state/stateX.png" alt="stateImg" />
        </div>
        <div className={styles.eachItem}>
          <h3 className={styles.itemHeader}>Style</h3>
          <div className={styles.dotLine} />
          <img className={styles.img} src="style/styleX.png" alt="styleImg" />
        </div>
      </div>
    </div>
  );
});

export default Skill;
