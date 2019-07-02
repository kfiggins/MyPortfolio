import React, { useState } from "react";
import styled from "styled-components";

import TextField from "../shared/TextField";
import Button from "../shared/Button";

import { getRepos, getUserData } from "../../externalAPIs/github-api";
import { toast } from "react-toastify";

const Wrapper = styled.div`
  text-align: center;
  margin: 0 auto;
  width: 50%;
`;

export default function GitHubRepoApp() {
  const [gitHubUserName, setGitHubUserName] = useState("");
  const [gitHubUserData, setGitHubUserData] = useState({});
  const [gitHubUserRepos, setGitHubUserRepos] = useState({});
  const [errors, setErrors] = useState([]);

  const handleGitHubSearch = () => {
    getRepos(gitHubUserName)
      .then(response => setGitHubUserRepos(response))
      .catch(error => toast.error(`${gitHubUserName} username not found on GitHub`));
    getUserData(gitHubUserName).then(data => setGitHubUserData(data));
  };

  return (
    <Wrapper>
      <h1>GitHub Repos App</h1>
      <TextField
        name="gitHubUserNamename"
        label="GitHub Username"
        onChange={e => setGitHubUserName(e.target.value)}
        value={gitHubUserName}
      />
      <Button success onClick={handleGitHubSearch}>
        Search
      </Button>
      <br />
      <br />
      {gitHubUserRepos.length > 0 && gitHubUserRepos.map(repo => <div>{repo.name}</div>)}
      <br />
      <br />
      <br />
      {/* Log for dev */}
      {gitHubUserData.user && (
        <React.Fragment>
          <h2>User Data LOG</h2>
          {JSON.stringify(gitHubUserData.user, null, 2)}
          {/* {gitHubUserRepos.map(repo => (
            <div>{JSON.stringify(repo, null, 2)}</div>
          ))} */}
        </React.Fragment>
      )}
      {gitHubUserRepos.length > 0 && (
        <React.Fragment>
          <h2>Repo LOG</h2>
          {gitHubUserRepos.map(repo => (
            <div>{JSON.stringify(repo, null, 2)}</div>
          ))}
        </React.Fragment>
      )}
    </Wrapper>
  );
}
