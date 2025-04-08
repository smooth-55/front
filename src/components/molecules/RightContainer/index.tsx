import { ExploreRepo, LatestChange } from "@/components/atoms";

const RightContainer = () => {
  return (
    <section className="pt-3 max-w-[350px] flex flex-col gap-4">
      <aside className="right__container__1 border border-gray-300 rounded-lg p-3">
        <p className="text-sm font-bold">Latest Changes</p>
        <LatestChange />
      </aside>
      <aside className="right__container__2 border border-gray-300 rounded-lg p-3">
        <p className="text-sm font-bold">Latest Changes</p>
        <ExploreRepo />
      </aside>
    </section>
  );
};

export { RightContainer };
