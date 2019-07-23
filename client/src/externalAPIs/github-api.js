import axios from "axios";

// Documentation is at https://developer.github.com/v3/
const BASE_URL = "https://api.github.com";

export { getRepos, getUserData };

// TODO: the max per page is 100. Find a way to fetch all repos.
function getRepos(username) {
  const url = `${BASE_URL}/users/${username}/repos?per_page=250`;
  return axios.get(url).then(response => response.data);
}

function getUserData(username) {
  return axios
    .all([
      axios.get(`${BASE_URL}/users/${username}`),
      axios.get(`${BASE_URL}/users/${username}/orgs`)
    ])
    .then(([user, orgs]) => ({
      user: user.data,
      orgs: orgs.data
    }));
}
