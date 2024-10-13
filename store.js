import { LocalStorage } from "node-localstorage";
const localStorage = new LocalStorage('./store');

function saveToken(token) {
  localStorage.setItem("access_token", token);
}

function getToken() {
  const token = localStorage.getItem("access_token");
  return token;
}

export { saveToken, getToken };
