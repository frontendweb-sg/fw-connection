import { connectDb } from "@/db";
import { CustomError } from "../../errors/custom-error";
import { NextResponse } from "next/server";
import { IPost, IPostDoc, Post } from "@/modals/post";
import { NotFoundError } from "../../errors/not-found-error";
import { auth } from "../../middleware/auth";

interface IParam {
  params: {
    id: string;
  };
}

/**
 * Get post detail
 * @param req
 * @param param1 id:string
 * @returns IPostDoc
 */
export async function GET(req: Request, { params }: IParam) {
  await connectDb();
  try {
    await auth(req);
    const post = await Post.findById(params.id).populate("user");
    if (!post) {
      throw new NotFoundError("Post not found");
    }

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
 * Update post by post id
 * @param req
 * @param id
 * @returns IPostDoc
 */
export async function PUT(req: Request, { params }: IParam) {
  await connectDb();
  try {
    await auth(req);

    const body = (await req.json()) as IPost;
    const post = (await Post.findById(params.id).populate("user")) as IPostDoc;
    if (!post) {
      throw new NotFoundError("Post not found");
    }

    const result = await Post.findOneAndUpdate(
      { _id: params.id },
      { $set: body }
    ).populate("user");

    return NextResponse.json(result);
  } catch (error) {
    if (error instanceof CustomError) {
      return NextResponse.json({
        error: { message: error.message, status: error.status },
      });
    }
  }
}

/**
 * Delete post
 * @param req
 * @param id
 * @returns
 */
export async function DELETE(req: Request, { params }: IParam) {
  await connectDb();
  try {
    await auth(req);

    const post = await Post.findById(params.id).populate("user");
    if (!post) {
      throw new NotFoundError("Post not found");
    }

    const result = await Post.findOneAndDelete({ _id: params.id });
    return NextResponse.json(result);
  } catch (error) {
    if (error instanceof CustomError) {
      return NextResponse.json({
        error: { message: error.message, status: error.status },
      });
    }
  }
}
