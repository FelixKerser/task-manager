import { useState } from 'react';
import Project from './components/Project/Project';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  const [selectedProject, setSelectedProject] = useState();

  const [projectsList, setProjectsList] = useState([]);
  // useEffect(() => {
  //   const fetchProjects = async () => {
  //     fetch('http://localhost:3000/projects')
  //       .then(response => response.json())
  //       .then(data => {
  //         if (data.projects) {
  //           setProjectsList(data.projects);
  //         }
  //       })
  //       .catch(error => {
  //         console.log(error);
  //       });
  //   }
  //   fetchProjects();
  // }, [])

  // console.table(projectsList);

  function selectProject(title, description, date) {
    setSelectedProject({
      title: title,
      description: description,
      date: date
    });
  }

  function createProject() {
    setSelectedProject('creating')
  }

  function saveProject(title, description, date) {
    setProjectsList((projects) => {
      return [...projects, { title: title, description: description, date: date }];
    })
  }

  console.log(projectsList);
  return (
    <main>
      <Sidebar projectsList={projectsList} setProjectsList={setProjectsList} createProject={createProject} selectProject={selectProject} />

      <Project saveProject={saveProject} createProject={createProject} project={selectedProject} />
    </main>
  );
}

export default App;
