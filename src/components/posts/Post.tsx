import { IPostDoc } from "@/modals/post";
import PostAction from "./PostAction";
import PostUser from "./PostUser";
import PostLike from "./PostLike";
import Image from "next/image";

/**
 * Post
 * @returns
 */

export type postProps = {
  post: IPostDoc;
};

const Post = ({ post, ...rest }: postProps) => {
  return (
    <div className="p-3">
      <PostUser user={post.user} />

      <PostAction />
      <PostLike />
    </div>
  );
};

export default Post;
