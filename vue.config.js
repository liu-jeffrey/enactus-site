const { BASE_URL } = process.env;

if (BASE_URL) {
  console.log(`Detected custom BASE_URL: ${BASE_URL}`);
}

module.exports = {
  baseUrl: BASE_URL,
};
