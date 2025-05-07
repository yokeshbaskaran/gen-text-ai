"use client";

import { useState } from "react";
import SearchSection from "./_components/SearchSection";
import TemplateListSection from "./_components/TemplateListSection";

const DashBoard = () => {
  const [userSearchInput, setUserSearchInput] = useState<string>("");

  // console.log(userSearchInput);

  return (
    <div>
      <SearchSection
        onSearchInput={(value: string) => setUserSearchInput(value)}
      />

      <TemplateListSection userSearchInput={userSearchInput} />
    </div>
  );
};

export default DashBoard;
