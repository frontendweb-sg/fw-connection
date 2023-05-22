"use client";

import Typography from "../ui/Typography";
import Textarea from "../ui/Textarea";
import Box from "../ui/Box";
import Button from "../ui/Button";
import { forwardRef, useRef, useState } from "react";
import {
  FaCamera,
  FaCode,
  FaImage,
  FaPencilAlt,
  FaVideo,
} from "react-icons/fa";
import IconButton from "../ui/IconButton";
import { AppContent } from "@/utils/AppContent";
import FileViewer from "../upload/FileViewer";
import FileUpload from "../upload/FileUpload";
import CodeEditor from "../ui/CodeEditor";
import Modal, { modalRef } from "../ui/Modal";
import Input from "../ui/Input";
import Form from "../ui/Form";
import FormGroup from "../ui/FormGroup";
import PostUser from "./PostUser";
import { useFormik } from "formik";
import { API } from "../../axios-instance";
import { postService } from "@/services/post.services";
import { useSession } from "next-auth/react";
export interface postCreateProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {}

/**
 * Post create
 * @returns
 */
const PostCreate = forwardRef<HTMLDivElement, postCreateProps>(({}, ref) => {
  const [files, setFiles] = useState<File[]>();
  const { data: session } = useSession();

  const codeModalRef = useRef<modalRef>(null);

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: postService.getFreshObject(),
      onSubmit: async (values) => {
        values.slug = values.title.replace(/\s+/g, "-") as string;
        const res = await API.post("/api/post", values);
        console.log(res);
      },
    });

  return (
    <div className="bg-white p-3 shadow-sm rounded">
      <Form onSubmit={handleSubmit}>
        <PostUser user={session?.user!} />
        <FormGroup>
          <Textarea rows={5} />
        </FormGroup>
        <Box flex="flex" className="mb-2">
          <ul className="nav">
            <li>
              <IconButton onClick={codeModalRef.current?.onOpen}>
                <FaImage />
              </IconButton>
            </li>
            <li>
              <IconButton onClick={codeModalRef.current?.onOpen}>
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
        <Box flex="flex" justifyContent="between" p={2}>
          <select className="form-control w-25">
            {["public", "hold", "only friends"].map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
          <Button type="submit">{AppContent.publish}</Button>
        </Box>
      </Form>

      <Modal ref={codeModalRef} label="Upload image">
        <FileUpload card multiple setFiles={(files) => setFiles(files)} />
      </Modal>
    </div>
  );
});

export default PostCreate;
