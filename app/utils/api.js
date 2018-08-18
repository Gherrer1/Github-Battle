const axios = require('axios');

module.exports = {
  fetchPopularRepos(language) {
    const uri = `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`;
    const encodedURI = window.encodeURI(uri);

    return axios.get(encodedURI)
      .then((response) => response.data.items);
  },
  fetchUser(username) {
    // const uri = `https://api.github.com/search/users?q=${username}&in=login`;
    const uri =  `https://api.github.com/search/users?q=tom+repos:>42+followers:>1000`;
    const encodedURI = window.encodeURI(uri);

    return axios.get(encodedURI)
      .then((response) => response.data.items);
  },
};
