import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue, remove } from "firebase/database";
import { v4 as uuidv4 } from "uuid";

const firebaseConfig = {
  apiKey: "AIzaSyAq6EbbCp_1vmuQDCKxSp3zxcViqMynPgM",
  authDomain: "chat-16460.firebaseapp.com",
  databaseURL:
    "https://chat-16460-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "chat-16460",
  storageBucket: "chat-16460.appspot.com",
  messagingSenderId: "40305007473",
  appId: "1:40305007473:web:4a5ce464ee7342af8574d0",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const extractToArray = (responseObject) => {
  if (!responseObject) return [];
  return Object.keys(responseObject).map((key) => responseObject[key]);
};

export const createChat = async (name) => {
  const chatRef = ref(db, `chats/${name}`);
  return await set(chatRef, {
    name: name,
  });
};

export const sendMessage = async (message, chat) => {
  const messageID = uuidv4();
  const time = new Date().getTime();
  const username = localStorage.getItem(`username`);
  const messagesRef = ref(db, `${chat}/messages/${messageID}`);
  return await set(messagesRef, {
    user: username,
    text: message,
    time: time,
  });
};

export function createMessageListener(chat, updateFunction) {
  const chatMessagesRef = ref(db, `${chat}/messages`);
  onValue(chatMessagesRef, (snapshot) => {
    const messages = snapshot.val();
    updateFunction(
      extractToArray(messages).sort((a, b) => {
        if (a.time > b.time) return -1;
        else if (a.time < b.time) return 1;
        else return 0;
      })
    );
  });
}

export function createChatsListener(updateFunction) {
  const chatsRef = ref(db, `chats/`);
  onValue(chatsRef, (snapshot) => {
    const chats = snapshot.val();
    updateFunction(extractToArray(chats));
  });
}

export async function removeChannel(channel) {
  const channelRef = ref(db, `chats/${channel}`);
  return remove(channelRef);
}
