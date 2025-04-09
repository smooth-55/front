import { latest_changes } from "@/constants";
import { StepProps, Steps } from "antd";

const LatestChange = () => {
  return (
    <div className="flex items-center gap-2">
      <Steps progressDot direction="vertical" items={latest_changes} />
    </div>
  );
};
export { LatestChange };
