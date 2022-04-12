import MainArea from "./Components/MainArea";
import Sidebar from "./Components/Sidebar";
import "./global.scss";
import React, { useState } from "react";

const channels = [{ name: `Test 1` }, { name: `Test 2` }, { name: `Test 3` }];

export const channelContext = React.createContext();

function App() {
  const [currentChannel, setChannel] = useState(null);
  const contextValue = { currentChannel, setChannel };

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
