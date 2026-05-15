import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 hover:border-indigo-100 transition-all duration-300 group hover:-translate-y-1">
      <div
        className="h-44 sm:h-52 relative"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
          <Link
            href={gitUrl}
            className="h-11 w-11 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border border-white/40 hover:bg-white/40 transition-colors"
          >
            <CodeBracketIcon className="h-5 w-5 text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="h-11 w-11 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border border-white/40 hover:bg-white/40 transition-colors"
          >
            <EyeIcon className="h-5 w-5 text-white" />
          </Link>
        </div>
      </div>
      <div className="p-5">
        <h5 className="text-slate-900 font-bold text-base mb-1">{title}</h5>
        {description && (
          <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
