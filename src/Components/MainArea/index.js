import s from "./style.module.scss";
import Chat from "../Chat/index.js";
import { useContext } from "react";
import { channelContext } from "../../App";
import NewChatButton from "../NewChatButton";

export default function MainArea({ style }) {
  const { currentChannel } = useContext(channelContext);

  return (
    <div className={style ? style?.mainArea : s.mainArea}>
      {currentChannel ? <Chat currentChannel={currentChannel} /> : null}
      <NewChatButton />
    </div>
  );
}
