import React, { forwardRef, useImperativeHandle, useRef } from "react";
import Box from "../ui/Box";
import Typography from "../ui/Typography";
import Button from "../ui/Button";
import IconButton from "../ui/IconButton";
import { FaFileUpload, FaImage, FaUpload } from "react-icons/fa";
import { AppContent } from "@/utils/AppContent";

export type fileProps = React.InputHTMLAttributes<HTMLInputElement> & {
  multiple?: boolean;
  setFiles: (file: File[]) => void;
  accept?: string;
  disabled?: boolean;
  card?: boolean;
  icon?: JSX.Element;
};

export type fileRef = {
  current?: HTMLInputElement | null;
};
const FileUpload = forwardRef<fileRef, fileProps>(
  (
    {
      multiple = false,
      accept = "image/*, video/*",
      disabled = false,
      setFiles,
      icon,
      card,
      ...rest
    },
    ref
  ) => {
    const fRef = useRef<HTMLInputElement | null>(null);

    useImperativeHandle(ref, () => ({
      current: fRef.current,
    }));

    const changeHandler = (ev: React.ChangeEvent<HTMLInputElement>) => {
      let files = ev.target.files;
      let data: File[] = [];
      if (ev.target.files?.length! > 0) {
        data = Array.from(files!) as File[];
      }
      setFiles(data);
    };

    if (card) {
      return (
        <Box
          p={3}
          direction="column"
          alignItems="center"
          className="file-upload-section"
          onClick={() => fRef.current?.click()}
        >
          <input
            type="file"
            ref={fRef}
            disabled={disabled}
            multiple={multiple}
            accept={accept}
            onChange={changeHandler}
            className="opacity-0"
          />

          <Box className="file-upload-placeholder">
            <FaUpload />
            <div className="clearfix"></div>
            <Typography className="mb-0" variant="body2" color="success">
              {AppContent.fileUploadDragText}
            </Typography>
            <Typography variant="span">{AppContent.or}</Typography>
            <div className="clearfix"></div>
            <Button size="sm" color="info">
              <FaFileUpload /> {AppContent.browse}
            </Button>
          </Box>
        </Box>
      );
    }

    return (
      <Box className="file-upload">
        <IconButton onClick={() => fRef.current?.click()}>
          {icon ?? <FaImage />}
        </IconButton>
        <input
          type="file"
          ref={fRef}
          disabled={disabled}
          multiple={multiple}
          accept={accept}
          onChange={changeHandler}
          className="opacity-0"
        />
      </Box>
    );
  }
);

export default FileUpload;
