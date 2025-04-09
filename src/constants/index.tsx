import { ExploreType, RepoType } from "@/types";
import { StepProps } from "antd";

const explore_items: ExploreType[] = [
  {
    id: 1,
    title: "YousefIbrahimismail / Project-README-Template",
    avatar: undefined,
    description:
      "A fully customizable and presentable README.md template to jump start your projects.",
    star_count: 10,
  },
  {
    id: 2,
    title: "langchain-ai / langchain-experimental",
    avatar: undefined,
    description: "",
    star_count: 53,
    language: "python",
  },
  {
    id: 3,
    title: "langchain-ai / langchain-weaviate",
    avatar: undefined,
    description: "",
    star_count: 45,
    language: "python",
  },
];

const latest_changes: StepProps[] = [
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

const all_repos: RepoType[] = [
  {
    id: 1,
    username: "readytowork-org",
    repoName: "proj-xxxx-api",
  },
  {
    id: 2,
    username: "readytowork-org",
    repoName: "proj-xxxx2-api",
  },
  {
    id: 3,
    username: "readytowork-org",
    repoName: "proj-xxxx2-api",
  },
  {
    id: 4,
    username: "readytowork-org",
    repoName: "proj-xxxx2-api",
  },
  {
    id: 5,
    username: "readytowork-org",
    repoName: "proj-xxxx2-api",
  },
  {
    id: 6,
    username: "readytowork-org",
    repoName: "proj-xxxx2-api",
  },
  {
    id: 7,
    username: "readytowork-org",
    repoName: "proj-xxxx2-api",
  },
  {
    id: 8,
    username: "readytowork-org",
    repoName: "proj-xxxx2-api",
  },
];
const teams: RepoType[] = [
  {
    id: 1,
    username: "readytowork-org",
    repoName: "backend-devs",
  },
  {
    id: 2,
    username: "readytowork-org",
    repoName: "developers",
  },
];

export { explore_items, latest_changes, all_repos, teams };
