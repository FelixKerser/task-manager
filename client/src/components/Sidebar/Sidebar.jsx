
export default function Sidebar({ projectsList, setProjectsList, createProject, selectProject }) {

    return (
        <nav>
            <ul className="list">
                <a onClick={createProject} className="show">Create a project +</a>
                {projectsList.map((project) => (
                    <li onClick={() => { selectProject(project.title, project.description, project.date) }} key={project.id}>{project.title}</li>
                ))}
            </ul>
        </nav>
    )
}