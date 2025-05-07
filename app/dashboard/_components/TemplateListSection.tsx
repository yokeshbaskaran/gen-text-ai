"use client";

import { Templates } from "@/app/(data)/Templates";
import TemplateCard from "./TemplateCard";
import { useEffect, useState } from "react";
import { TemplateType } from "../../../utlis/types";

interface Props {
  userSearchInput: string;
}

const TemplateListSection = ({ userSearchInput }: Props) => {
  const [templateList, setTemplateList] = useState(Templates);

  useEffect(() => {
    // console.log("userSearchInput", userSearchInput);
    if (userSearchInput) {
      const filter = Templates.filter((item) =>
        item.name.toLowerCase().includes(userSearchInput.toLowerCase())
      );

      setTemplateList(filter);
    } else {
      setTemplateList(Templates);
    }
  }, [userSearchInput]);

  return (
    <div className="p-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 cursor-pointer">
      {templateList.map((item: TemplateType, idx: number) => (
        <TemplateCard {...item} key={idx} />
      ))}
    </div>
  );
};

export default TemplateListSection;
