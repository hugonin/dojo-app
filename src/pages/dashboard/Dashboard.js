import { useState } from "react";
import { useCollection } from "../../hooks/useCollection";
import { useAuthContext } from "../../hooks/useAuthContext";
import ProjectList from "../../components/projectList/ProjectList";
import ProjectFilter from "./ProjectFilter";

import "./Dashboard.css";

function Dashboard() {
  const { user } = useAuthContext();
  const { documents, error } = useCollection("projects");
  const [filter, setFilter] = useState("all");

  const changeFilter = (newFilter) => {
    setFilter(newFilter);
  };

  const projects = documents
    ? documents.filter((document) => {
        switch (filter) {
          case "all":
            return true;
          case "mine":
            let assignedToMe = false;
            document.assignedUsersList.forEach((u) => {
              if (u.id === user.uid) {
                assignedToMe = true;
              }
            });
            return assignedToMe;
          case "development":
          case "design":
          case "sales":
          case "marketing":
            console.log(document.category, filter);
            return document.category === filter;
          default:
            return true;
        }
      })
    : null;

  return (
    <div>
      <h2 className="page-title">Dashboard</h2>
      {error && <p className="error">{error}</p>}
      {documents && <ProjectFilter changeFilter={changeFilter} />}
      {documents && <ProjectList projects={projects} />}
    </div>
  );
}

export default Dashboard;
