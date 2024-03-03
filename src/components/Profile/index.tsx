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
          <div>
            <IoPerson />
            <span>박현우</span>
          </div>
          <div>
            <FaBirthdayCake />
            <span>1999.02.12</span>
          </div>
          <div>
            <IoIosHome />
            <span>서울노원</span>
          </div>
          <div>
            <IoMailOutline />
            <span>메일</span>
          </div>
          <div>
            <IoCall />
            <span>qksgj</span>
          </div>
          <div>
            <FaGraduationCap />
            <span>졸업</span>
          </div>
          <div>
            <FaGithub />
          </div>
        </div>
      </div>
    </div>
  );
});
export default Profile;
