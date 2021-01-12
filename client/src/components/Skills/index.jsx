import _ from "lodash";
import Card from "../Card";
import { profile } from "../../constants/profile.json";
import { SKILLS } from "../../constants/definitions";

export default function Skills() {
  const { skills } = profile;

  const primarySkills = _.keys(skills);
  return (
    <Card title="skills" orientation="right">
      <div className="flex flex-wrap sm:-mx-1 md:-mx-1 lg:-mx-3 ">
        {_.map(primarySkills, (skill, index) => {
          const score = (skills[skill] / 5) * 100;
          return (
            <div
              className="w-full sm:my-1 sm:px-1 sm:w-full md:my-1 md:px-1 md:w-full lg:my-3 lg:px-3 lg:w-1/3 flex items-center"
              key={index}
            >
              <img
                className="h-12 w-10 m-0"
                src={SKILLS[skill]?.icon}
                alt={SKILLS[skill]?.label}
              />
              <div className="relative w-full ml-5">
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
                  <div
                    style={{ width: `${score}%` }}
                    className="shadow-none flex flex-col rounded text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-pink-500 to-rose-500"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
