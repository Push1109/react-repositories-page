import React from "react";
import "./RepositoryList.css";
import { FaCoins } from "react-icons/fa";
const RepositoryList = ({ repositories }) => {
  return (
    <div className="repository-list">
      {repositories.map((repo, index) => (
        <div key={index} className="repository-card">
          <div className="repository-header">
            <h3 className="repo-name">{repo.name}</h3>
            <span className={`repo-visibility ${repo.visibility.toLowerCase()}`}>
              {repo.visibility}
            </span>
          </div>
          <div className="repository-details">
            <span className="repo-language">{repo.language}</span>
            <span className="repo-memory">
              <FaCoins className="coins-icon"/>
              {repo.memory}
            </span>
            <span className="repo-updated">{repo.lastUpdated}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RepositoryList;
