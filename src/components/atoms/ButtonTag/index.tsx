import { MergeOutlined } from "@ant-design/icons";

const ButtonTag = () => {
  return (
    <button className="bg-[#8250df] flex gap-2 text-white w-[100px] px-2 py-2 rounded-[20px]">
      <MergeOutlined />
      <h4 className="text-[12px]">{"Merged"}</h4>
    </button>
  );
};
export { ButtonTag };
