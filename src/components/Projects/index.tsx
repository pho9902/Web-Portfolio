import { forwardRef, useEffect } from "react";
import styles from "../../styles/projects/projects.module.scss";
import { useRef, useState } from "react";
import { FaGithub, FaLaptopCode } from "react-icons/fa6";
import { RiNotionFill, RiNpmjsFill } from "react-icons/ri";

const Projects = forwardRef((props, ref) => {
  const [isInViewport, setIsInViewport] = useState(false);
  const observeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!observeRef.current) return;
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInViewport(true);
        }
        //  else {
        //   setIsInViewport(false);
        // }
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
      <div
        className={isInViewport ? styles.itemContainer : styles.hidden}
        ref={observeRef}
      >
        <div className={styles.item0}>
          <h2 className={styles.header}>동그라미-V2</h2>
          <div className={styles.topIntro}>
            <span className={styles.date}>2023-12 ~ 진행중</span>
          </div>
          <div className={styles.itemInfo}>
            <div className={styles.left}>
              <img
                className={styles.img}
                src="/dongurami2.png"
                alt="dongurami2-logo"
              />
            </div>
            <div className={styles.right}>
              <span>
                2022년 개발, 운영한 웹사이트 '동그라미' 제품의 버전업 프로젝트
                입니다.
              </span>
              <span>
                교내 동아리의 홍보, 관리, 동아리를 찾는 유저들과의 중개 서비스를
                제공합니다.
              </span>
              <p />
              <span>
                Javascript로 개발된 기존 제품을 Typescript로{" "}
                <strong>마이그레이션</strong> 작업을 하고 있습니다.
              </span>
              <span>
                React-Query를 이용한 무한스크롤 페이지, Next-Auth 를 이용한
                OAuth 등<br /> 기술적으로 더 향상된 기능들을 추가해 개발중에
                있습니다.
              </span>
              <p />
              <span>
                테마 시스템을 구축해 퍼블리싱을 용이하게 만들고 라이트모드,
                다크모드 등<br /> UX 를 향상시킬 수 있는 기능 또한 쉽게 구현 할
                수 있었습니다.
              </span>
              <div className={styles.bottom}>
                <div className={styles.eachBottom}>
                  <div className={styles.smallTitle}>
                    <FaGithub size={30} />
                    <h3 className={styles.smallTitleHeader}>GitHub</h3>
                  </div>
                  <span
                    onClick={() => {
                      window.location.href =
                        "https://github.com/modern-agile-team/dongurami-front-v2";
                    }}
                    className={styles.link}
                  >
                    github.com/modern-agile-team/dongurami-front-v2
                  </span>
                </div>
                <div className={styles.eachBottom}>
                  <div className={styles.smallTitle}>
                    <FaLaptopCode size={30} />
                    <h3 className={styles.smallTitleHeader}>Skill</h3>
                  </div>
                  <span>Typescript, Next.js , Jest, OAuth, emotion, jotai</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.item1}>
          <h2 className={styles.header}>Im-Sang-Tae</h2>
          <div className={styles.topIntro}>
            <span className={styles.date}>2023-06 ~ 2023-11</span>
          </div>
          <div className={styles.itemInfo}>
            <div className={styles.left}>
              <img
                className={styles.img}
                src="/imsangtae.png"
                alt="imsangtae-capture"
              />
            </div>
            <div className={styles.right}>
              <span>
                ImSangTae는 Javascript를 사용한 프로젝트라면 어디서든 사용
                가능한
                <br /> <strong>전역 상태 관리 라이브러리</strong>입니다.
              </span>
              <p />
              <span>
                <strong>mono repo architecture</strong> 구축과{" "}
                <strong>zero-installation</strong>을 위해
                <br /> npm에서 yarn berry로 마이그레이션 작업을 했습니다.
              </span>
              <p />
              <span>
                Vanilla JS 상태관리 패키지 개발 이후 React 상태관리 패키지 또한
                개발 중에 있습니다.
              </span>
              <p />
              <span>지속적 통합을 위한 자동화 프로세스를 구축했습니다.</span>
              <p />
              <span>
                현재 패키지 저장소 npm에 배포하여 누구나 다운로드, 사용이 가능한
                상태입니다.
              </span>
              <div className={styles.bottom}>
                <div className={styles.eachBottom}>
                  <div className={styles.smallTitle}>
                    <FaGithub size={30} />
                    <h3 className={styles.smallTitleHeader}>GitHub</h3>
                  </div>
                  <span
                    onClick={() =>
                      (window.location.href =
                        "https://github.com/modern-agile-team/im-sang-tae")
                    }
                    className={styles.link}
                  >
                    github.com/modern-agile-team/im-sang-tae
                  </span>
                </div>
                <div className={styles.eachBottom}>
                  <div className={styles.smallTitle}>
                    <RiNpmjsFill size={30} />
                    <h3 className={styles.smallTitleHeader}>npm</h3>
                  </div>
                  <span
                    onClick={() => {
                      window.location.href =
                        "https://www.npmjs.com/package/@im-sang-tae/vanilla?activeTab=code";
                    }}
                    className={styles.link}
                  >
                    @im-sang-tae/vanilla
                  </span>
                </div>
                <div className={styles.eachBottom}>
                  <div className={styles.smallTitle}>
                    <FaLaptopCode size={30} />
                    <h3 className={styles.smallTitleHeader}>Skill</h3>
                  </div>
                  <span>Typescript, React, Jest</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.item2}>
          <h2 className={styles.header}>동그라미</h2>
          <div className={styles.topIntro}>
            <span className={styles.date}>2021.05 ~ 2022.01</span>
          </div>
          <div className={styles.itemInfo}>
            <div className={styles.left}>
              <img
                className={styles.img}
                src="/dongurami.png"
                alt="dongurami-capture"
              />
            </div>
            <div className={styles.right}>
              <span>
                교내 SW개발 동아리 '모던 애자일'에서 개발공부를 시작한 후
                처음으로 진행한 프로젝트입니다.
              </span>
              <p />
              <span>
                기획회의 단계에서 재학생들이 교내의 동아리에 대한 정보를
                얻는것과
                <br /> 동아리들의 홍보 방법이 제한적이라는 문제점을
                발견했습니다.
              </span>
              <span>
                이를 해결하기 위해 동아리 중개 및 관리 플랫폼을 개발, 운영했고
                <br />
                서비스 종료 전 <strong>회원수 360명</strong>을 유치하는 성과를
                거두었습니다.
              </span>
              <p />
              <span>
                마이페이지, 일정관리 페이지, 게시판 페이지 개발에 가장 크게
                기여했습니다.
              </span>
              <p />
              <span>
                <strong>SEO 최적화 작업</strong>으로 lighthouse SEO 부분 100점을
                달성했습니다.
              </span>
              <span>
                최초 렌더링 시 <strong>TBT 300ms 에서 100ms로 감소</strong>
                시키는 최적화 작업을 진행했습니다.
              </span>
              <span>
                <strong>google analytics</strong>를 적용해 웹 로그 분석을
                용이하게 만들었습니다.
              </span>
              <p />
              <span>
                스프린트 회의, 일일 스크럼 미팅 등{" "}
                <strong>애자일 방법론</strong>에 따라 개발일정을 관리했습니다.
              </span>
              <div className={styles.bottom}>
                <div className={styles.eachBottom}>
                  <div className={styles.smallTitle}>
                    <FaGithub size={30} />
                    <h3 className={styles.smallTitleHeader}>GitHub</h3>
                  </div>
                  <span
                    onClick={() =>
                      (window.location.href =
                        "https://github.com/modern-agile-team/dongurami-front")
                    }
                    className={styles.link}
                  >
                    github.com/modern-agile-team/dongurami-front
                  </span>
                </div>
                <div className={styles.eachBottom}>
                  <div className={styles.smallTitle}>
                    <RiNotionFill size={30} />
                    <h3 className={styles.smallTitleHeader}>Notion</h3>
                  </div>
                  <span
                    onClick={() =>
                      (window.location.href =
                        "https://www.notion.so/lovelyoch/Front-304bae3f8abe41b7973c84c762b98a65")
                    }
                    className={styles.link}
                  >
                    notion-url
                  </span>
                </div>
                <div className={styles.eachBottom}>
                  <div className={styles.smallTitle}>
                    <FaLaptopCode size={30} />
                    <h3 className={styles.smallTitleHeader}>Skill</h3>
                  </div>
                  <span>Javascript, Next.js, Redux, Sass</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
export default Projects;

//스크롤 내렸을때 하나씩 순서대로 올라오는 애니메이션 구현하기
