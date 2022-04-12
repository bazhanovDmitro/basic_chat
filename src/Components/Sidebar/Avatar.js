import s from "./style.module.scss";

export default function ChanelAvatar({ firstChar, style }) {
  return (
    <div className={style ? style?.avatar : s.avatar}>
      <span className={style ? style?.char : s.char}>{firstChar}</span>
    </div>
  );
}
