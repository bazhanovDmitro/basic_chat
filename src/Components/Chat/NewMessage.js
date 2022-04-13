import standardStyle from "./chat.module.scss";
import useLocalStorage from "../../Hooks/useLocalStorage";
import { useEffect, useRef } from "react";
import { sendMessage } from "../../firebase";

export default function NewMessage({ customStyle, currentChannel }) {
  const style = customStyle ? customStyle : standardStyle;
  const [text, setText] = useLocalStorage(currentChannel, "");

  const messageBoxRef = useRef(null);
  const messageInputRef = useRef(null);

  const onTextInput = (event) => {
    setText(event.target.value);
  };

  const onKeyDown = (event) => {
    if (event.key === `Enter`) {
      event.preventDefault();
      const text = event.target.value;
      sendMessage(text, currentChannel);
      setText("");
    }
  };

  const resizeOnInput = (event) => {
    if (event.target.scrollHeight < 350) {
      event.target.style.height = `20px`;
      event.target.style.height = `${event.target.scrollHeight - 11}px`;
    }

    if (55 < event.target.scrollHeight && event.target.scrollHeight < 350) {
      event.currentTarget.style.height = event.target.scrollHeight + "px";
    } else if (event.target.scrollHeight > 350) {
      event.target.style.overflowY = "scroll";
    } else {
      event.currentTarget.style.height = 55 + "px";
    }
  };

  useEffect(() => {
    messageBoxRef.current.style.height = `55px`;
    messageInputRef.current.style.height = `20px`;
  }, [currentChannel]);

  return (
    <div
      className={style.messageInputContainer}
      onInput={resizeOnInput}
      ref={messageBoxRef}
    >
      <textarea
        className={style.input}
        ref={messageInputRef}
        type="text"
        placeholder="Message"
        value={text}
        onInput={onTextInput}
        onKeyDown={onKeyDown}
      />
    </div>
  );
}
