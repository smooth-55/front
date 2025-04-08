import { News } from "@/components/atoms";
import { AlignCenterOutlined, SendOutlined } from "@ant-design/icons";
import { Input } from "antd";

const MainContainer = () => {
  return (
    <div className="flex flex-col gap-4 w-full h-full p-4">
      <div className="ask_copilot border border-gray-300 rounded-lg flex items-center gap-2 px-2 py-1">
        <Input
          style={{
            border: "none",
            outline: "none",
            boxShadow: "none",
            padding: "10px 5px 10px 5px",
          }}
          placeholder="Ask Copilot"
        />
        <SendOutlined />
      </div>
      <div className="label flex justify-between">
        <p className="font-bold text-[24px]">Home</p>
        <div className="filter flex gap-2 border border-gray-300 bg-[#f6f8fb] rounded-lg px-2 w-[80px]">
          <AlignCenterOutlined />
          <p>Filter</p>
        </div>
      </div>
      <News />
      <News />
      <News />
      <News />
      <News />
      <News />
      <News />
    </div>
  );
};

export { MainContainer };
