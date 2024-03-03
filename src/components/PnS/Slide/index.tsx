import Youtube from "react-youtube";
import Slider from "react-slick";
import styles from "../../../styles/PnS/slick/Slick.module.scss";
import { FaCircleArrowUp, FaCircleArrowDown } from "react-icons/fa6";
import "../../../styles/PnS/slick/slick.css";
import "../../../styles/PnS/slick/slick-theme.css";

export default function Slide() {
  const setting = {
    infinite: true,
    speed: 500,
    slideToShow: 1,
    slideToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    vertical: true,
  };
  return (
    <div>
      <Slider {...setting}>
        <div>
          <Youtube videoId="t-FzM7QiS2U" />
        </div>
        <div>
          <Youtube videoId="rGpzdfWUJtE" />
        </div>
        <div>
          <Youtube videoId="QJPJ-_SQKAg" />
        </div>
      </Slider>
    </div>
  );
}

function NextArrow({ onClick }: any) {
  return (
    <div className={styles.arrow} onClick={onClick}>
      <FaCircleArrowDown size={50} />
    </div>
  );
}
function PrevArrow({ onClick }: any) {
  return (
    <div onClick={onClick} className={styles.arrow}>
      <FaCircleArrowUp size={50} />
    </div>
  );
}
