const storage = process.env.REACT_APP_CLIENT_STORAGE
  ? sessionStorage
  : localStorage;

export function getItem(key) {
  const jsonValue = storage.getItem(key);
  if (jsonValue) {
    return JSON.parse(jsonValue);
  } else {
    return null;
  }
}

export function setItem(key, value) {
  const jsonValue = JSON.stringify(value);
  storage.setItem(key, jsonValue);
}
