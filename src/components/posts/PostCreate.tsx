"use client";

import Typography from "../ui/Typography";
import Textarea from "../ui/Textarea";
import Box from "../ui/Box";
import Button from "../ui/Button";
import { forwardRef } from "react";
import { FaCamera, FaCode, FaPencilAlt, FaVideo } from "react-icons/fa";
import IconButton from "../ui/IconButton";

export interface postCreateProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {}

/**
 * Post create
 * @returns
 */
const PostCreate = forwardRef<HTMLDivElement, postCreateProps>(({}, ref) => {
  return (
    <div className="post-create" ref={ref}>
      <div className="d-flex mb-3">
        <Typography variant="subtitle2" color="primary">
          <FaPencilAlt className="me-2" />
          Create Post
        </Typography>
      </div>
      <Textarea />

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
        <Button>Publish</Button>
      </Box>
    </div>
  );
});

export default PostCreate;
