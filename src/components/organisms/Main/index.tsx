import {
  Header,
  LeftContainer,
  MainContainer,
  RightContainer,
} from "@/components/molecules";

const Main = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className=" header__container min-h-[40px] ">
        <Header />
      </div>
      <div className="header__container flex gap-4 flex-row w-full">
        <div className="left__container w-[450px]">
          <LeftContainer />
        </div>
        <div className=" feed_container  w-full flex-1 ">
          <MainContainer />
        </div>
        <div className=" right__containt w-[450px]  ">
          <RightContainer />
        </div>
      </div>
    </div>
  );
};

export { Main };
