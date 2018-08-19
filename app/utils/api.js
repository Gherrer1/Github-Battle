const axios = require('axios');
const id = 'YOUR_CLIENT_ID';
const secret = 'YOUR_SECRET_ID';
let params = `?client_id=${id}&client_secret=${secret}`;
params = '?';

function getProfile(username) {
  return axios.get(`https://api.github.com/users/${username}${params}`)
    .then(function(user) {
      return user.data;
    });
}

function getRepos(username) {
  return axios.get(`https://api.github.com/users/${username}/repos${params}&per_page=100`);
}

function getStarCount(repos) {
  return repos.data.reduce((sum, repo) => {
    return sum + repo.stargazers_count;
  }, 0);
}

function calculateScore(profile, repos) {
  const followers = profile.followers;
  const totalStars = getStarCount(repos);
  return (followers * 3) + totalStars;
}

function handleError(error) {
  console.warn(error);
  return null;
}

function getUserData(player) {
  return axios.all([
    getProfile(player),
    getRepos(player),
  ]).then(function(data) {
    let profile = data[0];
    let repos = data[1];
    return {
      profile,
      score: calculateScore(profile, repos),
    };
  });
}

function sortPlayers(players) {
  return players.sort(function(a, b) {
    return b.score - a.score;
  });
}

module.exports = {
  battle(players) {
    return Promise.all(players.map(getUserData))
      .then(sortPlayers)
      .catch(handleError);
  },
  fetchPopularRepos(language) {
    const uri = `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`;
    const encodedURI = window.encodeURI(uri);

    return axios.get(encodedURI)
      .then((response) => response.data.items);
  },
  fetchUser(username) {
    // TODO: Get an actual URI after watching Tyler's vid
    const uri = `https://api.github.com/search/users?q=${username}+repos:>42+followers:>1000`;
    const encodedURI = window.encodeURI(uri);

    return axios.get(encodedURI)
      .then((response) => response.data.items);
  },
};
