import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "bg-white text-black border-white"
    : "text-gray-300 border-white/20 hover:border-white/50 hover:text-white bg-transparent";
  return (
    <button
      className={`${buttonStyles} rounded-full border px-4 sm:px-5 py-1.5 sm:py-2 text-sm font-medium cursor-pointer transition-all duration-200`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
