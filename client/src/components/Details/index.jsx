import _ from "lodash";
import Card from "../Card";
import { profile } from "../../constants/profile.json";

export default function Details() {
  const { details } = profile;

  return (
    <Card title="Education" orientation="right">
      <div className="flex flex-col sm:-mx-1 md:-mx-1 lg:-mx-3 ">
        {_.map(details.education, (educationItem, index) => {
          return (
            <div
              className="mb-4 text-xs flex flex-col rounded items-start justify-between lg:flex-row"
              key={index}
            >
              <div className="shadow-none flex flex-col rounded whitespace-nowrap justify-center w-full lg:w-1/2">
                <p className="text-2xl font-bold">{educationItem.degree}</p>
                <p className="text-xl font-semibold">{educationItem.school}</p>
                <p className="text-xl font-normal">{educationItem.duration}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
