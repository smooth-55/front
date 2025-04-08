import Image from "next/image";
import { ButtonTag } from "../ButtonTag";

const News = () => {
  return (
    <section className="flex flex-col border border-gray-300 rounded-lg p-2 gap-2 px-5">
      <div className="avatar flex flex-row  gap-2 items-center">
        <Image
          src="/assets/avatar.png"
          alt="avatar"
          width={30}
          height={30}
          className="rounded-full"
        />
        <div className="content">
          <div className="flex items-center gap-1">
            <p className="font-bold text-[12px] text-center">{"user123"}</p>
            <p className="text-gray-500 text-[12px]">{"contributed to"}</p>
            <p className="font-bold text-[12px] text-center">
              {"readytowork-org/rentalbus-ai-backend"}
            </p>
          </div>
          <div className="update_time">
            <p className="text-[12px]">2 days ago</p>
          </div>
        </div>
      </div>
      <div className="content">
        <p>
          {"RAI-107 | Accept multiple pickup location for price estimation #82"}
        </p>
      </div>
      <div className="content_status flex items-center gap-2 text-sm">
        <ButtonTag />
        <p>{"bhattaraibishal50 merged 47 commits"}</p>
      </div>
      <div className="pr__link p-4 bg-[#f5f8fb] rounded-sm">
        <span className="text-sm text-blue-500">
          {"https://readytowork.atlassian.net/browse/RAI-107"}
        </span>
      </div>
    </section>
  );
};
export { News };
