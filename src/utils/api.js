const axios = require('axios');

const getRepoInfo = async (repoName) => {
  const response = await axios.get(`https://api.github.com/repos/${repoName}`);
  return response.data;
};

module.exports = { getRepoInfo };