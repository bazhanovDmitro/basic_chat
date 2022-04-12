import ChanelAvatar from "./Avatar";
import s from "./style.module.scss";
import { useContext } from "react";
import { channelContext } from "../../App";

export default function Chanel({ name, style }) {
  const { currentChannel, setChannel } = useContext(channelContext);

  const onClick = () => {
    setChannel(name);
  };

  const activeStyle = style ? style?.active : s.activeChanel;
  const isActive = currentChannel === name ? activeStyle : null;

  return (
    <div
      className={`${style ? style?.chanel : s.chanel} ${isActive}`}
      onClick={onClick}
    >
      <div className={style ? style?.innerHolder : s.innerHolder}>
        <ChanelAvatar firstChar={name.substring(name.lenght - 1, 1)} />
        <span className={style ? style?.name : s.name}>{name}</span>
      </div>
    </div>
  );
}
