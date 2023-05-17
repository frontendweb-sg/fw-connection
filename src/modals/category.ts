import mongoose from "mongoose";

export const CATEGORY_TABLE = "Category";
export interface ICategory {
  title: string;
  slug: string;
  description?: string;
  active?: string;
}

export interface ICategoryDoc extends mongoose.Document<ICategory>, ICategory {}

const schema = new mongoose.Schema(
  {
    title: { type: String, require: [true, "Category name is required"] },
    slug: { type: String, require: [true, "Slug is required"] },
    description: { type: String, default: "" },
    active: { type: String, default: true },
  },
  {
    timestamps: true,
    toJSON: {
      transform(doc, ret, options) {
        doc.id = ret._id;
        ret.id = ret._id;
        delete ret.__v;
      },
    },
  }
);

export const Category =
  mongoose.models[CATEGORY_TABLE] || mongoose.model(CATEGORY_TABLE, schema);
