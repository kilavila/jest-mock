# User Fetching API

This project provides a simple API to fetch user data from a dummy JSON service.

## Installation

1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `npm test` to run the jest test in `index.spec.js`

### index.js

```js
async function login(username, password) {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: username,
      password: password,
      expiresInMins: 30,
    }),
    credentials: "include",
  });

  if (response.ok) {
    const result = await response.json();
    console.log(result);
    saveToken(result.accessToken);
    return result;
  }

  console.error("[ ERROR ] Could not authenticate user!");
}
```

### index.spec.js

```js
describe("Auth", () => {
  it("Login", async () => {
    const username = "johns";
    const password = "johnspass";
    const mockData = {
      id: 1,
      username: "johns",
      email: "john.smith@example.com",
      firstName: "John",
      lastName: "Smith",
      accessToken: "this-is-some-very-long-and-secret-access-token",
    };

    jest.spyOn(console, 'log').mockImplementation(() => {});
    globalThis.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockData),
    });

    const result = await login(username, password);
    const token = getToken();

    expect(result.id).toEqual(mockData.id);
    expect(token).toEqual(mockData.accessToken);
  });
});
```
