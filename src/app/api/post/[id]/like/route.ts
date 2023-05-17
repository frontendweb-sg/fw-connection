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

      if (like.active) {
        return NextResponse.json({
          message: AppContent.liked,
        });
      }
      like.active = true;
    } else {
      const newLike = { user: req.user?.id!, active: true };
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
