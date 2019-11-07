export default function initChatListeners(
  connection,
  chatHistory,
  updateHistory,
  setConnection,
  routeTo
) {
  const { socket } = connection;
  socket.on("new message", message => {
    updateHistory(message);
  });
  socket.on("new server message", message => {
    const newChatHistory = [...chatHistory];
    newChatHistory.push(message);
    updateHistory(newChatHistory);
  });

  socket.on("game ready", () => {
    const { connected, socket, player } = connection;
    setConnection({ connected, socket, player, ready: true });
  });

  socket.on("game not ready", () => {
    const { connected, socket, player } = connection;
    setConnection({ connected, socket, player, ready: false });
  });

  socket.on("start countdown", () => {
    const { connected, socket, player } = connection;

    setConnection({ connected, socket, player, ready: false });
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
