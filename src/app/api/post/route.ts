import { IPost, Post } from "@/modals/post";
import { NextResponse } from "next/server";
import { IRequest, auth } from "../middleware/auth";
import { BadRequestError } from "../errors/bad-error";
import { CustomError } from "../errors/custom-error";
import { connectDb } from "@/db";
import { Upload } from "@/utils/Multer";

export async function GET(req: Request) {
  await connectDb();
  const users = await Post.find({}).populate("user");
  return NextResponse.json(users);
}

export async function POST(req: IRequest) {
  await connectDb();
  const body = (await req.json()) as IPost;
  console.log("dd", body);

  // const bb = await req.formData();
  // const files = bb.getAll("photos") as File[];
  // const fileToStorage = files[0];
  // console.log("dd", bb, fileToStorage.name);

  try {
    await auth(req);

    let slug = body.slug ?? body.title.replace(/\s+/g, "-");

    const hasSlug = await Post.findOne({ slug: slug });
    if (hasSlug) {
      return new BadRequestError(
        "Post is already existed with this name, please use another one"
      );
    }

    body.user = req.user?.id!;
    body.slug = slug;
    const post = new Post(body);
    const result = await post.save();
    return NextResponse.json(result);
  } catch (error) {
    if (error instanceof CustomError) {
      return NextResponse.json({
        error: { message: error.message, status: error.status },
      });
    }
  }
}
