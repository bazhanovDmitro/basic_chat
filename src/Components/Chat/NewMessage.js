import standardStyle from "./chat.module.scss";
import useLocalStorage from "../../Hooks/useLocalStorage";

export default function NewMessage({ customStyle, currentChannel }) {
  const style = customStyle ? customStyle : standardStyle;
  const [text, setText] = useLocalStorage(currentChannel, "");

  const onTextInput = (event) => {
    setText(event.target.value);
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

  return (
    <div className={style.messageInputContainer} onInput={resizeOnInput}>
      <textarea
        className={style.input}
        type="text"
        placeholder="Message"
        value={text}
        onInput={onTextInput}
      />
    </div>
  );
}
