"use client";

import { TemplateType } from "../../../../utlis/types";
import FormSection from "../_components/FormSection";

// import OutputSection from "../_components/OutputSection";
import dynamic from "next/dynamic";

const OutputSection = dynamic(() => import("./OutputSection"), {
  ssr: false,
});

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { chatSession } from "@/utlis/AIModal";
import { useState } from "react";
import { db } from "@/utlis/db";
import { AIOutput } from "@/utlis/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";

interface Props {
  selectedTemplate: TemplateType;
}

const CreateNewContent = ({ selectedTemplate }: Props) => {
  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState("");

  //clerk
  const { user } = useUser();

  const generateAIContent = async (formData: TemplateType) => {
    console.log("generateAIContent formData", formData);
    setLoading(true);
    const SelectedPrompt = selectedTemplate?.aiPrompt;
    const FinalAIPrompt = JSON.stringify(formData) + ", " + SelectedPrompt;

    try {
      const result = await chatSession.sendMessage(FinalAIPrompt);
      const response = result.response.text();
      // console.log("ai-result", response);
      await saveDb(formData, selectedTemplate?.slug, aiOutput);
      setAiOutput(response);
      setLoading(false);
      return response;
    } catch (error) {
      console.log("AIChat error:", error);
    }
  };

  const saveDb = async (
    formData: TemplateType,
    slug: string,
    aiResp: string
  ) => {
    if (formData && slug && aiResp) {
      const result = await db.insert(AIOutput).values({
        formData: JSON.stringify(formData),
        templateSlug: slug,
        aiResponse: aiResp,
        createdBy: user?.primaryEmailAddress?.emailAddress ?? "Unknown User",
        createdAt: moment().format("DD/MM/yyyy"),
      });

      // const data = {
      //   formData,
      //   templateSlug: slug,
      //   aiResponse: aiResp,
      //   createdBy: user?.primaryEmailAddress?.emailAddress,
      //   createdAt: moment().format("DD/MM/yyyy"),
      // };

      console.log("save-db", result);
    }
  };

  return (
    <div className="p-5">
      <Link href="/dashboard">
        <Button>
          <ArrowLeft />
          Back
        </Button>
      </Link>

      <div className="my-5 grid grid-cols-1 md:grid-cols-2 gap-5">
        <FormSection
          userFormInput={(v: TemplateType) => generateAIContent(v)}
          selectedTemplate={selectedTemplate}
          loading={loading}
        />
        <OutputSection aiOutput={aiOutput} />
      </div>
    </div>
  );
};

export default CreateNewContent;
