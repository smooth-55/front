import { ExploreRepo, LatestChange } from "@/components/atoms";
import { explore_items } from "@/constants";
import { ExploreType } from "@/types";

const RightContainer = () => {
  return (
    <section className="pt-3 max-w-[350px] flex flex-col gap-4">
      <aside className="right__container__1 border border-gray-300 rounded-lg p-3">
        <p className="text-sm font-bold">Latest Changes</p>
        <LatestChange />
      </aside>
      <aside className="right__container__2 border border-gray-300 rounded-lg p-3">
        <p className="text-sm font-bold mb-1 ">Explore repositories</p>
        {explore_items.map((item, i) => {
          const hr_line = i === explore_items.length - 1 ? false : true;
          return (
            <div key={item.id} className="flex flex-col gap-2">
              <ExploreRepo key={item.id} item={item} />
              {hr_line && <div className="border border-gray-300 my-2"></div>}
            </div>
          );
        })}
      </aside>
    </section>
  );
};

export { RightContainer };
