import { CustomError } from "@/app/api/errors/custom-error";
import { NotFoundError } from "@/app/api/errors/not-found-error";
import { IRequest, auth } from "@/app/api/middleware/auth";
import { IComment, IPostDoc, Status, Post } from "@/modals/post";
import { NextResponse } from "next/server";

interface IParam {
  params: {
    id: string;
  };
}
/**
 * Get all post comments
 * @param req
 */
export async function GET(req: IRequest, { params }: IParam) {
  try {
    const post = (await Post.findById({ _id: params.id })) as IPostDoc;

    if (!post) {
      throw new NotFoundError("Post not found");
    }

    return NextResponse.json(post.comments);
  } catch (error) {
    if (error instanceof CustomError) {
      return NextResponse.json({
        error: { message: error.message, status: error.status },
      });
    }
  }
}

/**
 * Post comment
 * @param req
 * @param param1
 * @returns
 */
export async function POST(req: IRequest, { params }: IParam) {
  try {
    // body
    await auth(req);

    const body = (await req.json()) as IComment;
    body.user = req.user?.id!;

    // post
    const post = (await Post.findById(params.id).populate("user")) as IPostDoc;

    // comments
    post.comments.push(body);
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
