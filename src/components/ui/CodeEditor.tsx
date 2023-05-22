import React, { useRef, useState } from "react";
import Box from "./Box";
import Editor from "@monaco-editor/react";
import Typography from "./Typography";
import type { EditorProps } from "@monaco-editor/react";
import { useEffect } from "react";

/**
 * Code editor
 * @returns
 */
export type codeEditorProps = EditorProps & {
  name: string;
  setFieldValue: (name: string, value: string) => void;
};

const LANGUAGES = [
  "html",
  "css",
  "scss",
  "javascript",
  "TypeScript",
  "json",
  "mysql",
  "php",
];

const CodeEditor = ({
  name,
  value,
  height = "50vh",
  setFieldValue,
  ...rest
}: codeEditorProps) => {
  const [localValue, setLocalValue] = useState(value);
  const [language, setLanguage] = useState<string>("javascript");
  const editorRef = useRef(null);

  // change language
  const onChangeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setLanguage(value);
    setLocalValue("");
  };
  const handleChange = (newValue: string) => {
    setFieldValue(name, newValue);
  };
  useEffect(() => {
    if (value) {
      setLocalValue(value);
    }
  }, [value]);

  return (
    <Box>
      <Box flex="flex" justifyContent="between" className="p-2 bg-light">
        <Typography variant="subtitle2">Select</Typography>
        <Box>
          <select value={language} onChange={onChangeLanguage}>
            {LANGUAGES.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
        </Box>
      </Box>
      <Editor
        name={name}
        defaultValue={value}
        defaultLanguage={language}
        value={localValue}
        language={language}
        height={height}
        onChange={handleChange}
        {...rest}
      />
    </Box>
  );
};

export default CodeEditor;
