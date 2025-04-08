"use client";
import { CopilotSvg } from "@/components/svgs";
import { IssuesSvg } from "@/components/svgs/IssuesSvg";
import {
  CaretDownOutlined,
  GithubOutlined,
  InboxOutlined,
  MenuOutlined,
  PlusOutlined,
  PullRequestOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between py-3  px-2">
      <section className="flex items-center gap-2">
        <Button icon={<MenuOutlined />} />
        <GithubOutlined style={{ fontSize: "30px" }} />
        <p className="font-bold">{"Dashboard"}</p>
      </section>
      <section className="right flex gap-4 items-center">
        <div className="input__div hidden lg:flex gap-2 px-1 py-[3px] border border-gray-300   rounded-lg">
          <SearchOutlined />
          <p>
            {"Type"} <span className="px-2 rounded-sm">/</span> {"to search"}
          </p>
        </div>
        <div className="input__div flex gap-2 p-2 border border-gray-300 rounded-lg lg:hidden">
          <SearchOutlined />
        </div>

        <div className="copilot flex items-center border border-gray-300 rounded-lg max-sm:hidden">
          <div className="px-1 py-[3px] border-r border-gray-300">
            <CopilotSvg />
          </div>
          <div className="px-1 py-[3px]">
            <CaretDownOutlined />
          </div>
        </div>
        <div className="max-sm:hidden flex gap-2">
          <div className="text-gray-300">| </div>
          <div className="flex border border-gray-300 rounded-lg p-[6px] gap-3">
            <PlusOutlined />
            <CaretDownOutlined />
          </div>
          <div className="issues border border-gray-300 rounded-lg p-[6px]">
            <IssuesSvg />
          </div>
          <div className="pr border border-gray-300 rounded-lg p-[6px]">
            <PullRequestOutlined />
          </div>
        </div>

        <div className="inbox border border-gray-300 rounded-lg">
          <InboxOutlined style={{ fontSize: "30px", color: "gray" }} />
        </div>
        <div className="avatar">
          <Image
            src="/assets/avatar.png"
            alt="avatar"
            width={30}
            height={30}
            className="rounded-full"
          />
        </div>
      </section>
    </header>
  );
};

export { Header };
