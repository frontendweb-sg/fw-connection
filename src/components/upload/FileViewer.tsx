import React from "react";
import Box from "../ui/Box";
import Image from "next/image";

import IconButton from "../ui/IconButton";
import { FaTimes } from "react-icons/fa";

export type fileViewerProps = React.HTMLAttributes<HTMLDivElement> & {
  files: File[];
  setFiles: (option: File[]) => void;
};

/**
 * File upload viewer
 * @param param0
 * @returns
 */
const FileViewer = ({ files = [], setFiles }: fileViewerProps) => {
  const onRemoveHandler = (value: File) => {
    const states = [...files] as File[];
    const index = states.findIndex((file: File) => file.name === value.name);
    states.splice(index, 1);
    setFiles(states);
  };

  return (
    <>
      <Box className="d-grid gap-2 file-upload-viewer d-flex flex-wrap">
        {files.map((file: File) => {
          const url = URL.createObjectURL(file);
          return (
            <Box
              key={file.name}
              className="rounded overflow-hidden border position-relative"
            >
              <Image src={url} alt={file.name} width="80" height="80" />
              <IconButton
                className="remove"
                onClick={() => onRemoveHandler(file)}
              >
                <FaTimes />
              </IconButton>
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default FileViewer;
