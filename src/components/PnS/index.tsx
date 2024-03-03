import styles from "../../styles/PnS/PnS.module.scss";
import { forwardRef } from "react";
import Slide from "./Slide";

const PnS = forwardRef((props, ref) => {
  return (
    //@ts-ignore
    <div className={styles.Wrap} ref={(pnsRef) => (ref.current[4] = pnsRef)}>
      <div className={styles.headerBox}>
        <h1 className={styles.header}>Presentation & Study</h1>
        <div className={styles.underLine} />
      </div>
      <div className={styles.study}>
        <h2>모자딥다</h2>
        <p>설명</p>
      </div>
      <Slide />
    </div>
  );
});

export default PnS;
