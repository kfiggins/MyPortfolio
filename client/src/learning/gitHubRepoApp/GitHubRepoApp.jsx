import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { distanceInWordsToNow } from "date-fns";
import { toast } from "react-toastify";

import { getRepos, getUserData } from "../../externalAPIs/github-api";

import Button from "../shared/Button";
import TextField from "../shared/TextField";
import { sharedColors } from "../../style/variables";

const Wrapper = styled.div`
  text-align: center;
  margin: 0 auto;
  width: 80%;
`;

const UsernameInput = styled(TextField)`
  width: 30%;
`;

const UserWrapper = styled.div`
  display: flex;
`;

const UserDetails = styled.div`
  padding: 20px;
  box-sizing: border-box;
  min-width: 40%;
  text-align: left;
`;

const RepoDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;
  height: calc(100vh - 280px);
`;

const RepoItem = styled.a`
  padding: 10px;
  border: #e8f0fe solid 1px;
  margin: 4px;
  border-radius: 15px;
  height: 4em;
  display: flex;
  align-items: center;
  position: relative;
  min-width: 6em;
  text-decoration: none;
  color: ${sharedColors.primary} !important;

  &:hover {
    background-color: ${sharedColors.secondary};
    color: white !important;
    cursor: pointer;
  }
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
  const [gitHubUserRepos, setGitHubUserRepos] = useState([]);
  const [gitHubCustomStats, setGetHubCustomStats] = useState({});

  const handleGitHubSearch = () => {
    getRepos(gitHubUserName)
      .then((response) => setGitHubUserRepos(response))
      .catch((error) =>
        toast.error(`${gitHubUserName} username not found on GitHub`)
      );
    getUserData(gitHubUserName).then((data) => setGitHubUserData(data));
  };

  useEffect(() => {
    const totalStars = gitHubUserRepos.reduce((acc, curr) => {
      return acc + curr.stargazers_count;
    }, 0);

    setGetHubCustomStats({ TotalStars: totalStars });
  }, [gitHubUserRepos]);

  const user = gitHubUserData.user;
  return (
    <Wrapper>
      <h1>GitHub Repos App</h1>
      <UsernameInput
        name="gitHubUserNamename"
        label="GitHub Username"
        onChange={(e) => setGitHubUserName(e.target.value)}
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
              <b>{user.public_repos}</b> Public Repos
            </p>
            <p>
              Joined GitHub{" "}
              <b>
                {distanceInWordsToNow(user.created_at, { addSuffix: true })}
              </b>
            </p>
            <p>
              <b>{gitHubCustomStats.TotalStars.toLocaleString()}</b> Total Stars
            </p>
          </UserDetails>
          <RepoDetails>
            {gitHubUserRepos.length > 0 &&
              gitHubUserRepos
                .sort((a, b) => b.stargazers_count - a.stargazers_count)
                .map((repo) => (
                  <RepoItem href={repo.html_url} target="_blank">
                    {repo.stargazers_count > 0 && (
                      <Stars>
                        {repo.stargazers_count.toLocaleString()}{" "}
                        <span role="img" aria-label="star">
                          ⭐
                        </span>
                      </Stars>
                    )}
                    {repo.name}&nbsp;
                    <span>{repo.language && <em>({repo.language})</em>}</span>
                  </RepoItem>
                ))}
          </RepoDetails>
        </UserWrapper>
      )}
      {/* Log for dev */}
      {/* {gitHubUserData.user && (
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
      )}{" "} */}
    </Wrapper>
  );
}
