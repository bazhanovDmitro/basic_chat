import Chanel from "./Chanel";
import s from "./style.module.scss";

export default function Sidebar({ channels, style }) {
  return (
    <div className={style ? style?.sidebar : s.sidebar}>
      <div className={s.chanelHolder}>
        {channels.map((channel) => (
          <Chanel key={channel.name} name={channel.name} />
        ))}
      </div>
    </div>
  );
}
