import Card from "../Card";
import { profile } from "../../constants/profile.json";

export default function Intro() {
  const {
    intro: { summary },
  } = profile;
  return (
    <Card title="summary">
      <div className="text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
        <p className="text-justify font-semibold">{summary}</p>
      </div>
    </Card>
  );
}
