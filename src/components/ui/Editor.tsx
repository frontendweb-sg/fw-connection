import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export type editorProps = {
  onChange: (data: string) => void;
  value?: string;
};

const Editor = ({ onChange, value }: editorProps) => {
  return (
    <CKEditor
      editor={ClassicEditor}
      data={value}
      onChange={(_, editor: any) => {
        const data = editor.getData();
        onChange(data);
      }}
    />
  );
};

export default Editor;
