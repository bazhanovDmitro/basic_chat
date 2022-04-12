import standardStyle from "./chat.module.scss";
import Avatar from "../Sidebar/Avatar";
import { useContext } from "react";
import { channelContext } from "../../App";

export default function ChatHeader({ customStyle }) {
  const style = customStyle ? customStyle : standardStyle;

  const { currentChannel } = useContext(channelContext);

  if (currentChannel) {
    const firstChar = currentChannel.substring(0, 1);

    return (
      <div className={style.header}>
        <div className={style.channelName}>
          <Avatar style={style} firstChar={firstChar} />
          <span className={style.name}>{currentChannel}</span>
        </div>
      </div>
    );
  } else return null;
}
