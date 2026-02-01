import React from "react";
import MacWin from "./MacWin";
import githubData from "../../assets/github.json";

const GitCard = ({
  data = {
    id: 1,
    image: "",
    title: "",
    description: "",
    tags: [],
    repoLink: "",
    demoLink: "",
  },
}) => {
  return (
    <div className="flex flex-col flex-wrap gap-2 max-w-xs px-3 py-3 bg-white/15 rounded-2xl m-1" >
      <img className="w-full rounded-xl" src={data.image} alt={data.title} />
      <h1 className="font-bold text-xl">{data.title}</h1>
      <p>{data.description}</p>

      <div className="flex flex-wrap gap-2 ">
        {data.tags.map((tag, index) => (
          <p className="bg-black/40 rounded-xl px-3 py-2 whitespace-nowrap " key={index}>{tag}</p>
        ))}
      </div>

      <div className="flex justify-between px-5">
        <a href={data.repoLink}>Repository</a>
        <a href={data.demoLink}>Demo link</a>
      </div>
    </div>
  );
};

const Github = ({ setWindowState }) => {
  return (
    <MacWin setWindowState={setWindowState} windowKey="github" title="GitHub Projects">
      <div className="flex flex-wrap h-full overflow-scroll scrollbar-hidden pb-10 gap-3 px-2">
        {githubData.map((project) => (
          <GitCard key={project.id} data={project} />
        ))}
      </div>
    </MacWin>
  );
};

export default Github;
