import mongoose from "mongoose";
import { IUserDoc, USER_TABLE } from "./user";

export const POST_TABLE = "Post";
export interface IComment {
  _id?: string;
  user: string;
  message: string;
  status: Status;
}

export interface ILike {
  user: string;
  active: boolean;
}

export enum Status {
  publish = "publish",
  pending = "pending",
  rejected = "rejected",
  approved = "approved",
}

export interface IPost {
  title: string;
  slug: string;
  description: string;
  photos: string[] | null;
  user: IUserDoc | string;
  tags: string[] | null;
  comments: IComment[] | null;
  likes: ILike[] | null;
  active?: boolean;
  status: Status;
}

export interface IPostDoc extends mongoose.Document<IPost>, IPost {}

const schema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: USER_TABLE },
    title: { type: String, require: [true, "Title is required"] },
    slug: { type: String, require: [true, "Slug is required"] },
    description: {
      type: String,
      default: "",
      require: [true, "Description is required"],
    },
    photos: { type: [String], default: [] },
    tags: { type: [String], default: [] },
    comments: [
      {
        user: { type: mongoose.Schema.Types.ObjectId, ref: USER_TABLE },
        message: { type: String, required: [true, "Message is required"] },
        status: {
          type: String,
          default: Status.pending,
          enum: Status,
        },
      },
    ],
    likes: [
      {
        user: { type: mongoose.Schema.Types.ObjectId, ref: USER_TABLE },
        active: { type: Boolean },
      },
    ],
    active: { type: Boolean, default: true },
  },
  {
    timestamps: true,
    bufferCommands: false,
    toJSON: {
      transform(doc, ret, options) {
        doc.id = ret._id;
        ret.id = ret._id;
        delete ret.__v;
      },
    },
  }
);

export const Post =
  mongoose.models[POST_TABLE] || mongoose.model(POST_TABLE, schema);
