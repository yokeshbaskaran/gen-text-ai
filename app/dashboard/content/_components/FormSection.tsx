import Image from "next/image";
import { TemplateType } from "../../../../utlis/types";
import iconImg from "../../../../public/logo.png";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { Loader2Icon } from "lucide-react";

interface Props {
  selectedTemplate?: TemplateType;
  userFormInput: (v: TemplateType) => void;
  loading: boolean;
}

const FormSection = ({ selectedTemplate, userFormInput, loading }: Props) => {
  // console.log("selectedTemplate", selectedTemplate);
  const [formData, setFormData] = useState([]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Data sent", formData);
    userFormInput(formData);
  };

  return (
    <>
      <div className="p-5 shadow-md border rounded-lg">
        <Image
          src={selectedTemplate?.icon || iconImg}
          width={50}
          height={50}
          alt="icon"
        />
        <h2 className="font-bold text-2xl text-primary">
          {selectedTemplate?.name}
        </h2>
        <p className="text-gray-500 text-sm">{selectedTemplate?.desc}</p>

        <form className="mt-6" onSubmit={handleSubmit}>
          {selectedTemplate?.form?.map((item, idx) => (
            <div className="my-2 mb-3 flex flex-col gap-2" key={idx}>
              <label className="font-semibold text-gray-700">
                {item.label}
              </label>
              {item.field == "input" ? (
                <Input
                  name={item.name}
                  required={item?.required}
                  onChange={handleInputChange}
                />
              ) : item.field == "textarea" ? (
                <Textarea
                  name={item.name}
                  required={item?.required}
                  onChange={handleInputChange}
                />
              ) : null}
            </div>
          ))}

          <Button disabled={loading} type="submit" className="w-full py-6">
            {loading ? (
              <Loader2Icon className="animate-spin" />
            ) : (
              "Generate content"
            )}
          </Button>
        </form>
      </div>
    </>
  );
};

export default FormSection;
