import getUser from "./index.js";

// Mock the getUser function from index.js
// This replaces the actual implementation with a mock function
jest.mock('./index.js', () => ({
  // Indicate that this is an ES module
  __esModule: true,
  // Create a mock function as the default export
  // This allows us to control its behavior in our tests
  default: jest.fn()
}));

describe("User", () => {

  it("Get by ID", async () => {
    const mockData = {
      id: 1,
      firstName: 'John',
      lastName: 'Smith',
    };

    // Mock the resolved value of getUser
    // This sets up the mock function to return a Promise that resolves with mockData
    // when getUser is called in the test
    // It allows us to control what data the function returns without making actual API calls
    getUser.mockResolvedValue(mockData);
    const result = await getUser(1);

    // Verify that the result returned by getUser matches the mock data we provided
    expect(result).toEqual(mockData);

    /*
     * Additional test assertions:
     * Uncomment the following 'expect' statements to enable more comprehensive testing.
     * These assertions cover various aspects such as function calls, return types,
     * object properties, and parameter validation.
     */

    // This verifies that our function is being called with the expected parameters
    // expect(getUser).toHaveBeenCalledWith(1);

    // Verify that getUser was called exactly once
    // expect(getUser).toHaveBeenCalledTimes(1);

    // Check if the result is an object
    // expect(typeof result).toBe('object');

    // Verify that the result has all the expected properties
    // expect(result).toHaveProperty('id');
    // expect(result).toHaveProperty('firstName');
    // expect(result).toHaveProperty('lastName');

    // Check if the id is a number
    // expect(typeof result.id).toBe('number');

    // Check if firstName and lastName are strings
    // expect(typeof result.firstName).toBe('string');
    // expect(typeof result.lastName).toBe('string');

    // Verify that the mock function was called with a number
    // expect(getUser).toHaveBeenCalledWith(expect.any(Number));
  });

});
