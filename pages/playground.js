import style from "../styles/playground.module.css";
import Loader from "../components/Loader";

export default function playground(props) {
  return (
    <div className={style.container}>
      <Loader show />
    </div>
  );
}
