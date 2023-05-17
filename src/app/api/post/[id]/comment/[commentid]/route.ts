import { CustomError } from "@/app/api/errors/custom-error";
import { NotFoundError } from "@/app/api/errors/not-found-error";
import { IRequest, auth } from "@/app/api/middleware/auth";
import { IComment, IPostDoc, Post } from "@/modals/post";
import { NextResponse } from "next/server";

interface IParam {
  params: {
    id: string;
    commentid: string;
  };
}

/**
 * Get single comment
 * @param req
 */
export async function GET(req: IRequest, { params }: IParam) {
  try {
    await auth(req);

    const post = (await Post.findById(params.id)) as IPostDoc;

    const comment = post.comments.find(
      (comment: IComment) =>
        comment._id?.toString() !== params.commentid.toString()
    );

    if (!comment) {
      throw new NotFoundError("Not found");
    }

    return NextResponse.json(comment);
  } catch (error) {
    if (error instanceof CustomError) {
      return NextResponse.json({
        error: { message: error.message, status: error.status },
      });
    }
  }
}

/**
 * Update commit
 * @param req
 */
export async function PUT(req: IRequest, { params }: IParam) {
  try {
    await auth(req);

    const body = (await req.json()) as IComment;

    const post = (await Post.findById(params.id)) as IPostDoc;

    let comments = post.comments.map((comment: IComment) =>
      comment._id?.toString() !== params.commentid.toString()
        ? { ...comment, ...body }
        : comment
    );

    post.comments = comments;
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

/**
 * Delete commit
 * @param req
 */
export async function DELETE(req: IRequest, { params }: IParam) {
  try {
    await auth(req);

    const post = (await Post.findById(params.id)) as IPostDoc;

    let comments = post.comments.filter(
      (comment: IComment) =>
        comment._id?.toString() !== params.commentid.toString()
    );

    post.comments = comments;
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
