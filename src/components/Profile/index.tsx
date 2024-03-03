import styles from "../../styles/Profile/Profile.module.scss";
import { IoPerson, IoMailOutline, IoCall } from "react-icons/io5";
import { IoIosHome } from "react-icons/io";
import { FaGraduationCap } from "react-icons/fa6";
import { FaBirthdayCake, FaGithub } from "react-icons/fa";
import { forwardRef } from "react";

const Profile = forwardRef((props, ref) => {
  return (
    <div
      className={styles.Wrap}
      //@ts-ignore
      ref={(profileRef) => (ref.current[1] = profileRef)}
    >
      <div className={styles.headerBox}>
        <h1 className={styles.header}>Profile</h1>
        <div className={styles.underLine} />
      </div>
      <div className={styles.infoWrap}>
        <img
          className={styles.profileImg}
          alt="profileImg"
          src="profileImg.jpg"
        />
        <div className={styles.info}>
          <div className={styles.eachItem}>
            <IoPerson />
            <span className={styles.text}>박현우</span>
          </div>
          <div className={styles.eachItem}>
            <FaBirthdayCake />
            <span className={styles.text}>1999.02.12</span>
          </div>
          <div className={styles.eachItem}>
            <IoIosHome />
            <span className={styles.text}>서울시 노원구</span>
          </div>
          <div className={styles.eachItem}>
            <IoMailOutline />
            <span className={styles.text}>bagh9902@gmail.com</span>
          </div>
          <div className={styles.eachItem}>
            <IoCall />
            <span className={styles.text}>010-9169-3840</span>
          </div>
          <div className={styles.eachItem}>
            <FaGraduationCap />
            <span className={styles.longText}>
              인덕대 정보통신공학과 (18.03 - 23.08)
            </span>
          </div>
          <div className={styles.eachItem}>
            <FaGithub />
            <span
              className={styles.link}
              onClick={() =>
                (window.location.href = "https://github.com/pho9902")
              }
            >
              GitHub
            </span>
          </div>
        </div>
      </div>
    </div>
  );
});
export default Profile;
