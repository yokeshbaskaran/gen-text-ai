// "use client";

import { useEffect, useRef } from "react";
import { Editor } from "@toast-ui/react-editor";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import "@toast-ui/editor/dist/toastui-editor.css";

interface Props {
  aiOutput: string;
}

const OutputSection = ({ aiOutput }: Props) => {
  const editorRef = useRef<Editor>(null);

  useEffect(() => {
    const editorInstance = editorRef.current?.getInstance();
    editorInstance.setMarkdown(aiOutput);
  }, [aiOutput]);

  const handleCopy = () => {
    if (editorRef.current) {
      const content = editorRef.current.getInstance().getMarkdown();
      navigator.clipboard
        .writeText(content)
        .then(() => {
          console.log("Content copied to clipboard!");
        })
        .catch((err) => {
          console.error("Failed to copy content: " + err);
        });
    }
  };

  return (
    <div className="bg-white shadow-lg border">
      <div className="p-3 flex justify-between items-center">
        <h2 className="font-medium text-lg">Your Result</h2>
        <Button className="flex gap-2" onClick={handleCopy}>
          <Copy />
          Copy
        </Button>
      </div>

      <Editor
        ref={editorRef}
        initialValue="Your result will appear here"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        height="400px"
        // onChange={() =>
        //   console.log(editorRef.current.getInstance().getMarkdown())
        // }
      />
    </div>
  );
};

export default OutputSection;
