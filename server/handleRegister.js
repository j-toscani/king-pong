function handleRegister(userName, callback) {
  const user = clientManager.getUserByName(userName);
  clientManager.registerClient(client, user);

  return callback(null, user);
}
