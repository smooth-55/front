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
      <div className="header__container flex gap-4 flex-row  w-full px-2 max-sm:flex-col">
        <div className="left__container w-full items-center md:max-w-[450px] md:min-w-[300px] max-h-[150vh]">
          <LeftContainer />
        </div>
        <div className=" feed_container  w-full flex-1 ">
          <MainContainer />
        </div>
        <div className=" right__containt max-w-[450px] min-w-[300px] max-xl:hidden">
          <RightContainer />
        </div>
      </div>
    </div>
  );
};

export { Main };
