// Exercise 7: Fetch and Show JSON Keys
// Rules: the function returns a Promise (an async function does that for you) and shows the result with console.log.
// Use async/await + try/catch (recommended) or .then()/.catch() - both are fine.

/**
 * Fetch JSON data
 * Show all keys of the top-level object
 *
 * Example output:
 *   Keys: [ 'userId', 'id', 'title', 'completed' ]
 *
 * @param {string} url
 * @returns {Promise} resolves after the result was printed (so whoever calls the function can wait for it)
 */
async function showKeys(url) {
  try { 
    const response =await fetch(url);
    const data = await response.json();
  const keys = Object.keys(data);
  console.log(`"Keys:", ${keys}`)
  } catch (error) {
    console.log("Something went wrong:", error.message);
  }
}

module.exports = { showKeys };
