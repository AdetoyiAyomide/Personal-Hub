import React, { useState } from 'react'
import { codingLinks, projects as initialProjects} from '../../data/data'

const Coding = () => {
  const [projects, setProjects] = useState(initialProjects);

  const updateProject = (id) => {
  setProjects(prev =>
    prev.map(p =>
      p.id === id
        ? {
            ...p,
            tasksCompleted: p.tasksCompleted + 1,
            progress: Math.round(
              ((p.tasksCompleted + 1) / p.tasksTotal) * 100
            )
          }
        : p
    )
  );
};

  const getStatusColor = (status) => {
  switch (status.toLowerCase()) {
    case "planning":
      return "bg-orange-500";
    case "in progress":
      return "bg-green-500";
    case "completed":
      return "bg-emerald-600";
    case "paused":
      return "bg-red-500";
    default:
      return "bg-gray-500";
  }
};

  return (
    <div className='flex flex-col gap-10'>
      {/* PROJECT TRACKER */}
<div className="mt-10">
  <h1 className="text-white text-2xl font-bold mb-4">
    Project Tracker
  </h1>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {projects.map((project) => (
      <div
        key={project.id}
        className="bg-[#111827] p-4 rounded-2xl shadow"
      >
        <h2 className="text-white font-semibold text-lg">
          {project.name}
        </h2>

        {/* Progress bar */}
        <div className="w-full bg-gray-700 h-2 rounded mt-3">
          <div
            className={`h-2 rounded ${getStatusColor(project.status)}`}
            style={{ width: `${project.progress}%` }}
          ></div>
        </div>

        <p className="text-sm text-gray-400 mt-2">
          {project.progress}% complete
        </p>

        <p className="text-xs text-slate-400">
          Tasks: {project.tasksCompleted} / {project.tasksTotal}
        </p>

        <span
        className={`text-xs mt-2 inline-block px-2 py-1 rounded ${getStatusColor(project.status)}`}>
        {project.status}
      </span>
      <button
  onClick={() => updateProject(project.id)}
  className="mt-3 ml-3 bg-green-600 text-white px-3 py-1 rounded text-xs"
>
  + Complete Task
</button>
      </div>
    ))}
  </div>
</div>
    <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 items-stretch'>
      {codingLinks.map((link) => (
  <div
    key={link.id}
    onClick={() => window.open(link.link, "_blank")}
    className="
      flex flex-row md:flex-col
      rounded-2xl shadow h-full md:min-h-65
      overflow-hidden cursor-pointer
      hover:scale-[1.02] transition
    "
  >
    {/* IMAGE */}
    <img
      src={link.thumbnail}
      className="
        w-40 shrink-0 h-32 object-cover
        md:w-full md:h-47
      "
    />

    {/* CONTENT */}
    <div className="h-full w-full min-w-0 p-2 md:rounded-b-2xl bg-gray-900 flex flex-col md:block">
      <h2 className="text-white font-semibold text-lg md:text-xl">
        {link.title}
      </h2>

      <p className="text-xs text-slate-300 truncate md:whitespace-normal">
        {link.subtitle}
      </p>
    </div>
  </div>
))}
    </div>
    </div>
  )
}

export default Coding
