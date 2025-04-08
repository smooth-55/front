import { StepProps, Steps } from "antd";

const LatestChange = () => {
  const changes: StepProps[] = [
    {
      description: "Yesterday",
      title: "Changes to the repository object in push webhook",
      status: "wait",
    },
    {
      description: "4 days ago",
      title: "Copilot code review now generally available",
      status: "wait",
    },
    {
      description: "4 days ago",
      title: "Changes to the repository object in push webhook",
      status: "wait",
    },
    {
      description: "4 days ago",
      title: "Changes to the repository object in push webhook",
      status: "wait",
    },
  ];
  return (
    <div className="flex items-center gap-2">
      <Steps progressDot direction="vertical" items={changes} />
    </div>
  );
};
export { LatestChange };
