import _ from "lodash";
import Card from "../Card";
import { profile } from "../../constants/profile.json";

export default function Projects() {
  const { projects } = profile;

  return (
    <Card title="projects" orientation="right">
      <div className="flex flex-col sm:-mx-1 md:-mx-1 lg:-mx-3 ">
        {_.map(projects, (project, index) => {
          return (
            <div
              className={`w-full flex items-center ${
                index !== projects.length - 1 && "border-b mb-4"
              }`}
              key={project.id}
            >
              <div className="relative w-full">
                <div className="mb-4 text-xs flex flex-col rounded items-start justify-between lg:flex-row">
                  <div className="shadow-none flex flex-col rounded whitespace-nowrap justify-center w-full lg:w-1/2">
                    <p className="text-2xl font-bold">{project.client}</p>
                    <p className="text-xl font-semibold">{project.role}</p>
                    <p className="text-xl font-normal">{project.duration}</p>
                    <p className="text-xl font-normal">{project.location}</p>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <p className="text-xl font-normal italic lg:not-italic">
                      {project.project}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
