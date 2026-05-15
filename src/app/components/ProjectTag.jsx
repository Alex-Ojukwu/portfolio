import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "bg-indigo-600 text-white border-indigo-600 shadow-sm shadow-indigo-200"
    : "text-slate-600 border-slate-300 hover:border-indigo-400 hover:text-indigo-600 bg-white";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-4 sm:px-5 py-1.5 sm:py-2 text-sm font-medium cursor-pointer transition-all duration-200`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
