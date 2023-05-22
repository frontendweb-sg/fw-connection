import { BadRequestError } from "@/app/api/errors/bad-error";
import { API } from "@/axios-instance";
import { IPost } from "@/modals/post";

export const postInitialObject = () => ({
  title: "",
  slug: "",
  description: "",
  photos: null,
  user: "",
  tags: null,
  comments: null,
  likes: null,
  active: true,
  status: "Pending",
});

const getPost = async () => {};
const getPosts = async () => {
  try {
    const { data } = await API.get("post");
    return data;
  } catch (error) {
    console.log(error);
  }
};
const createPost = async () => {};
const updatePost = async () => {};
const deletePost = async (id: string) => {
  try {
    const { data } = await API.delete("post/" + id);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { getPost, getPosts, createPost, updatePost, deletePost };
