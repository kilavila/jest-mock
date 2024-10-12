const url = "https://dummyjson.com/users";

/**
 * @param {number} id - The ID of the user to fetch
 * @returns {Promise<Object|undefined>} The user data if successful, undefined otherwise
 */
async function getUser(id) {
  const response = await fetch(`${url}/${id}`);

  if (response.ok) {
    const result = await response.json();
    console.log(result);
    return result;
  }

  console.error('[ ERROR ] Could not get user!');
}

export default getUser;

await getUser(1);
