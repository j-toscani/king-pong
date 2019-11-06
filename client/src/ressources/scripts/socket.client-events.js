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
  socket.on("set player", () => {
    const { connected, socket } = connection;
    setConnection({ connected, opponent: false, socket, ready: true });
  });
  socket.on("set opponent", () => {
    const { connected, socket } = connection;
    setConnection({ connected, opponent: true, socket, ready: true });
  });

  socket.on("game not ready", () => {
    const { connected, socket, opponent } = connection;
    setConnection({ connected, socket, opponent, ready: false });
  });

  socket.on("start countdown", () => {
    const { connected, socket, opponent } = connection;
    setConnection({ connected, socket, opponent, ready: false });
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
