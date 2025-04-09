import {
  Header,
  LeftContainer,
  MainContainer,
  RightContainer,
} from "@/components/molecules";

const Main = () => {
  return (
    <div className="flex flex-col gap-2 h-screen overflow-hidden">
      <div className="header__container min-h-[40px]">
        <Header />
      </div>
      <div className="flex gap-4 flex-row w-full px-2 h-full">
        <div className="left__container max-w-[450px] min-w-[300px] max-h-screen overflow-y-auto">
          <LeftContainer />
        </div>
        <div className="flex flex-row flex-1 gap-4 overflow-y-auto h-full">
          <div className="feed_container flex-1">
            <MainContainer />
          </div>
          <div className="right__containt max-w-[450px] min-w-[300px]">
            <RightContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Main };
