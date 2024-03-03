import { useNavigate } from "react-router-dom";
import styles from "../../../styles/Nav/Nav.module.scss";

export default function SideNav({ location }: any) {
  const navigate = useNavigate();
  switch (location) {
    case "dongurami":
      return (
        <div className={styles.Wrap}>
          <button onClick={() => navigate("/dongurami-v2")}>
            Dongurami-V2
          </button>
          <button onClick={() => navigate("/imsangtae")}>ImSangTae</button>
          <button onClick={() => navigate("/")}>Main</button>
        </div>
      );
    case "dongurami-v2":
      return (
        <div className={styles.Wrap}>
          <button onClick={() => navigate("/dongurami")}>Dongurami</button>
          <button onClick={() => navigate("/imsangtae")}>ImSangTae</button>
          <button onClick={() => navigate("/")}>Main</button>
        </div>
      );
    default:
      return (
        <div className={styles.Wrap}>
          <button onClick={() => navigate("/dongurami-v2")}>
            Dongurami-V2
          </button>
          <button onClick={() => navigate("/dongurami")}>Dongurami</button>
          <button onClick={() => navigate("/")}>Main</button>
        </div>
      );
  }
}
