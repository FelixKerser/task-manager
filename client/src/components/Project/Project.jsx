import { useRef } from "react";

export default function Project({ saveProject, createProject, project }) {
    let title = useRef();
    let description = useRef();
    let date = useRef();

    let form = useRef();

    function saving(event) {
        event.preventDefault;
        saveProject(title.current.value, description.current.value, date.current.value);
        form.current.reset();
    }

    return (
        <section>
            <div className="project">
                {!project && (
                    <div className="projectNone">
                        <h1>No Project selected</h1>
                        <button onClick={createProject}>Create new project</button>
                    </div>
                )}

                {project && project !== "creating" ? (
                    <>
                        <h1>{project.title}</h1>
                        <p>{project.description}</p>
                        <p>due {project.date}</p>
                    </>
                ) : undefined}

                {project === "creating" && (
                    <form ref={form} method="dialog" onSubmit={saving}>
                        <input ref={title} type="text" name="title" />
                        <textarea ref={description} type="text" name="description" />
                        <input ref={date} type="date" name="date" />
                        <input type="submit" value="Create" />
                    </form>
                )}
            </div>
        </section>
    )
}