"use client";
import { Repo } from "@/components/atoms";
import { all_repos, teams } from "@/constants";
import { RepoType } from "@/types";
import { BookOutlined, CaretDownOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import Image from "next/image";
import { useMemo, useState } from "react";

const LeftContainer = () => {
  const [seeMore, setSeeMore] = useState(false);
  const repos = useMemo(() => {
    return seeMore ? all_repos : all_repos.slice(0, 7);
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
        <p className="repositories__title font-semibold">
          {"Top repositories"}
        </p>
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
        {repos.map((repo, i) => {
          return <Repo key={i} item={repo} />;
        })}
        <span
          className="text-[12px] text-gray-500 cursor-pointer"
          onClick={() => setSeeMore(!seeMore)}
        >
          {seeMore ? "See less" : "See more"}
        </span>
      </div>
      <div className="repositories flex items-center justify-between mt-3">
        <p className="repositories__title font-semibold">{"Your teams"}</p>
      </div>
      <div className="repos mt-2 mb-2 flex flex-col gap-2 border border-gray-300 p-2 rounded-[5px] sm:p-0 sm:border-none sm:rounded-none">
        <Input
          className="repos__input bg-[#f5f8fb]"
          placeholder="Find a team..."
        />
        {teams.map((team, i) => {
          return <Repo key={i} item={team} />;
        })}
      </div>
    </section>
  );
};

export { LeftContainer };
