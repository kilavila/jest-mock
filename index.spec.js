import login from "./index.js";
import { getToken } from "./store.js";

describe("Auth", () => {

  it("Login", async () => {
    const username = "johns";
    const password = "johnspass";

    // Mock data representing a successful login response
    const mockData = {
      id: 1,
      username: "johns",
      email: "john.smith@example.com",
      firstName: "John",
      lastName: "Smith",
      accessToken: "this-is-some-very-long-and-secret-access-token",
    };

    // Mock console.log to prevent output during tests
    jest.spyOn(console, 'log').mockImplementation(() => {});

    // Mock the global fetch function to return our mock data
    globalThis.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockData),
    });

    // Call the login function with our test credentials
    const result = await login(username, password);
    // Get the token from the store
    const token = getToken();

    // Check that the returned user ID matches the mock data
    expect(result.id).toEqual(mockData.id);
    // Check that the stored token matches the mock access token
    expect(token).toEqual(mockData.accessToken);
  });
});
