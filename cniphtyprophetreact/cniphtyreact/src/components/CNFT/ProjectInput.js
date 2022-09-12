import cnftArray from "../CNFTProjectData"
import React from "react";

function ProjectInput() {

    const projectList = [];

    for (let x of cnftArray) {
        projectList.push(<option key={x.id} value={x.project}>{x.project}</option>)
    }

    return (
        <div>
            <label for='project-list'>Projects</label>
            <select id='project-list'>
                {projectList}
            </select>
        </div>
    )
}

export default ProjectInput