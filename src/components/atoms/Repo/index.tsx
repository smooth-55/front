import Image from "next/image";

const Repo = () => {
  return (
    <div className="repo_item flex  flex-row gap-2 items-center max-w-[300px]">
      <Image
        src="/assets/avatar.png"
        alt="repo"
        width={20}
        height={20}
        className="rounded-full"
      />
      <p className="repo__name">{"readytowork-org/proj-xxxx-api"}</p>
    </div>
  );
};
export { Repo };
