import { IPost } from "@/modals/post";

class PostServices {
  getFreshObject() {
    return {
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
    };
  }

  getPost(id: string | number) {}
  getPosts() {}
  createPost(body: IPost) {
    try {
    } catch (error) {}
  }
}

const postService = new PostServices();
export { postService };
