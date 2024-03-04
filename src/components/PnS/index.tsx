import Youtube from "react-youtube";
import styles from "../../styles/pns/pns.module.scss";
import { forwardRef } from "react";

const PnS = forwardRef((props, ref) => {
  return (
    //@ts-ignore
    <div className={styles.Wrap} ref={(pnsRef) => (ref.current[4] = pnsRef)}>
      <div className={styles.headerBox}>
        <h1 className={styles.header}>Study</h1>
        <div className={styles.underLine} />
      </div>
      <div className={styles.study}>
        <h1>모던 자바스크립트 Deep Dive study</h1>
        <p className={styles.text}>
          스터디원들이 같은 책을 읽고 작성한 문서를{" "}
          <span
            onClick={() => {
              window.location.href =
                "https://github.com/rrgks6221/js-deep-dive-study";
            }}
            className={styles.point}
          >
            문서 저장소
          </span>
          에 공유
        </p>
        <p className={styles.text}>
          한 주에 한 번 본인이 공부한 내용과 의견을 토의하는 활동
        </p>
      </div>
      <div className={styles.dotLine} />
      <div>
        <div className={styles.headerBox}>
          <h1 className={styles.header}>Presentation</h1>
          <div className={styles.underLine} />
        </div>
        <h1>Tech Talk</h1>
        <p className={styles.text}>
          10분 세미나 형식의 CS, 개발 관련 지식 발표 활동 영상 자료
        </p>
        <div className={styles.videoContainer}>
          <Youtube
            opts={{
              width: "530",
              height: "315",
              playerVars: {
                autoplay: 0,
                rel: 0,
              },
            }}
            onEnd={(e) => {
              e.target.stopVideo(0);
            }}
            videoId="t-FzM7QiS2U"
          />
          <Youtube
            opts={{
              width: "530",
              height: "315",
              playerVars: {
                autoplay: 0,
                rel: 0,
              },
            }}
            onEnd={(e) => {
              e.target.stopVideo(0);
            }}
            videoId="rGpzdfWUJtE"
          />
          <Youtube
            opts={{
              width: "530",
              height: "315",
              playerVars: {
                autoplay: 0,
                rel: 0,
              },
            }}
            onEnd={(e) => {
              e.target.stopVideo(0);
            }}
            videoId="QJPJ-_SQKAg"
          />
        </div>
      </div>
    </div>
  );
});

export default PnS;
