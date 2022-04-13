import standardStyle from "./chat.module.scss";
import Avatar from "../Sidebar/Avatar";
import { useContext } from "react";
import { channelContext } from "../../App";
import { removeChannel } from "../../firebase";

export default function ChatHeader({ customStyle }) {
  const style = customStyle ? customStyle : standardStyle;
  const { currentChannel, setChannel } = useContext(channelContext);

  const remove = () => {
    const confirmation = window.confirm(`Do you want to delete this channel?`);
    if (confirmation) {
      removeChannel(currentChannel);
      setChannel(null);
    }
  };

  if (currentChannel) {
    const firstChar = currentChannel.substring(0, 1);

    return (
      <div className={style.header}>
        <div className={style.channelName} onClick={remove}>
          <Avatar style={style} firstChar={firstChar} />
          <span className={style.name}>{currentChannel}</span>
        </div>
      </div>
    );
  } else return null;
}
