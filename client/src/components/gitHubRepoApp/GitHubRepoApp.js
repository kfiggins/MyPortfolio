import React, { useState } from "react";
import styled from "styled-components";

import TextField from "../shared/TextField";
import Button from "../shared/Button";

import { getRepos, getUserData } from "../../externalAPIs/github-api";
import { toast } from "react-toastify";

import { distanceInWordsToNow } from "date-fns";

const Wrapper = styled.div`
  text-align: center;
  margin: 0 auto;
  width: 75%;
`;

const UsernameInput = styled(TextField)`
  width: 30%;
`;

const UserWrapper = styled.div`
  display: flex;
`;

const UserDetails = styled.div`
  /* border: black 1px solid;
  border-radius: 10px; */
  padding: 20px;
  box-sizing: border-box;
  min-width: 30%;
`;

const RepoDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const RepoItem = styled.div`
  padding: 10px;
  border: black solid 1px;
  margin: 4px;
  border-radius: 15px;
  height: 4em;
  display: flex;
  align-items: center;
  position: relative;
`;

const Stars = styled.span`
  top: 5px;
  left: 5px;
  font-weight: bold;
  position: absolute;
`;

const UserImage = styled.img`
  width: 100px;
  border-radius: 100px;
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
  const user = gitHubUserData.user;
  return (
    <Wrapper>
      <h1>GitHub Repos App</h1>
      <UsernameInput
        name="gitHubUserNamename"
        label="GitHub Username"
        onChange={e => setGitHubUserName(e.target.value)}
        value={gitHubUserName}
      />
      <br />
      <Button success onClick={handleGitHubSearch}>
        Search
      </Button>
      <br />
      <br />
      {user && (
        <UserWrapper>
          <UserDetails>
            <UserImage src={user.avatar_url} alt="" />
            <h3>
              {user.name} <em>({user.login})</em>
            </h3>
            <p>{user.bio}</p>
            <p>
              <b>{user.public_repos}</b> public repos
            </p>
            <p>
              Joined GitHub <b>{distanceInWordsToNow(user.created_at, { addSuffix: true })}</b>
            </p>
          </UserDetails>
          <RepoDetails>
            {gitHubUserRepos.length > 0 &&
              gitHubUserRepos.map(repo => (
                <RepoItem>
                  {repo.stargazers_count > 0 && <Stars>{repo.stargazers_count} ⭐</Stars>}
                  {repo.name}&nbsp;<b>{repo.language}</b>
                </RepoItem>
              ))}
          </RepoDetails>
        </UserWrapper>
      )}
      <br />
      <br />

      <br />
      <br />
      <br />
      {/* Log for dev */}
      {gitHubUserData.user && (
        <React.Fragment>
          <h2>User Data LOG</h2>
          {JSON.stringify(gitHubUserData.user, null, 2)}
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
