import axios from 'axios';
const id = 'YOUR_CLIENT_ID';
const secret = 'YOUR_SECRET_ID';
let params = `?client_id=${id}&client_secret=${secret}`;
params = '?';

function getProfile(username) {
  return axios.get(`https://api.github.com/users/${username}${params}`)
    .then(({data}) => data);
}

function getRepos(username) {
  return axios.get(`https://api.github.com/users/${username}/repos${params}&per_page=100`);
}

function getStarCount(repos) {
  return repos.data.reduce((sum, repo) => sum + repo.stargazers_count, 0);
}

function calculateScore({followers}, repos) {
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
  ]).then(([profile, repos]) =>
    ({profile, score: calculateScore(profile, repos)})
  );
}

function sortPlayers(players) {
  return players.sort((a, b) => b.score - a.score);
}

export function fetchUser(username) {
  const uri = `https://api.github.com/search/users?q=${username}+repos:>42+followers:>1000`;
  const encodedURI = window.encodeURI(uri);

  return axios.get(encodedURI)
    .then((response) => response.data.items);
}

export function fetchPopularRepos(language) {
  const uri = `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`;
  const encodedURI = window.encodeURI(uri);

  return axios.get(encodedURI)
    .then((response) => response.data.items);
}

export function battle(players) {
  return Promise.all(players.map(getUserData))
    .then(sortPlayers)
    .catch(handleError);
}
