import { IPostDoc } from "@/modals/post";
import Post from "./Post";

/**
 * Post list componenet
 * @returns
 */

export type postListProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
  posts: IPostDoc[];
};
const PostList = ({ posts, ...rest }: postListProps) => {
  return (
    <div className="post-list p-3 shadow-sm rounded mb-3" {...rest}>
      {posts.map((post: IPostDoc) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
