import { FaGithub } from "react-icons/fa6";
import styles from "../../styles/footer/footer.module.scss";
import { IoMailOutline } from "react-icons/io5";
export default function Footer() {
  const handleCopyClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("클립보드에 메일 주소가 복사되었습니다.");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.Wrap}>
      <FaGithub
        size={30}
        onClick={() => {
          window.location.href = "https://github.com/pho9902";
        }}
      />
      <IoMailOutline
        size={30}
        onClick={() => {
          handleCopyClipBoard("bagh9902@gmail.com");
        }}
      />
    </div>
  );
}
