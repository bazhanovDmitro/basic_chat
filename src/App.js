import MainArea from "./Components/MainArea";
import Sidebar from "./Components/Sidebar";
import "./global.scss";
import React, { useState, useEffect } from "react";
import { createChatsListener } from "./firebase";

// const channels = [{ name: `Test 1` }, { name: `Test 2` }, { name: `Test 3` }];

export const channelContext = React.createContext();

const requestUsername = () => {
  const username = prompt(`Enter your username please`);
  if (!username) localStorage.setItem(`username`, `Anonym`);
  else localStorage.setItem(`username`, username);
};

function App() {
  const [channels, setChannels] = useState([]);
  const [currentChannel, setChannel] = useState(null);
  const contextValue = { currentChannel, setChannel };

  useEffect(() => {
    requestUsername();
    createChatsListener(setChannels);
  }, []);

  return (
    <channelContext.Provider value={contextValue}>
      <div className="App">
        <Sidebar channels={channels} />
        <MainArea />
      </div>
    </channelContext.Provider>
  );
}

export default App;
