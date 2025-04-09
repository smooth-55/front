import { ExploreType } from "@/types";
import { StarOutlined } from "@ant-design/icons";
import Image from "next/image";

type propType = {
  item: ExploreType;
};
const ExploreRepo = ({ item }: propType) => {
  return (
    <section className="flex flex-col gap-1">
      <div className="info_section flex items-center justify-between">
        <div className="info flex items-center gap-1 break-words w-[250px]">
          <Image
            src="/assets/avatar.png"
            alt="avatar"
            width={25}
            height={25}
            className="rounded-full"
          />
          <span className="break-words w-full text-[14px] font-semibold">
            {item.title}
          </span>
        </div>
        <div className="star">
          <StarOutlined />
        </div>
      </div>
      <p className="text-[0.75rem] mb-2">{item.description}</p>
      <div className="bottom_section flex gap-[50px]">
        <div className="start__count flex gap-1 items-center">
          <StarOutlined />
          <span className="text-[0.75rem]">{item.star_count}</span>
        </div>
        {item.language && (
          <div className="language flex gap-1 items-center">
            <div className={`bg-[#3572a5] h-3 w-3 rounded-full`}></div>
            <span className="text-sm">{item.language}</span>
          </div>
        )}
      </div>
    </section>
  );
};

export { ExploreRepo };
