import style from "./Loader.module.css";

export default function Loader({ show }) {
  return show ? <div className={style.loader}></div> : null;
}
