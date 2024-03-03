import { forwardRef, useEffect } from "react";
import styles from "../../styles/Projects/Projects.module.scss";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

const Projects = forwardRef((props, ref) => {
  const navigate = useNavigate();
  const [isInViewport, setIsInViewport] = useState(false);
  const observeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!observeRef.current) return;
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInViewport(true);
        } else {
          setIsInViewport(false);
        }
      });
    };

    const options = { root: null, rootMargin: "0px", threshold: 0 };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(observeRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className={styles.Wrap}
      //@ts-ignore
      ref={(projectRef) => (ref.current[3] = projectRef)}
    >
      <div className={styles.headerBox}>
        <h1 className={styles.header}>Project</h1>
        <div className={styles.underLine} />
      </div>
      <div className={styles.itemContainer}>
        <div
          className={isInViewport ? styles.item0 : ""}
          onClick={() => navigate("/dongurami-v2")}
          ref={observeRef}
        >
          동그라미-V2
        </div>
        <div
          className={isInViewport ? styles.item1 : ""}
          onClick={() => navigate("/imsangtae")}
          ref={observeRef}
        >
          Im-sang-Tae
        </div>
        <div
          className={isInViewport ? styles.item2 : ""}
          onClick={() => navigate("/dongurami")}
          ref={observeRef}
        >
          동그라미
        </div>
      </div>
    </div>
  );
});
export default Projects;

//스크롤 내렸을때 하나씩 순서대로 올라오는 애니메이션 구현하기
