import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import RepositoryList from "../components/RepositoryList";
import { FaRedo, FaPlus } from "react-icons/fa"; // Corrected icons
import "./RepositoriesPage.css";

const RepositoriesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  const repositories = [
    {
      name: "design-system ",
      visibility: "Private",
      language: "JavaScript",
      memory: "2048 KB",
      lastUpdated: "Updated 2 days ago",
    },
    {
      name: "codeant-ci-app ",
      visibility: "Public",
      language: "Python",
      memory: "3096 KB",
      lastUpdated: "Updated 5 days ago",
    },
    {
      name: "analytics-dashboard ",
      visibility: "Public",
      language: "Java",
      memory: "306 KB",
      lastUpdated: "Updated 3 days ago",
    },
    {
      name: "mobile-app ",
      visibility: "Public",
      language: "HTML/CSS",
      memory: "5058 KB",
      lastUpdated: "Updated 1 day ago",
    },
    {
      name: "e-commerce-platform ",
      visibility: "Public",
      language: "Swift",
      memory: "1876 KB",
      lastUpdated: "Updated 3 days ago",
    },
  ];

  const filteredRepositories = repositories.filter((repo) =>
    repo.name.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="repositories-page">
      <Sidebar />
      <div className="dashboard">
        <div className="dashboard-header">
          <h1>Repositories</h1>
          <div className="actions">
            <button className="refresh-button">
              <FaRedo className="refresh-icon" /> Refresh All
            </button>
            <button className="add-button">
              <FaPlus className="plus-icon" /> Add Repository
            </button>
          </div>
        </div>
        <h2 className="repository-count">33 total repositories</h2>
        <SearchBar onSearch={handleSearch} />
        <RepositoryList repositories={filteredRepositories} />
      </div>
    </div>
  );
};

export default RepositoriesPage;
