var axios = require('axios');

module.exports = {
  fetchPopularRepos(language) {
    var uri = `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`;
    var encodedURI = window.encodeURI(uri);

    return axios.get(encodedURI)
      .then(function(response) {
        return response.data.items;
      });
  }
};
