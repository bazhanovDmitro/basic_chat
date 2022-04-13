import ChatContainer from "./ChatContainer";
import ChatHeader from "./ChatHeader";
import NewMessage from "./NewMessage";

export default function Chat({ customStyle, currentChannel }) {
  return (
    <>
      <ChatHeader />
      <ChatContainer currentChannel={currentChannel} />
      <NewMessage currentChannel={currentChannel} />
    </>
  );
}
