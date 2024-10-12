# User Fetching API

This project provides a simple API to fetch user data from a dummy JSON service.

## Installation

1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `npm test` to run the jest test in `index.spec.js`

### index.js

```js
async function getUser(id) {
  const response = await fetch(`${url}/${id}`);

  if (response.ok) {
    const result = await response.json();
    console.log(result);
    return result;
  }

  console.error('[ ERROR ] Could not get user!');
}
```

### index.spec.js

```js
jest.mock('./index.js', () => ({
  __esModule: true,
  default: jest.fn()
}));

describe("User", () => {
  it("Get by ID", async () => {
    const mockData = {
      id: 1,
      firstName: 'John',
      lastName: 'Smith',
    };

    getUser.mockResolvedValue(mockData);
    const result = await getUser(1);

    expect(result).toEqual(mockData);
  });
});
```
