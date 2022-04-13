import style from "./chat.module.scss";

export default function Message({ message, my }) {
  const time = new Date(message.time);
  const hours = time.getHours() < 10 ? `0${time.getHours()}` : time.getHours();
  const minutes =
    time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();

  return (
    <div className={`${style.message} ${my ? style.myMessage : null}`}>
      <span className={style.author}>{message.user}</span>
      <p className={style.text}>{message.text}</p>
      <span className={style.time}>{`${hours}:${minutes}`}</span>
    </div>
  );
}
