import standardStyle from "./chat.module.scss";
import Message from "./Message";

const messages = [
  { text: `Hello world!`, user: "Tom", time: "00:12" },
  { text: `Hi!`, user: "Jerry", time: "00:12" },
  { text: `Hello`, user: "Helen", time: "00:13" },
  {
    text: `Lorem ipsum dolor sit amet helen Lorem ipsum dolor sit amet helen Lorem ipsum dolor sit amet helen Lorem ipsum dolor sit amet helen Lorem ipsum dolor sit amet helen Lorem ipsum dolor sit amet helen Lorem ipsum dolor sit amet helen`,
    user: "Helen",
    time: "02:01",
  },
].reverse();

export default function ChatContainer({ customStyle }) {
  const style = customStyle ? customStyle : standardStyle;

  return (
    <div className={style.chatContainer}>
      <Message
        message={{ text: `test`, user: `Dima`, time: `02.21` }}
        my={true}
      />
      {messages.map((message) => (
        <Message message={message} />
      ))}
    </div>
  );
}
