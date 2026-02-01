import React from "react";
import MacWin from "./MacWin";
import githubData from "../../assets/github.json";

const GitCard = ({ data }) => {
  return (
    <div className="flex flex-col bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all group shadow-lg">
      <div className="aspect-video overflow-hidden">
        <img 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
          src={data.image} 
          alt={data.title} 
        />
      </div>
      <div className="p-4 flex flex-col flex-1 gap-3">
        <div>
          <h3 className="font-bold text-lg text-white/90">{data.title}</h3>
          <p className="text-xs text-white/50 line-clamp-2 mt-1">{data.description}</p>
        </div>

        <div className="flex flex-wrap gap-1.5 mt-auto">
          {data.tags.map((tag, index) => (
            <span 
              className="text-[10px] bg-white/5 border border-white/10 rounded-full px-2 py-0.5 text-white/70" 
              key={index}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4 pt-2 border-t border-white/5">
          <a 
            href={data.repoLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
          >
            Repository
          </a>
          <a 
            href={data.demoLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

const Github = ({ setWindowState }) => {
  return (
    <MacWin setWindowState={setWindowState} windowKey="github" title="GitHub Projects">
      <div className="h-full overflow-y-auto scrollbar-hidden p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-12">
          {githubData.map((project) => (
            <GitCard key={project.id} data={project} />
          ))}
        </div>
      </div>
    </MacWin>
  );
};

export default Github;

