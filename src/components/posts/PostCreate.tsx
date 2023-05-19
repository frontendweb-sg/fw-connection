"use client";

import Typography from "../ui/Typography";
import Textarea from "../ui/Textarea";
import Box from "../ui/Box";
import Button from "../ui/Button";
import { forwardRef, useState } from "react";
import { FaCamera, FaCode, FaPencilAlt, FaVideo } from "react-icons/fa";
import IconButton from "../ui/IconButton";
import { AppContent } from "@/utils/AppContent";
import FileViewer from "../upload/FileViewer";
import FileUpload from "../upload/FileUpload";
import Editor from "../ui/Editor";

export interface postCreateProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {}

/**
 * Post create
 * @returns
 */
const PostCreate = forwardRef<HTMLDivElement, postCreateProps>(({}, ref) => {
  const [files, setFiles] = useState<File[]>();

  return (
    <div className="post-create" ref={ref}>
      <div className="d-flex mb-3">
        <Typography variant="subtitle2" color="primary">
          <FaPencilAlt className="me-2" />
          {AppContent.createPost}
        </Typography>
      </div>
      <Textarea />
      <FileViewer files={files!} setFiles={setFiles} />
      <FileUpload multiple setFiles={(files) => setFiles(files)} />
      <Box>
        <ul className="nav">
          <li>
            <IconButton>
              <FaCamera />
            </IconButton>
          </li>
          <li>
            <IconButton>
              <FaCode />
            </IconButton>
          </li>
          <li>
            <IconButton>
              <FaVideo />
            </IconButton>
          </li>
        </ul>
      </Box>
      <Box justifyContent="between" p={2}>
        <select className="form-control w-25">
          {["public", "hold", "only friends"].map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
        <Button>{AppContent.publish}</Button>
      </Box>
    </div>
  );
});

export default PostCreate;
