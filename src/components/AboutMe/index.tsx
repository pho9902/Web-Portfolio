import { forwardRef } from "react";
import styles from "../../styles/aboutme/aboutme.module.scss";

const AboutMe = forwardRef((props, ref) => {
  return (
    <div
      className={styles.Wrap}
      //@ts-ignore
      ref={(aboutRef) => (ref.current[0] = aboutRef)}
    >
      <div className={styles.leftContainer}>
        <h1 className={styles.header}>About Me</h1>
        <div className={styles.underLine} />
      </div>
      <div className={styles.introBox}>
        <p className={styles.intro}>
          안녕하세요 박현우입니다. <br />
          저는 새로운 기술을 받아들이는 데에 거리낌이 없는, 어떤 일이든 성장을
          위해서라면 주저하지 않을 준비가 된 신입 프론트엔드 개발자입니다.{" "}
          <br />
          인덕대학교 SW개발 동아리 <strong>모던 애자일</strong> 에서 처음 개발을
          접해, 최대한 현업에 가까운 환경에서 경험을 쌓으려 노력했습니다. <br />
          스프린트보다는 마라톤을 추구하는 마음으로 항상 성장하고 있습니다.
        </p>
      </div>
    </div>
  );
});
export default AboutMe;
