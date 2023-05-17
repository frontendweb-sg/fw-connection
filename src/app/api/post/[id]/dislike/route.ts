import { CustomError } from "@/app/api/errors/custom-error";
import { IRequest, auth } from "@/app/api/middleware/auth";
import { ILike, IPostDoc, Post } from "@/modals/post";
import { AppContent } from "@/utils/AppContent";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

interface IParam extends NextApiResponse {
  params: {
    id: string;
    likeid: string;
  };
}

export async function POST(req: IRequest, { params }: IParam) {
  try {
    await auth(req);

    // post
    const post = (await Post.findById(params.id)) as IPostDoc;

    // all likes by user
    const likes = post.likes.filter(
      (like: ILike) => like.user.toString() === req.user?.id
    ) as ILike[];

    if (likes.length > 0) {
      const like = post.likes.find(
        (like: ILike) => like.user.toString() === req.user?.id!
      ) as ILike;

      if (!like.active) {
        return NextResponse.json({
          message: AppContent.dislike,
        });
      }
      like.active = false;
    } else {
      const newLike = {
        user: req.user?.id!,
        active: false,
      };
      post.likes.push(newLike);
    }

    await post.save();
    return NextResponse.json(post);
  } catch (error) {
    if (error instanceof CustomError) {
      return NextResponse.json({
        error: { message: error.message, status: error.status },
      });
    }
  }
}

function updateLikes(post: IPostDoc, userId: string, value: boolean) {
  const existLikes = post.likes as ILike[];
  const index = existLikes.findIndex(
    (like: ILike) => like.user.toString() === userId
  );
  const existLike = existLikes[index];
  existLike.active = value;
  existLikes[index] = existLike;
  post.likes = existLikes;
}
