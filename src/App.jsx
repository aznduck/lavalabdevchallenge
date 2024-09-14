import { useState } from "react";
import aroLogo from "./assets/arologotext.svg";
import allProjects from "./assets/allprojects.png"; // Default icon
import allProjectsPurple from "./assets/allprojects-purple.png"; // Purple version
import yourProjects from "./assets/yourprojects.png";
import yourProjectsPurple from "./assets/yourprojects-purple.png";
import sharedWithYou from "./assets/sharedwithyou.png";
import sharedWithYouPurple from "./assets/sharedwithyou-purple.png";
import archived from "./assets/archived.png";
import archivedPurple from "./assets/archived-purple.png";
import trash from "./assets/trash.png";
import trashPurple from "./assets/trash-purple.png";
import profilePic from "./assets/profilepic.png";
import magnifyingGlass from "./assets/magnify.png";
import gridView from "./assets/grid.png";
import listView from "./assets/list.png";
import documentPic from "./assets/document.png";
import Document from "./Document";
import "./App.css";

function App() {
  const [selected, setSelected] = useState(0); // state to track the selected sidebar item
  const [viewMode, setViewMode] = useState("grid"); //state to track view mode for documents

  const sidebarItems = [
    {
      name: "All Projects",
      icon: allProjects,
      iconSelected: allProjectsPurple,
    },
    {
      name: "Your Projects",
      icon: yourProjects,
      iconSelected: yourProjectsPurple,
    },
    {
      name: "Shared with You",
      icon: sharedWithYou,
      iconSelected: sharedWithYouPurple,
    },
    { name: "Archived", icon: archived, iconSelected: archivedPurple },
    { name: "Trash", icon: trash, iconSelected: trashPurple },
  ];

  const documents = {
    0: [
      // All Projects
      { image: documentPic, name: "Assignment 1", creationTime: "1m ago" },
      { image: documentPic, name: "Lab 3", creationTime: "40m ago" },
      { image: documentPic, name: "Workbook Ch. 3", creationTime: "2 hrs ago" },
      { image: documentPic, name: "Worksheet 2", creationTime: "Apr 25, 2024" },
      { image: documentPic, name: "Resume", creationTime: "March 27, 2023" },
      {
        image: documentPic,
        name: "Assignment 3",
        creationTime: "Feb 20, 2023",
      },
    ],
    1: [
      // Your Projects
      { image: documentPic, name: "Assignment 1", creationTime: "1m ago" },
      { image: documentPic, name: "Worksheet 2", creationTime: "Apr 25, 2024" },
      { image: documentPic, name: "Resume", creationTime: "March 27, 2023" },
    ],
    2: [
      // Shared with You
      { image: documentPic, name: "Lab 3", creationTime: "40m ago" },
      { image: documentPic, name: "Workbook Ch. 3", creationTime: "2 hrs ago" },
    ],
    3: [
      // Archived
      {
        image: documentPic,
        name: "Assignment 3",
        creationTime: "Feb 20, 2023",
      },
    ],
    4: [
      // Trash
    ],
  };

  return (
    <div className="app-container">
      <div className="left-panel">
        <button className="aro-logo" onClick={() => setSelected(0)}>
          <img src={aroLogo} alt="Aro Logo" />
        </button>

        {/* Sidebar buttons */}
        <div className="sidebar">
          {sidebarItems.map((item, index) => (
            <button
              key={index}
              className={`sidebar-item ${selected === index ? "selected" : ""}`}
              onClick={() => setSelected(index)}
            >
              {/* Show the purple icon if selected, otherwise show the default icon */}
              <img
                src={selected === index ? item.iconSelected : item.icon}
                alt={item.name}
                className="icon"
              />
              {item.name}
            </button>
          ))}
        </div>

        <button className="new-button">+ New</button>
      </div>
      <div className="right-panel">
        <div className="search-panel">
          <div className="search-bar">
            <span className="search-icon">
              <img src={magnifyingGlass} alt="magnifying glass"></img>
            </span>
            <input type="text" placeholder="Search in Aro" />
          </div>

          <div className="profile-box">
            <img src={profilePic} alt="Profile" className="profile-pic" />
            <div className="profile-info">
              <p className="profile-name">Cole Gawin</p>
              <p className="profile-email">colegawin@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="horizontal-divider"></div>
        <div className="projects-panel">
          <div className="projects-header">
            <h1 className="projects-title">{sidebarItems[selected].name}</h1>
            <div className="projects-buttons">
              <button
                className={`btn-grid ${viewMode === "grid" ? "selected" : ""}`}
                onClick={() => setViewMode("grid")}
              >
                <img src={gridView} alt="grid view" />
              </button>
              <button
                className={`btn-list ${viewMode === "list" ? "selected" : ""}`}
                onClick={() => setViewMode("list")}
              >
                <img src={listView} alt="list view" />
              </button>
            </div>
          </div>
          <div className={`projects-content ${viewMode}`}>
            {documents[selected]?.map((doc, index) => (
              <Document
                key={index}
                image={doc.image}
                name={doc.name}
                creationTime={doc.creationTime}
                viewMode={viewMode}
              />
            ))}
          </div>
        </div>
      </div>
    </div> /*app-container */
  );
}

export default App;
