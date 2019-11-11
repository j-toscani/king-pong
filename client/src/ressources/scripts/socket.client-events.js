export default function initChatListeners(
  connectedTo,
  chatHistory,
  updateHistory,
  setConnection,
  routeTo
) {
  const { socket } = connectedTo;
  socket.on("new message", message => {
    updateHistory(message);
  });

  socket.on("new server message", message => {
    const newChatHistory = [...chatHistory];
    newChatHistory.push(message);
    updateHistory(newChatHistory);
  });

  socket.on("set player", number => {
    const connection = { ...connectedTo };
    setConnection({ ...connection, ready: true, player: number });
  });

  socket.on("game not ready", () => {
    const connection = { ...connectedTo };
    setConnection({ ...connection, ready: false });
  });

  socket.on("start countdown", () => {
    const connection = { ...connectedTo };
    setConnection({ ...connection, ready: false });
  });

  socket.on("game start", () => {
    routeTo("game");
  });

  socket.on("room full", () => {
    routeTo("main");
    setTimeout(() => {
      alert("Room full, please choose a different one");
    }, 100);
  });
}
