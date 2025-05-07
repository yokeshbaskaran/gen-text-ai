import { Templates } from "@/app/(data)/Templates";
import ClientPage from "../_components/ClientPage";
import { TemplateType } from "@/utlis/types";

interface Props {
  params: {
    "template-slug": string;
  };
}

const CreateNewContent = ({ params }: Props) => {
  const selectedTemplate: TemplateType | undefined = Templates?.find(
    (item) => item.slug === params["template-slug"]
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
