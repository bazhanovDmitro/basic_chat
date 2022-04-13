import style from "./newChat.module.scss";
import { createChat } from "../../firebase";

const createChatWithPrompt = () => {
  const chatName = prompt(`Enter chats name`);
  createChat(chatName);
};

export default function NewChatButton() {
  return (
    <button className={style.newChat} onClick={createChatWithPrompt}>
      +
    </button>
  );
}
