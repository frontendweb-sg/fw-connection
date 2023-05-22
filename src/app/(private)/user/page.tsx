import PostCreate from "@/components/posts/PostCreate";
import PostList from "@/components/posts/PostList";
import { getPosts } from "@/lib/posts";
import { IPostDoc } from "@/modals/post";

/**
 * User page
 * @returns
 */
const Page = async () => {
  const posts = await getPosts();

  return (
    <div className="">
      <PostCreate />
      <PostList posts={posts} />
    </div>
  );
};

export default Page;
