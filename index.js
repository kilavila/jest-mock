import { saveToken } from "./store.js";

const url = "https://dummyjson.com/auth/login";

async function login(username, password) {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: username,
      password: password,
      expiresInMins: 30, // optional, defaults to 60
    }),
    credentials: "include", // Include cookies (e.g., accessToken) in the request
  });

  if (response.ok) {
    const result = await response.json();
    console.log(result);
    saveToken(result.accessToken);
    return result;
  }

  console.error("[ ERROR ] Could not authenticate user!");
}

export default login;

// await login("emilys", "emilyspass");
