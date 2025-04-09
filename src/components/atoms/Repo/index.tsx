import { RepoType } from "@/types";
import Image from "next/image";

type iPropType = {
  item: RepoType;
};
const Repo = ({ item }: iPropType) => {
  return (
    <div className="repo_item flex  flex-row gap-2 items-center max-w-[300px]">
      <Image
        src="/assets/avatar.png"
        alt="repo"
        width={20}
        height={20}
        className="rounded-full"
      />
      <p className="repo__name">{`${item.username}/${item.repoName}`}</p>
    </div>
  );
};
export { Repo };
