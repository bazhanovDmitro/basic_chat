import style from "./chat.module.scss";

export default function Message({ message, my }) {
  return (
    <div className={`${style.message} ${my ? style.myMessage : null}`}>
      <span className={style.author}>{message.user}</span>
      <p className={style.text}>{message.text}</p>
      <span className={style.time}>{message.time}</span>
    </div>
  );
}
