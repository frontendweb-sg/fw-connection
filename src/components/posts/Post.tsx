import { IPostDoc } from "@/modals/post";
import PostAction from "./PostAction";
import PostUser from "./PostUser";
import PostLike from "./PostLike";

/**
 * Post
 * @returns
 */

export type postProps = {
  post: IPostDoc;
};

const Post = () => {
  return (
    <div className="p-3">
      <PostUser />
      <PostAction />
      <PostLike />
    </div>
  );
};

export default Post;
