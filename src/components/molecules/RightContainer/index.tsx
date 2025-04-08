import { LatestChange } from "@/components/atoms";

const RightContainer = () => {
  return (
    <section className="pt-3 max-w-[350px]">
      <aside className="right__container__1 border border-gray-300 rounded-lg p-3">
        <p className="text-sm font-bold">Latest Changes</p>
        <LatestChange />
      </aside>
      <aside className="right__container__2"></aside>
    </section>
  );
};

export { RightContainer };
