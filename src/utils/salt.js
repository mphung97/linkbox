/**
 * Generate 16 bytes salt for bcrypt by seed
 *
 * Should return the same salt for the same seed
 *
 * @param  {string}   seed The seed for salt
 * @return {string}        The resulted salt
 */
module.exports = (seed) => {
  // Salt must be 16 bytes
  const bytes = []
  // eslint-disable-next-line no-plusplus
  for (let i = 0, l = seed.length; i < l; i++) {
    // eslint-disable-line no-plusplus
    bytes.push(seed.charCodeAt(i))
  }
  while (bytes.length < 16) {
    bytes.push(0)
  }

  // Convert byte array to base64 string
  const salt = btoa(String.fromCharCode.apply(String, bytes.slice(0, 16))) // eslint-disable-line prefer-spread

  // Adding header for bcrypt. Fake 10 rounds
  return '$2a$10$' + salt // eslint-disable-line prefer-template
}
