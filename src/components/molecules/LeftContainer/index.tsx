import { Repo } from "@/components/atoms";
import { BookOutlined, CaretDownOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import Image from "next/image";

const LeftContainer = () => {
  return (
    <section className="left__container pt-4 px-2 max-h-[100vh] overflow-y-scroll">
      <div className="user__info flex items-center gap-2">
        <Image
          src="/assets/avatar.png"
          alt="avatar"
          width={20}
          height={20}
          className="rounded-full"
        />
        <p className="username">
          {"smooth-55"}{" "}
          <span>
            <CaretDownOutlined />
          </span>
        </p>
      </div>
      <div className="repositories flex items-center justify-between mt-2">
        <p className="repositories__title">{"Top repositories"}</p>
        <Button
          type="text"
          className="repositories__btn flex items-center gap-2 text-left"
          icon={<BookOutlined />}
          style={{ backgroundColor: "#238636", color: "white" }}
        >
          {"New"}
        </Button>
      </div>
      <div className="repos mt-2 mb-2 flex flex-col gap-2">
        <Input className="repos__input" placeholder="Find a repository..." />
        {Array.from({ length: 20 }).map((_, i) => (
          <Repo key={i} />
        ))}
        <Repo />
        <Repo />
        <Repo />
        <Repo />
      </div>
    </section>
  );
};

export { LeftContainer };
