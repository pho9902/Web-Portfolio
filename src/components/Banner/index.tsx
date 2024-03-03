import styles from "../../styles/banner/banner.module.scss";

export default function Banner() {
  return (
    <div className={styles.Wrap}>
      <h1 className={styles.text}>
        안녕하세요 :)
        <br />
        <strong>프론트엔드 개발자 박현우</strong> 입니다.
      </h1>

      <div className={styles.underLine} />
    </div>
  );
}
