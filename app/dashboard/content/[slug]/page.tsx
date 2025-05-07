import { Templates } from "@/app/(data)/Templates";
import ClientPage from "../_components/ClientPage";
import { TemplateType } from "@/utlis/types";
import React from "react";

interface Props {
  params: {
    slug: string;
  };
}

const CreateNewContent = ({ params }: Props) => {
  const { slug } = params;

  const selectedTemplate: TemplateType | undefined = Templates?.find(
    (item) => item.slug === slug
  );

  if (!selectedTemplate) {
    return <p>Template not found</p>;
  }

  return (
    <>
      <ClientPage selectedTemplate={selectedTemplate} />
    </>
  );
};

export default CreateNewContent;
