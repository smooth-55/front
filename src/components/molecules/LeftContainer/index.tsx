"use client";
import { Repo } from "@/components/atoms";
import { BookOutlined, CaretDownOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import Image from "next/image";
import { useMemo, useState } from "react";

const LeftContainer = () => {
  const [seeMore, setSeeMore] = useState(false);
  const repoCount = useMemo(() => {
    return seeMore ? 100 : 7;
  }, [seeMore]);
  return (
    <section className="left__container pt-4 px-2 max-h-[120vh] overflow-y-scroll py-3">
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
      <div className="repos mt-2 mb-2 flex flex-col gap-2 border border-gray-300 p-2 rounded-[5px] sm:p-0 sm:border-none sm:rounded-none">
        <Input
          className="repos__input bg-[#f5f8fb]"
          placeholder="Find a repository..."
        />
        {Array.from({ length: repoCount }).map((_, i) => (
          <Repo key={i} />
        ))}
        <span
          className="text-sm text-gray-500 cursor-pointer"
          onClick={() => setSeeMore(!seeMore)}
        >
          {seeMore ? "See less" : "See more"}
        </span>
      </div>
    </section>
  );
};

export { LeftContainer };
